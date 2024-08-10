import { StyleSheet, View } from 'react-native';

import ProductsListVertical from '@components/ProductsListVertical';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import LanguageSwitcher from '@components/input/LanguageSwitcher';

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
      <LanguageSwitcher />

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
