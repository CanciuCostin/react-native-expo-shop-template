import { Category, PersonalizationData, Product } from '@models/Types';

export default class ProductsHelper {
  static getProductsBasedOnCategoryAndTags = (
    categoryId: string,
    selectedTags: string[],
    products: Product[],
  ): Product[] => {
    let categoryProducts = products.filter(
      (product) => product.categoryId === categoryId,
    );
    return selectedTags.length === 0
      ? categoryProducts
      : categoryProducts.filter((product) =>
          product.productTags.some((tag) => selectedTags.includes(tag)),
        );
  };

  static getProductBasedOnId = (
    productId: string,
    products: Product[],
  ): Product | undefined => {
    return products.find((product) => product.productId === productId);
  };

  static getProductTitleBasedOnId = (
    productId: string,
    products: Product[],
  ): string => {
    return (
      products.find((product) => product.productId === productId)
        ?.productTitle || ''
    );
  };

  static getCategoryNameBasedOnId = (
    categoryId: string | undefined,
    categories: Category[],
  ): string => {
    if(categoryId === undefined) return '';
    return (
      categories.find((category) => category.categoryId === categoryId)
        ?.categoryName || ''
    );
  };

  static getPersonalizationDataBasedOnId = (
    personalizationDataId: string,
    personalizationData: PersonalizationData[],
  ): PersonalizationData | undefined => {
    return personalizationData.find(
      (personalizationDataItem) =>
        personalizationDataItem.id === personalizationDataId,
    );
  };
}
