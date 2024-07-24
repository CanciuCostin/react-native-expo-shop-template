export type Product = {
  categoryId: number;
  productId: number;
  productTitle: string;
  photos: Array<string>;
  productTags: Array<number>;
  productDescription: string;
};

export type ProductTag = {
  tagId: number;
  tagName: string;
};

export type Category = {
  categoryId: number;
  categoryName: string;
};
