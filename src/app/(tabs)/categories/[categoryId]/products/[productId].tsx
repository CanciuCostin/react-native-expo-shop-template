import React, { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet } from 'react-native';
import { Product } from '@models/Types';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import CustomText from '@components/CustomText';
import { useTheme } from '@react-navigation/native';
import CustomButton from '@components/input/CustomButton';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import Strings from '@constants/Strings';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  carouselContainer: {
    height: hp('30%'),
  },
  image: {
    width: '100%',
    height: hp('30%'),
    borderRadius: 10,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: hp('1.5%'),
    marginTop: hp('25%'),
  },
  paginationDot: {
    width: hp('1.3%'),
    height: hp('1.3%'),
    borderRadius: 10,
  },
  productInfoContainer: {
    flex: 1,
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
  },
  durationContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    width: '100%',
    height: hp('5%'),
  },
  descriptionText: {
    textAlign: 'justify',
  },
});

export default function ProductDetailsScreen() {
  const products = useSelector(
    (state: RootState) => state.productsData.products,
  );
  const categories = useSelector(
    (state: RootState) => state.productsData.categories,
  );
  const selectedProductId = useSelector(
    (state: RootState) => state.productsData.selectedProductId,
  );
  const product: Product | undefined = ProductsHelper.getProductBasedOnId(
    selectedProductId,
    products,
  );
  const productCategory: string | undefined =
    ProductsHelper.getCategoryNameBasedOnId(product?.categoryId, categories);

  const [activeSlide, setActiveSlide] = useState(0);
  const productImagesSliderRef = useRef(null);
  const { colors } = useTheme();

  if (!product) {
    return (
      <View>
        <CustomText>Product not found!</CustomText>
      </View>
    );
  }

  const renderImage = ({ item }: { item: any }) => (
    <TouchableHighlight>
      <Image style={styles.image} source={{ uri: item }} />
    </TouchableHighlight>
  );

  return (
    <ScrollView style={[{ backgroundColor: colors.background }]}>
      <View style={styles.carouselContainer}>
        <Carousel
          layout="stack"
          ref={productImagesSliderRef}
          data={product.photos}
          renderItem={renderImage}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Pagination
          dotsLength={product.photos.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotColor="rgba(255, 255, 255, 0.92)"
          dotStyle={styles.paginationDot}
          inactiveDotColor="white"
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.8}
          carouselRef={productImagesSliderRef.current as any}
          tappableDots={!!productImagesSliderRef.current}
        />
      </View>
      <View style={styles.productInfoContainer}>
        <CustomText isBold>{product.productTitle}</CustomText>
        <CustomText style={{ color: colors.secondaryText }}>
          {productCategory}
        </CustomText>
        <View style={styles.durationContainer}>
          <FontAwesome
            name="clock-o"
            size={hp('2.5%')}
            color={colors.primary}
          />
          <CustomText isBold>
            {Strings.WHITESPACE_CHARACTER + product.categoryId.toString()}
          </CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton title="Create" />
        </View>
        <View>
          <CustomText style={styles.descriptionText}>
            {product.productDescription}
          </CustomText>
        </View>
      </View>
    </ScrollView>
  );
}
