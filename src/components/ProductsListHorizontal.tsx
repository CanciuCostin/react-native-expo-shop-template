import {
  FlatList,
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Product } from '@models/types';
import { Link } from 'expo-router';
import { setSelectedProductId } from '@state/productsDataSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@state/store';
import Screens from '@constants/Screens';

const styles = StyleSheet.create({
  productsContainer: {
    width: '100%',
    backgroundColor: 'green',
  },
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    width: 250,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
    backgroundColor: 'red',
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
    //flex: 1,
    fontSize: 15,
    fontWeight: 'bold',
    //textAlign: "center",
    color: '#333333',
    //marginTop: 8,
  },
  categoriesInfo: {
    //marginTop: 3,
    //marginBottom: 5,
  },
  productItemDetailsContainer: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  productItemTextDetailsContainer: {
    justifyContent: 'space-around',
  },
  productItemCreateButton: {
    height: '60%',
    width: '22%',
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default function ProductsListHorizontal(props: { products: Product[] }) {
  const dispatch = useDispatch<AppDispatch>();

  const renderProduct = ({ item }: { item: Product }) => (
    <Link
      href={{
        pathname: Screens.productDetailsPath,
        params: { categoryId: item.categoryId, productId: item.productId },
      }}
      asChild
    >
      <TouchableHighlight
        key={item.productId}
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => dispatch(setSelectedProductId(item.productId))}
      >
        <View style={styles.categoriesItemContainer}>
          <Image
            style={styles.categoriesPhoto}
            source={{ uri: item.photos[0] }}
          />
          <View style={styles.productItemDetailsContainer}>
            <View style={styles.productItemTextDetailsContainer}>
              <Text style={styles.categoriesInfo}>Filmulet</Text>
              <Text style={styles.categoriesName}>{item.productTitle}</Text>
            </View>
            <Link
              href={{
                pathname: Screens.productCreatePath,
                params: { categoryId: item.categoryId },
              }}
              asChild
            >
              <Pressable style={styles.productItemCreateButton}>
                <Text>Create</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </TouchableHighlight>
    </Link>
  );

  return (
    <View style={styles.productsContainer}>
      <FlatList
        horizontal
        data={props.products}
        renderItem={renderProduct}
        keyExtractor={(item) => `${item.productId}`}
      />
    </View>
  );
}
