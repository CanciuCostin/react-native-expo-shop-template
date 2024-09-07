import { FlatList, View, StyleSheet } from 'react-native';
import { PersonalizationData, Product } from '@models/Types';
import React from 'react';
import { router } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@state/store';
import { setSelectedProductId } from '@state/productsDataSlice';
import Screens from '@constants/Screens';
import ProductCard from '@components/ProductCard';

const styles = StyleSheet.create({
  categoriesContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  listItem: {
    paddingVertical: '2%',
  },
});

export default function ProductsListVertical(props: { products: Product[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const personalizationData: PersonalizationData[] = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.listItem}>
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
              : Screens.productOrderPath,
          );
        }}
      />
    </View>
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={props.products}
        renderItem={renderProduct}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}
