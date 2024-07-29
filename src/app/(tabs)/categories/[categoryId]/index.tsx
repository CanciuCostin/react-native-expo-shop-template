import { StyleSheet, View } from 'react-native';

import ProductsListVertical from '@components/ProductsListVertical';
import { RootState } from '@state/store';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import LanguageSwitcher from '@components/LanguageSwitcher';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
