import { FlatList, View, StyleSheet } from 'react-native';
import { PersonalizationData, Product } from '@models/Types';
import { setSelectedProductId } from '@state/productsDataSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@state/store';
import Screens from '@constants/Screens';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import ProductCard from '@components/ProductCard';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  productItemContainer: {
    width: wp('65%'),
    paddingHorizontal: '3%',
    marginVertical: '3%',
  },
});

export default function ProductsListHorizontal(props: { products: Product[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();
  const personalizationData: PersonalizationData[] = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productItemContainer}>
      <ProductCard
        product={item}
        onCardPress={() => {
          dispatch(setSelectedProductId(item.productId));
          router.navigate(Screens.productDetailsPath);
        }}
        onCreatePress={() => {
          dispatch(setSelectedProductId(item.productId));
          router.navigate(
            personalizationData.length
              ? Screens.personalizationDataPath
              : Screens.productCreatePath,
          );
        }}
      />
    </View>
  );

  return (
    <View style={[{ backgroundColor: colors.card }]}>
      <FlatList
        horizontal
        data={props.products}
        renderItem={renderProduct}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}
