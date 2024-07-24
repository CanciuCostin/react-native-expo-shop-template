import { StyleSheet, View } from "react-native";

import { Link } from "expo-router";
import TagsList from "@/components/TagsList";
import ProductsListVertical from "@components/ProductsListVertical";
import { Product } from "@models/types";
import { RootState } from "@state/store";
import { useSelector } from "react-redux";
import ProductsHelper from "@helpers/ProductsHelper";

export default function CategoryDetailsScreen() {
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.productsData.selectedCategoryId
  );

  return (
    <View style={styles.container}>
      <ProductsListVertical
        products={ProductsHelper.getProductsBasedOnCategoryAndTags(
          selectedCategoryId,
          [],
          products
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
