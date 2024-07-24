import { RootState } from "@state/store";
import { Stack } from "expo-router";
import { useSelector } from "react-redux";
import ProductsHelper from "@helpers/ProductsHelper";

const CategoryDetailsLayout = () => {
  const categories = useSelector(
    (state: RootState) => state.productsData.categories
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.productsData.selectedCategoryId
  );
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Products",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerTitle: ProductsHelper.getCategoryNameBasedOnId(
            selectedCategoryId,
            categories
          ),
        }}
      />
    </Stack>
  );
};

export default CategoryDetailsLayout;
