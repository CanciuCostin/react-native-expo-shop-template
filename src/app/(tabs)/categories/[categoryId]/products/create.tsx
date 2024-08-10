import { View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import ImagePicker from '@components/input/ImagePicker';
import DropDownModal from '@components/input/DropDownModal';
import DateTimePicker from '@components/input/DateTimePicker';
import CustomTextInput from '@components/input/CustomTextInput';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import { Product } from '@models/Types';
import CustomButton from '@components/input/CustomButton';
import CustomSwitch from '@components/input/CustomSwitch';
import { useState } from 'react';
import PaddingContainer from '@components/PaddingContainer';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import TermsAndConditions from '@components/TermsAndConditions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 9,
  },
  productContainer: {
    flex: 4,
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
    flex: 10,
  },
  textInputContainer: {
    flex: 4,
  },
  dropdownContainer: {
    flex: 4,
  },
  dateTimePickerContainer: {
    flex: 4,
  },
  buttonContainer: {
    flex: 1,
  },
  switchContainer: {
    flex: 3,
  },
});

const pokemons = ['Pikachu', 'Charmander', 'Squirtle'];

export default function ProductCreateScreen() {
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
  const [image, setImage] = useState<string>('');

  let screenHeight = Dimensions.get('window').height;

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={[styles.scrollContainer, { backgroundColor: colors.card }]}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={{ height: screenHeight }}>
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
                label="Add an image of the child:"
                notice="We will not share your image."
                onImageChange={setImage}
                icon="camera"
                isRequired
              ></ImagePicker>
            </View>
            <PaddingContainer />

            <View style={styles.dropdownContainer}>
              <DropDownModal
                dropdownItems={pokemons}
                label="Select Dropdown:"
                isRequired
                icon="arrow-down"
              ></DropDownModal>
            </View>
            <PaddingContainer />

            <View style={styles.dateTimePickerContainer}>
              <DateTimePicker
                label="Choose Date:"
                isRequired
                icon="calendar"
              ></DateTimePicker>
            </View>
            <PaddingContainer />

            <View style={styles.textInputContainer}>
              <CustomTextInput
                label="First Name:"
                placeholder="First Name"
                onChangeText={(text) => console.log(text)}
                isRequired
                icon="user"
              />
            </View>
            <PaddingContainer />

            <View style={styles.textInputContainer}>
              <CustomTextInput
                label="Last Name:"
                placeholder="Last Name"
                onChangeText={(text) => console.log(text)}
                icon="user"
              />
            </View>
            <PaddingContainer />
            <View style={styles.switchContainer}>
              <CustomSwitch text={<TermsAndConditions />}></CustomSwitch>
            </View>
            <PaddingContainer />
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Create Product"
          onPress={(): Promise<void> =>
            new Promise((resolve, reject) =>
              setTimeout(() => {
                console.log('Create product');
                resolve();
              }, 3000),
            )
          }
        ></CustomButton>
      </View>
    </View>
  );
}
