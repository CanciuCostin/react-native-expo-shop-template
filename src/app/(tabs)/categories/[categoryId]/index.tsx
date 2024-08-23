import { StyleSheet, View } from 'react-native';

import ProductsListVertical from '@components/ProductsListVertical';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function CategoryDetailsScreen() {
  const products = useSelector(
    (state: RootState) => state.productsData.products,
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.productsData.selectedCategoryId,
  );

  return (
    //<I18nextProvider i18n={i18n}>

    <View style={styles.container}>
      <ProductsListVertical
        products={ProductsHelper.getProductsBasedOnCategoryAndTags(
          selectedCategoryId,
          [],
          products,
        )}
      />
    </View>
  );
}
