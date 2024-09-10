import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import ImagePicker from '@components/input/ImagePicker';
import DropDown from '@components/input/DropDown';
import DateTimePicker from '@components/input/DateTimePicker';
import CustomTextInput from '@components/input/CustomTextInput';
import { AppDispatch, RootState } from '@state/store';
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
import { useRef, useState, Fragment, useEffect } from 'react';
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
import { ShadowStyles } from '@styles/CommonStyles';
import { useStripe } from '@stripe/stripe-react-native';
import { fetchPaymentSheetParams } from '@service/paymentService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    height: hp('12%'),
    flexDirection: 'row',
    marginTop: '3%',
    marginBottom: '1%',
    paddingVertical: '2%',
    ...ShadowStyles,
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
    marginVertical: '2%',
  },
  textInputContainer: {
    height: hp('10%'),
    marginVertical: '2%',
  },
  dropdownContainer: {
    height: hp('10%'),
    marginVertical: '2%',
  },
  dateTimePickerContainer: {
    height: hp('10%'),
    marginVertical: '2%',
  },
  buttonContainer: {
    height: hp('8%'),
  },
  switchContainer: {
    height: hp('10%'),
    marginTop: '1%',
    marginBottom: '3%',
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

export default function ProductOrderScreen() {
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
  // Payment
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [clientSecret, setClientSecret] = useState<string>();

  const initialisePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer } =
      await fetchPaymentSheetParams();
    setClientSecret(paymentIntent);

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      customFlow: false,
      merchantDisplayName: 'Example Inc.',
      style: 'alwaysDark',
      // Configure the payment sheet to use the return URL in the app
      returnURL: 'payments-example://stripe-redirect',
      // Uncomment to enable Apple Pay
      // applePay: {
      //   merchantCountryCode: 'RO',
      // },
      googlePay: {
        merchantCountryCode: 'RO',
        testEnv: true, // use test environment
      },
    });
    if (!error) {
      setPaymentSheetEnabled(true);
    }
  };

  useEffect(() => {
    // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
    // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
    initialisePaymentSheet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      throw new Error('Client secret is not set');
    }
    if (paymentSheetEnabled) {
      await initialisePaymentSheet();
    }
    const { error } = await presentPaymentSheet({
      clientSecret,
    } as any);

    if (error) {
      Alert.alert(`Payment Failed! Error code: ${error.code}`, error.message);
      setPaymentSheetEnabled(false);
      throw new Error(error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
    }
    setPaymentSheetEnabled(false);
  };

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
      return 0;
    }
    return 0;
  }

  function validateForm(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Uncomment to clear the persisted data
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
      if (!isFormValid) {
        //Uncomment to see the errors
        //console.log(errors);
        const scrollOffset = getScrollOffset();
        if (scrollOffset === 0) {
          scrollViewRef.current?.scrollToEnd({ animated: true });
        } else {
          scrollViewRef.current?.scrollTo({ y: scrollOffset, animated: true });
        }
        reject('Form validation failed.');
      } else {
        resolve();
      }
    });
  }

  function saveOrder(): Promise<void> {
    //TODO: Handle error on order creation
    return new Promise((resolve, reject) => {
      const personalizationDataObject: PersonalizationData = {
        id: personalizationDataItem?.id || Crypto.randomUUID(),
        date: date,
        message: message,
        image: image,
      };
      // TODO: Server request to create order. Parse response
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
    });
  }

  const onButtonPress = () =>
    validateForm()
      .then(() => openPaymentSheet())
      .then(() => saveOrder())
      .catch((err) => {
        //Uncomment to see the error
        //console.log({ err });
      });

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={hp('10%')}
      behavior="padding"
      style={[styles.container]}
    >
      <ScrollView
        contentContainerStyle={{ backgroundColor: colors.background }}
        ref={scrollViewRef}
      >
        <View>
          <View
            style={[
              styles.productContainer,
              {
                backgroundColor: colors.card,
                shadowColor: colors.shadowColor,
              },
            ]}
          >
            <Image
              source={{ uri: product?.photos[0] }}
              style={[styles.productImage, { borderColor: colors.border }]}
            />
            <CustomText isBold style={[styles.productText]}>
              {product?.productTitle}
            </CustomText>
          </View>
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
          {Array.from(product?.productOptions || []).map(
            ([option, optionValues]) => (
              <Fragment key={option}>
                <View style={styles.dropdownContainer}>
                  <DropDown
                    dropdownItems={optionValues}
                    label={`${t('select')} ${option}:`}
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
          <View style={styles.textInputContainer}>
            <CustomTextInput
              testID="messageInput"
              isRequired
              label={t('enterMessage')}
              placeholder={t('messagePlaceholder')}
              value={message}
              onChangeText={setMessage}
              icon="user"
            />
          </View>
          <InputValidationError errors={errors.message?._errors || []} />
          <View style={styles.switchContainer}>
            <CustomSwitch
              testID="termsSwitch"
              isEnabled={termsApproved}
              onToggle={() => setTermsApproved(!termsApproved)}
              text={<TermsAndConditions />}
              icon="info-circle"
            ></CustomSwitch>
          </View>
          <InputValidationError errors={errors.switch?._errors || []} />
        </View>
      </ScrollView>
      <View style={[styles.buttonContainer, { backgroundColor: colors.card }]}>
        <CustomButton
          testID="orderButton"
          title={t('orderButton')}
          disabled={!paymentSheetEnabled}
          onPressAsync={onButtonPress}
        ></CustomButton>
      </View>
    </KeyboardAvoidingView>
  );
}
