import { FlatList, View, StyleSheet } from 'react-native';
import { Order } from '@models/Types';
import React from 'react';
import OrderCard from '@components/OrderCard';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import CustomText from '@components/CustomText';
import ProductsHelper from '@helpers/ProductsHelper';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  listItem: {
    paddingVertical: '2%',
  },
  noOrdersView: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Orders() {
  const orders: Order[] = useSelector(
    (state: RootState) => state.productsData.orders,
  );
  const personalizationData = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );
  const products = useSelector(
    (state: RootState) => state.productsData.products,
  );

  const renderOrder = ({ item }: { item: Order }) => (
    <View style={styles.listItem}>
      <OrderCard
        order={item}
        orderProduct={
          ProductsHelper.getProductBasedOnId(item.productId, products)!
        }
        personalizationDataItem={personalizationData.find(
          (personalizationItem) =>
            personalizationItem.id === item.personalizationItemId,
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {orders.length === 0 && (
        <View style={styles.noOrdersView}>
          <CustomText isBold>No Orders Yet</CustomText>
        </View>
      )}
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={(item) => `${item.orderId}`}
      />
    </View>
  );
}
