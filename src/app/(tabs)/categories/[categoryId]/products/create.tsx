import { View, StyleSheet, Image, ScrollView } from 'react-native';
import ImagePicker from '@components/input/ImagePicker';
import DropDown from '@components/input/DropDown';
import DateTimePicker from '@components/input/DateTimePicker';
import CustomTextInput from '@components/input/CustomTextInput';
import { AppDispatch, persistor, RootState } from '@state/store';
import { useDispatch, useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import {
  Order,
  OrderStatus,
  PersonalizationData,
  Product,
} from '@models/Types';
import CustomButton from '@components/input/CustomButton';
import CustomSwitch from '@components/input/CustomSwitch';
import { useRef, useState, Fragment } from 'react';
import PaddingContainer from '@components/PaddingContainer';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import TermsAndConditions from '@components/TermsAndConditions';
import {
  createOrderAsync,
  createOrUpdatePersonalizationDataAsync,
  setSelectedPersonalizationDataId,
} from '@state/productsDataSlice';
import { z } from 'zod';
import InputValidationError from '@components/input/InputValidationError';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Crypto from 'expo-crypto';
import { router } from 'expo-router';
import Screens from '@constants/Screens';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    height: hp('10%'),
    flexDirection: 'row',
  },
  productImage: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    marginLeft: '5%',
  },
  productText: {
    flex: 1,
    textAlignVertical: 'center',
    marginLeft: '5%',
  },
  imagePickerContainer: {
    height: hp('30%'),
  },
  textInputContainer: {
    height: hp('10%'),
  },
  dropdownContainer: {
    height: hp('10%'),
  },
  dateTimePickerContainer: {
    height: hp('10%'),
  },
  buttonContainer: {
    height: hp('8%'),
  },
  switchContainer: {
    height: hp('6%'),
  },
});

function initProductOptions(
  productOptions: Map<string, string[]> | undefined,
): Map<string, string> {
  if (!productOptions) {
    return new Map<string, string>();
  }
  let productOptionsMap = new Map<string, string>();
  productOptions.forEach((value, key) => {
    productOptionsMap.set(key, value[0]);
  });
  return productOptionsMap;
}

export default function ProductCreateScreen() {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const scrollViewRef = useRef<ScrollView>(null);
  const [errors, setErrors] = useState<
    z.ZodFormattedError<
      {
        message: string;
        image: string;
        dropdown: Map<string, string>;
        dateTime: Date;
        switch: true;
      },
      string
    >
  >({} as any);
  // Redux state
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector(
    (state: RootState) => state.productsData.products,
  );
  const selectedProductId = useSelector(
    (state: RootState) => state.productsData.selectedProductId,
  );
  const product: Product | undefined = ProductsHelper.getProductBasedOnId(
    selectedProductId,
    products,
  );
  const personalizationData = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );
  const selectedPersonalizationDataId = useSelector(
    (state: RootState) => state.productsData.selectedPersonalizationDataId,
  );
  const personalizationDataItem =
    ProductsHelper.getPersonalizationDataBasedOnId(
      selectedPersonalizationDataId || '',
      personalizationData,
    );
  // Component state
  const [image, setImage] = useState<string>(
    personalizationDataItem?.image || '',
  );
  const [productOptions, setProductOptions] = useState<Map<string, string>>(
    initProductOptions(product?.productOptions),
  );
  const [date, setDate] = useState(
    new Date(personalizationDataItem?.date || Date.now()),
  );
  const [message, setMessage] = useState<string>(
    personalizationDataItem?.message || '',
  );
  const [termsApproved, setTermsApproved] = useState<boolean>(false);

  const FormSchema = z.object({
    message: z
      .string()
      .max(20, { message: t('messageFieldTooLongError') })
      .min(1, { message: t('messageFieldEmptyError') }),
    image: z.string(),
    dropdown: z.map(z.string(), z.string()),
    dateTime: z.date(),
    switch: z.literal<boolean>(true, {
      errorMap: () => ({ message: t('termsNotApprovedError') }),
    }),
  });

  function validateInput(formData: Record<string, unknown>): boolean {
    const result = FormSchema.safeParse(formData);
    if (result.success) {
      setErrors({} as any);
      return true;
    }
    setErrors(result.error.format());
    return false;
  }

  function getScrollOffset(): number {
    if (errors.image) {
      return hp('10%');
    }
    if (errors.dropdown) {
      return hp('20%');
    }
    if (errors.dateTime) {
      return hp('30%');
    }
    if (errors.message) {
      return hp('40%');
    }
    if (errors.switch) {
      return hp('50%');
    }
    return 0;
  }

  function onButtonPress(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('Create product');
      // persistor.purge().then(() => {
      //   resolve();
      // });
      const isFormValid = validateInput({
        image: image,
        dropdown: productOptions,
        dateTime: date,
        message: message,
        switch: termsApproved,
      });
      if (isFormValid) {
        const personalizationDataObject: PersonalizationData = {
          id: personalizationDataItem?.id || Crypto.randomUUID(),
          date: date,
          message: message,
          image: image,
        };
        // TODO: Request to create order. Parse response
        const order: Order = {
          orderId: Crypto.randomUUID(),
          orderDate: new Date(Date.now()),
          orderStatus: OrderStatus.Pending,
          productId: selectedProductId,
          personalizationItemId: personalizationDataObject.id,
          extraInfo: productOptions,
        };
        dispatch(
          createOrUpdatePersonalizationDataAsync(personalizationDataObject),
        ).then(() =>
          dispatch(createOrderAsync(order))
            .then(() => {
              setSelectedPersonalizationDataId(undefined);
              router.dismissAll();
              router.replace(Screens.ordersListPath);
            })
            .then(() => resolve()),
        );
      } else {
        console.log(errors);
        scrollViewRef.current?.scrollTo({
          x: getScrollOffset(),
          animated: true,
        });
        reject();
      }
    });
  }

  return (
    <View style={[styles.container]}>
      <ScrollView
        contentContainerStyle={{ backgroundColor: colors.card }}
        ref={scrollViewRef}
      >
        <View>
          <PaddingContainer />
          <View style={styles.productContainer}>
            <Image
              source={{ uri: product?.photos[0] }}
              style={[styles.productImage, { borderColor: colors.border }]}
            />
            <CustomText
              isBold
              style={[styles.productText, { color: colors.text }]}
            >
              {product?.productTitle}
            </CustomText>
          </View>
          <PaddingContainer />
          <View style={styles.imagePickerContainer}>
            <ImagePicker
              image={image}
              label={t('chooseImage')}
              notice={t('imageNotice')}
              onImageChange={setImage}
              icon="camera"
            ></ImagePicker>
          </View>
          <InputValidationError errors={errors.image?._errors || []} />
          <PaddingContainer />
          {Array.from(product?.productOptions || []).map(
            ([option, optionValues]) => (
              <Fragment key={option}>
                <View style={styles.dropdownContainer}>
                  <DropDown
                    dropdownItems={optionValues}
                    label={`$t('select') ${option}:`}
                    isRequired
                    icon="arrow-down"
                    selectedItem={productOptions.get(option) || ''}
                    onValueChange={(value) =>
                      setProductOptions(
                        new Map(productOptions.set(option, value)),
                      )
                    }
                  ></DropDown>
                </View>
                <InputValidationError errors={errors.dropdown?._errors || []} />
                <PaddingContainer />
              </Fragment>
            ),
          )}
          <View style={styles.dateTimePickerContainer}>
            <DateTimePicker
              label={t('chooseDate')}
              icon="calendar"
              date={date}
              onDateChange={setDate}
            ></DateTimePicker>
          </View>
          <InputValidationError errors={errors.dateTime?._errors || []} />
          <PaddingContainer />
          <View style={styles.textInputContainer}>
            <CustomTextInput
              isRequired
              label={t('enterMessage')}
              placeholder={t('messagePlaceholder')}
              value={message}
              onChangeText={setMessage}
              icon="user"
            />
          </View>
          <InputValidationError errors={errors.message?._errors || []} />
          <PaddingContainer />
          <View style={styles.switchContainer}>
            <CustomSwitch
              isEnabled={termsApproved}
              onToggle={() => setTermsApproved(!termsApproved)}
              text={<TermsAndConditions />}
              icon="info-circle"
            ></CustomSwitch>
          </View>
          <InputValidationError errors={errors.switch?._errors || []} />
          <PaddingContainer />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          title={t('orderButton')}
          onPressAsync={onButtonPress}
        ></CustomButton>
      </View>
    </View>
  );
}
