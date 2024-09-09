import { Category, Product, ProductTag } from '@models/Types';

export function fetchProducts(): Promise<Product[]> {
  return fetch(
    `${process.env.EXPO_PUBLIC_BACKEND_URL}${process.env.EXPO_PUBLIC_PRODUCTS_ENDPOINT}`,
  )
    .then((response) => response.json())
    .then((response) => response as Product[])
    .catch((err) => {
      throw new Error(err);
    });
}

export function fetchCategories(): Promise<Category[]> {
  return fetch(
    `${process.env.EXPO_PUBLIC_BACKEND_URL}${process.env.EXPO_PUBLIC_CATEGORIES_ENDPOINT}`,
  )
    .then((response) => response.json())
    .then((response) => response as Category[])
    .catch((err) => {
      throw new Error(err);
    });
}

export function fetchTags(): Promise<ProductTag[]> {
  return fetch(
    `${process.env.EXPO_PUBLIC_BACKEND_URL}${process.env.EXPO_PUBLIC_TAGS_ENDPOINT}`,
  )
    .then((response) => response.json())
    .then((response) => response as ProductTag[])
    .catch((err) => {
      throw new Error(err);
    });
}
