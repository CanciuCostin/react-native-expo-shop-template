import ProductsHelper from '@helpers/ProductsHelper';
import { Product, Category } from '@models/types';

describe('ProductsHelper', () => {
  const products: Product[] = [
    {
      categoryId: 1,
      productId: 101,
      productTitle: 'Product 1',
      photos: ['photo1.jpg'],
      productTags: [1, 2],
      productDescription: 'Description 1',
    },
    {
      categoryId: 1,
      productId: 102,
      productTitle: 'Product 2',
      photos: ['photo2.jpg'],
      productTags: [2, 3],
      productDescription: 'Description 2',
    },
    {
      categoryId: 2,
      productId: 103,
      productTitle: 'Product 3',
      photos: ['photo3.jpg'],
      productTags: [1],
      productDescription: 'Description 3',
    },
    {
      categoryId: 2,
      productId: 104,
      productTitle: 'Product 4',
      photos: ['photo4.jpg'],
      productTags: [2, 3],
      productDescription: 'Description 4',
    },
  ];

  const categories: Category[] = [
    { categoryId: 1, categoryName: 'Electronics' },
    { categoryId: 2, categoryName: 'Books' },
  ];

  describe('getProductsBasedOnCategoryAndTags', () => {
    it('should return products of the specified category and matching selected tags', () => {
      const result = ProductsHelper.getProductsBasedOnCategoryAndTags(
        1,
        [1],
        products,
      );
      expect(result).toHaveLength(1);
      expect(result).toEqual([
        {
          categoryId: 1,
          productId: 101,
          productTitle: 'Product 1',
          photos: ['photo1.jpg'],
          productTags: [1, 2],
          productDescription: 'Description 1',
        },
      ]);
    });

    it('should return products of the specified category without filtering by tags if no tags are selected', () => {
      const result = ProductsHelper.getProductsBasedOnCategoryAndTags(
        1,
        [],
        products,
      );
      expect(result).toHaveLength(2);
      expect(result).toEqual([
        {
          categoryId: 1,
          productId: 101,
          productTitle: 'Product 1',
          photos: ['photo1.jpg'],
          productTags: [1, 2],
          productDescription: 'Description 1',
        },
        {
          categoryId: 1,
          productId: 102,
          productTitle: 'Product 2',
          photos: ['photo2.jpg'],
          productTags: [2, 3],
          productDescription: 'Description 2',
        },
      ]);
    });

    it('should return an empty array if no products match the categoryId and tags', () => {
      const result = ProductsHelper.getProductsBasedOnCategoryAndTags(
        3,
        [1],
        products,
      );
      expect(result).toHaveLength(0);
    });
  });

  describe('getProductBasedOnId', () => {
    it('should return the product with the specified productId', () => {
      const result = ProductsHelper.getProductBasedOnId(101, products);
      expect(result).toEqual({
        categoryId: 1,
        productId: 101,
        productTitle: 'Product 1',
        photos: ['photo1.jpg'],
        productTags: [1, 2],
        productDescription: 'Description 1',
      });
    });

    it('should return undefined if no product matches the productId', () => {
      const result = ProductsHelper.getProductBasedOnId(999, products);
      expect(result).toBeUndefined();
    });
  });

  describe('getProductTitleBasedOnId', () => {
    it('should return the title of the product with the specified productId', () => {
      const result = ProductsHelper.getProductTitleBasedOnId(102, products);
      expect(result).toBe('Product 2');
    });

    it('should return an empty string if no product matches the productId', () => {
      const result = ProductsHelper.getProductTitleBasedOnId(999, products);
      expect(result).toBe('');
    });
  });

  describe('getCategoryNameBasedOnId', () => {
    it('should return the name of the category with the specified categoryId', () => {
      const result = ProductsHelper.getCategoryNameBasedOnId(2, categories);
      expect(result).toBe('Books');
    });

    it('should return an empty string if no category matches the categoryId', () => {
      const result = ProductsHelper.getCategoryNameBasedOnId(999, categories);
      expect(result).toBe('');
    });
  });
});
