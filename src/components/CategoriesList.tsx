import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Category } from '@models/Types';
import { Link } from 'expo-router';
import ProductsListHorizontal from '@components/ProductsListHorizontal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@state/store';
import ProductsHelper from '@helpers/ProductsHelper';
import { setSelectedCategoryId } from '@state/productsDataSlice';
import Screens from '@constants/Screens';
import CustomText from '@components/CustomText';

const styles = StyleSheet.create({
  categoriesContainer: {
    paddingTop: '3%',
  },
  listContainer: {
    width: '100%',
    paddingBottom: '10%',
  },
  categoryName: {
    paddingLeft: '3%',
    paddingBottom: '1%',
  },
});

export default function CategoriesList() {
  const products = useSelector(
    (state: RootState) => state.productsData.products,
  );
  const categories = useSelector(
    (state: RootState) => state.productsData.categories,
  );
  const selectedTags = useSelector(
    (state: RootState) => state.productsData.selectedTags,
  );
  const dispatch = useDispatch<AppDispatch>();

  const renderCategory = function ({ item }: { item: Category }) {
    const categoryProducts = ProductsHelper.getProductsBasedOnCategoryAndTags(
      item.categoryId,
      selectedTags,
      products,
    );
    return categoryProducts.length > 0 ? (
      <View style={styles.categoriesContainer}>
        <Link
          href={{
            pathname: Screens.categoriesDetailsPath,
            params: { categoryId: item.categoryId },
          }}
          asChild
        >
          <TouchableOpacity
            onPress={() => dispatch(setSelectedCategoryId(item.categoryId))}
          >
            <CustomText fontSize="2.2%" isBold style={styles.categoryName}>
              {item.categoryName}
            </CustomText>
          </TouchableOpacity>
        </Link>
        <ProductsListHorizontal products={categoryProducts} />
      </View>
    ) : null;
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => `${item.categoryId}`}
      />
    </View>
  );
}
