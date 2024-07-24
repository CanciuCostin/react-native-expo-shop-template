import { Stack } from "expo-router";
import ProductsHelper from "@helpers/ProductsHelper";
import { RootState } from "@state/store";
import { useSelector } from "react-redux";

const CategoriesLayout = () => {
  const selectedProductId = useSelector(
    (state: RootState) => state.productsData.selectedProductId
  );
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
};

export default CategoriesLayout;
