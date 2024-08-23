export type Product = {
  categoryId: string;
  productId: string;
  productTitle: string;
  photos: string[];
  productTags: string[];
  productDescription: string;
  productPrice: number;
  productPriceDiscount: number;
  productOptions: Map<string,string[]> | undefined;
};

export type ProductTag = {
  tagId: string;
  tagName: string;
};

export type Category = {
  categoryId: string;
  categoryName: string;
};

export type PersonalizationData = {
  id: string;
  date: Date | undefined;
  message: string;
  image: string | undefined;
}

export enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Processing',
  Delivered = 'Delivered',
  Cancelled = 'Cancelled'
}

export type Order = {
  orderId: string;
  orderDate: Date;
  orderStatus: OrderStatus;
  productId: string;
  personalizationItemId: string;
  extraInfo: Map<string, string>;
};
