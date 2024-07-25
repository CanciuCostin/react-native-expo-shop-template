import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Category } from '@models/types';
import { Link } from 'expo-router';
import ProductsListHorizontal from '@components/ProductsListHorizontal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@state/store';
import ProductsHelper from '@helpers/ProductsHelper';
import { setSelectedCategoryId } from '@state/productsDataSlice';
import Screens from '@constants/Screens';

const styles = StyleSheet.create({
  categoriesContainer: {
    width: '100%',
    paddingTop: 10,
  },
  categoryContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  categoriesName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8,
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5,
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
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

  const renderCategory = ({ item }: { item: Category }) => (
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
          <Text style={styles.categoryName}>{item.categoryName}</Text>
        </TouchableOpacity>
      </Link>
      <ProductsListHorizontal
        products={ProductsHelper.getProductsBasedOnCategoryAndTags(
          item.categoryId,
          selectedTags,
          products,
        )}
      />
    </View>
  );

  return (
    <View style={styles.categoriesContainer}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => `${item.categoryId}`}
      />
    </View>
  );
}
