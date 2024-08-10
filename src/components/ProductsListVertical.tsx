import { FlatList, View, StyleSheet } from 'react-native';
import { Product } from '@models/Types';
import React from 'react';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@state/store';
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
          router.navigate(Screens.productCreatePath);
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
