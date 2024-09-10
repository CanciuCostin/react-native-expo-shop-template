import { RootState } from '@state/store';
import { Stack } from 'expo-router';
import { useSelector } from 'react-redux';
import ProductsHelper from '@helpers/ProductsHelper';
import { useTranslation } from 'react-i18next';

const CategoryDetailsLayout = () => {
  const categories = useSelector(
    (state: RootState) => state.productsData.categories,
  );
  const selectedCategoryId = useSelector(
    (state: RootState) => state.productsData.selectedCategoryId,
  );
  const { t } = useTranslation();

  return (
    <Stack
      screenOptions={{
        //headerShown: true,
        headerShown: false,
        headerTitle: t('productsHeader'),
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          //headerShown: true,
          headerShown: false,
          headerTitle: ProductsHelper.getCategoryNameBasedOnId(
            selectedCategoryId,
            categories,
          ),
        }}
      />
    </Stack>
  );
};

export default CategoryDetailsLayout;
