import { Category, Product } from '@models/types';

export default class ProductsHelper {
  static getProductsBasedOnCategoryAndTags = (
    categoryId: number,
    selectedTags: number[],
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
    productId: number,
    products: Product[],
  ): Product | undefined => {
    return products.find((product) => product.productId === productId);
  };

  static getProductTitleBasedOnId = (
    productId: number,
    products: Product[],
  ): string => {
    return (
      products.find((product) => product.productId === productId)
        ?.productTitle || ''
    );
  };

  static getCategoryNameBasedOnId = (
    categoryId: number,
    categories: Category[],
  ): string => {
    return (
      categories.find((category) => category.categoryId === categoryId)
        ?.categoryName || ''
    );
  };
}
