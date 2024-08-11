export type Product = {
  categoryId: number;
  productId: number;
  productTitle: string;
  photos: string[];
  productTags: number[];
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
