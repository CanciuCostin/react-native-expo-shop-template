import { Category, Order, OrderStatus, PersonalizationData, Product, ProductTag } from '@models/Types';

export const DUMMY_CATEGORY_TAGS: ProductTag[] = [
  {
    tagId: '1',
    tagName: 'New',
  },
  {
    tagId: '2',
    tagName: 'Promotion',
  },
  {
    tagId: '3',
    tagName: 'Popular',
  },
  {
    tagId: '4',
    tagName: 'Limited',
  },
  {
    tagId: '5',
    tagName: 'Classic',
  },
];

export const DUMMY_PRODUCTS: Product[] = [
  {
    productId: '1',
    categoryId: '1',
    productTitle: 'Custom Black T-Shirt',
    photos: [
      'https://images.pexels.com/photos/5274525/pexels-photo-5274525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/12738120/pexels-photo-12738120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    productTags: ['5'],
    productDescription: '    Elevate your wardrobe essentials with our Classic Black Cotton T-Shirt. This timeless piece is crafted from 100% premium cotton, ensuring a soft, breathable, and comfortable fit that lasts all day. The minimalist design features a classic crew neck and short sleeves, making it a versatile staple that pairs perfectly with jeans, shorts, or layered under a jacket.\n\n    Our Classic Black Cotton T-Shirt is available in a range of sizes, from XS to XXL, ensuring a perfect fit for every body type. Whether you’re dressing up for a night out or keeping it casual for a day at the beach, this versatile tee is a must-have for every wardrobe.\n\n    Add our Classic Black Cotton T-Shirt to your collection today and enjoy the perfect blend of comfort, style, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 19.99,
    productPriceDiscount: 15.99,
  },
  {
    productId: '2',
    categoryId: '1',
    productTitle: 'Custom White T-Shirt',
    photos: [
      'https://images.pexels.com/photos/20669538/pexels-photo-20669538/free-photo-of-hand-holds-hanger-with-t-shirt.jpeg',
      'https://images.pexels.com/photos/17515210/pexels-photo-17515210/free-photo-of-model-in-a-black-bucket-hat-white-t-shirt-and-gray-shorts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/20899136/pexels-photo-20899136/free-photo-of-model-in-casual-flannel-shirt-white-t-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    productTags: ['5'],
    productDescription:
      '    Elevate your wardrobe essentials with our Classic White Cotton T-Shirt. This timeless piece is crafted from 100% premium cotton, ensuring a soft, breathable, and comfortable fit that lasts all day. The minimalist design features a classic crew neck and short sleeves, making it a versatile staple that pairs perfectly with jeans, shorts, or layered under a jacket.\n\n    Our Classic White Cotton T-Shirt is available in a range of sizes, from XS to XXL, ensuring a perfect fit for every body type. Whether you’re dressing up for a night out or keeping it casual for a day at the beach, this versatile tee is a must-have for every wardrobe.\n\n    Add our Classic White Cotton T-Shirt to your collection today and enjoy the perfect blend of comfort, style, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 19.99,
    productPriceDiscount: 15.99,
    },
  {
    productId: '3',
    categoryId: '1',
    productTitle: 'Custom Red T-Shirt',
    photos: [
      'https://images.pexels.com/photos/9558699/pexels-photo-9558699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9558894/pexels-photo-9558894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    productTags: ['4','5'],
    productDescription: '    Elevate your wardrobe essentials with our Classic Red Cotton T-Shirt. This timeless piece is crafted from 100% premium cotton, ensuring a soft, breathable, and comfortable fit that lasts all day. The minimalist design features a classic crew neck and short sleeves, making it a versatile staple that pairs perfectly with jeans, shorts, or layered under a jacket.\n\n    Our Classic Red Cotton T-Shirt is available in a range of sizes, from XS to XXL, ensuring a perfect fit for every body type. Whether you’re dressing up for a night out or keeping it casual for a day at the beach, this versatile tee is a must-have for every wardrobe.\n\n    Add our Classic Red Cotton T-Shirt to your collection today and enjoy the perfect blend of comfort, style, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 19.99,
    productPriceDiscount: 15.99,
  },
  {
    productId: '4',
    categoryId: '2',
    productTitle: 'Custom White Hoodie',
    photos: [
      'https://images.pexels.com/photos/8217416/pexels-photo-8217416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8217544/pexels-photo-8217544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    productTags: ['2', '3'],
    productDescription: '    Stay warm and stylish with our White Hoodie. This classic piece is crafted from a soft and cozy cotton blend, ensuring a comfortable fit that lasts all day. The minimalist design features a drawstring hood, kangaroo pocket, and ribbed cuffs and hem, making it a versatile staple that pairs perfectly with jeans, shorts, or layered under a jacket.\n\n    Our White Hoodie is available in a range of sizes, from XS to XXL, ensuring a perfect fit for every body type. Whether you’re dressing up for a night out or keeping it casual for a day at the beach, this versatile hoodie is a must-have for every wardrobe.\n\n    Add our White Hoodie to your collection today and enjoy the perfect blend of comfort, style, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 29.99,
    productPriceDiscount: 25.99,
  },
  {
    productId: '5',
    categoryId: '2',
    productTitle: 'Custom Black Hoodie',
    photos: [
      'https://images.pexels.com/photos/1554270/pexels-photo-1554270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5380621/pexels-photo-5380621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['3'],
    productDescription: '    Stay warm and stylish with our Black Hoodie. This classic piece is crafted from a soft and cozy cotton blend, ensuring a comfortable fit that lasts all day. The minimalist design features a drawstring hood, kangaroo pocket, and ribbed cuffs and hem, making it a versatile staple that pairs perfectly with jeans, shorts, or layered under a jacket.\n\n    Our Black Hoodie is available in a range of sizes, from XS to XXL, ensuring a perfect fit for every body type. Whether you’re dressing up for a night out or keeping it casual for a day at the beach, this versatile hoodie is a must-have for every wardrobe.\n\n    Add our Black Hoodie to your collection today and enjoy the perfect blend of comfort, style, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 29.99,
    productPriceDiscount: 25.99,
  },
  {
    productId: '6',
    categoryId: '3',
    productTitle: 'Custom Termo Mug',
    photos: [
      'https://images.pexels.com/photos/3483967/pexels-photo-3483967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/26611571/pexels-photo-26611571/free-photo-of-cup-of-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['4'],
    productDescription:'    Keep your drinks hot or cold with our Termo Mug. This stylish and durable mug is crafted from premium stainless steel, ensuring a leak-proof and long-lasting design that’s perfect for everyday use. The double-wall insulation keeps your drinks at the perfect temperature, while the secure lid prevents spills and leaks on the go.\n\n    Our Termo Mug is available in a range of sizes and colors, ensuring a perfect fit for every style and taste. Whether you’re sipping coffee on your morning commute or enjoying a cold drink at the beach, this versatile mug is a must-have for every lifestyle.\n\n    Add our Termo Mug to your collection today and enjoy the perfect blend of style, functionality, and quality.',
    productOptions: undefined,
    productPrice: 9.99,
    productPriceDiscount: 5.99,
  },
  {
    productId: '7',
    categoryId: '3',
    productTitle: 'Custom Cofee Mug',
    photos: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
      'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    productTags: ['5'],
    productDescription: '    Enjoy your favorite drinks in style with our Coffee Mug. This classic piece is crafted from premium ceramic, ensuring a durable and long-lasting design that’s perfect for everyday use. The minimalist design features a comfortable handle and a generous capacity, making it ideal for coffee, tea, hot chocolate, and more.\n\n    Our Coffee Mug is available in a range of sizes and colors, ensuring a perfect fit for every style and taste. Whether you’re starting your day with a cup of coffee or winding down with a cup of tea, this versatile mug is a must-have for every kitchen.\n\n    Add our Coffee Mug to your collection today and enjoy the perfect blend of style, functionality, and quality.',
    productOptions: undefined,
    productPrice: 9.99,
    productPriceDiscount: 5.99,
  },
  {
    productId: '8',
    categoryId: '4',
    productTitle: 'Custom Black Cap',
    photos: [
      'https://images.pexels.com/photos/674268/pexels-photo-674268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5711159/pexels-photo-5711159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['1'],
    productDescription: '    Stay cool and stylish with our Black Cap. This classic piece is crafted from premium cotton, ensuring a comfortable and breathable fit that’s perfect for everyday wear. The minimalist design features a curved brim, adjustable strap, and embroidered logo, making it a versatile accessory that pairs perfectly with jeans, shorts, or athleisure.\n\n    Our Black Cap is available in a range of sizes and colors, ensuring a perfect fit for every style and taste. Whether you’re running errands, hitting the gym, or lounging at the beach, this versatile cap is a must-have for every wardrobe.\n\n    Add our Black Cap to your collection today and enjoy the perfect blend of style, comfort, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 12.99,
    productPriceDiscount: 9.99,
  },
  {
    productId: '9',
    categoryId: '4',
    productTitle: 'Custom Sun Hat',
    photos: [
      'https://images.pexels.com/photos/7294031/pexels-photo-7294031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['1'],
    productDescription: '    Stay cool and stylish with our Sun Hat. This classic piece is crafted from premium straw, ensuring a comfortable and breathable fit that’s perfect for sunny days. The minimalist design features a wide brim, adjustable chin strap, and UPF 50+ sun protection, making it a versatile accessory that pairs perfectly with swimsuits, sundresses, or casual wear.\n\n    Our Sun Hat is available in a range of sizes and colors, ensuring a perfect fit for every style and taste. Whether you’re lounging by the pool, strolling through the park, or enjoying a day at the beach, this versatile hat is a must-have for every summer adventure.\n\n    Add our Sun Hat to your collection today and enjoy the perfect blend of style, comfort, and quality.',
    productOptions: new Map<string, string[]>([["Size", ['XS', 'S', 'M', 'L', 'XL', 'XXL']]]),
    productPrice: 12.99,
    productPriceDiscount: 9.99,
  },
  {
    productId: '10',
    categoryId: '5',
    productTitle: 'Custom Keychain',
    photos: [
      'https://images.pexels.com/photos/15862200/pexels-photo-15862200/free-photo-of-jaguar-key-fob-with-brass-fish-shaped-box-cutter-and-eyeglasses-on-an-open-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/15862202/pexels-photo-15862202/free-photo-of-car-key-fob-with-a-keychain-in-the-shape-of-an-arowana-fish-next-to-a-book-and-a-watch.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['5'],
    productDescription: '    Keep your keys organized and stylish with our Custom Keychain. This versatile accessory is crafted from premium leather and metal, ensuring a durable and long-lasting design that’s perfect for everyday use. The minimalist design features a secure key ring and a stylish leather strap, making it a versatile accessory that pairs perfectly with keys, bags, and more.\n\n    Our Custom Keychain is available in a range of colors and styles, ensuring a perfect fit for every style and taste. Whether you’re running errands, traveling, or heading out for the day, this versatile keychain is a must-have for every lifestyle.\n\n    Add our Custom Keychain to your collection today and enjoy the perfect blend of style, functionality, and quality.',
    productOptions: undefined,
    productPrice: 9.99,
    productPriceDiscount: 5.99,
  },
  {
    productId: '11',
    categoryId: '5',
    productTitle: 'Custom Iphone Case',
    photos: [
      'https://images.pexels.com/photos/18358003/pexels-photo-18358003/free-photo-of-close-up-of-a-person-holding-an-iphone-in-a-black-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/18357980/pexels-photo-18357980/free-photo-of-close-up-of-a-person-holding-an-iphone-in-a-black-case.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    productTags: ['3'],
    productDescription: '    Protect your phone in style with our Custom Phone Case. This sleek and durable case is crafted from premium materials, ensuring a secure and long-lasting design that’s perfect for everyday use. The minimalist design features a slim profile, raised edges, and easy access to all ports and buttons, making it a versatile accessory that pairs perfectly with your phone.\n\n    Our Custom Phone Case is available in a range of colors and styles, ensuring a perfect fit for every phone model. Whether you’re running errands, traveling, or heading out for the day, this versatile case is a must-have for every lifestyle.\n\n    Add our Custom Phone Case to your collection today and enjoy the perfect blend of style, protection, and quality.',
    productOptions: new Map<string, string[]>([["Phone Type", ['Iphone 13', 'Iphone 13 Pro', 'Iphone 13 Pro Max', 'Iphone 13 Mini', 'Iphone 12', 'Iphone 12 Pro', 'Iphone 12 Pro Max', 'Iphone 12 Mini', 'Iphone 11', 'Iphone 11 Pro', 'Iphone 11 Pro Max', 'Iphone 11 Mini']]]),
    productPrice: 9.99,
    productPriceDiscount: 5.99,
  },
];

export const DUMMY_CATEGORIES: Category[] = [
  {
    categoryId: '1',
    categoryName: 'T-Shirts',
  },
  {
    categoryId: '2',
    categoryName: 'Hoodies',
  },
  {
    categoryId: '3',
    categoryName: 'Mugs',
  },
  {
    categoryId: '4',
    categoryName: 'Hats',
  },
  {
    categoryId: '5',
    categoryName: 'Accessories',
  },
];

export const DUMMY_PERSONALIZATION_DATA: PersonalizationData[] = [
  {
    id: '1',
    date: new Date(),
    message: 'John',
    image:
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
  },
  {
    id: '2',
    date: new Date(),
    message: 'Jane',
    image: '',
  },
  {
    id: '3',
    date: new Date(),
    message: 'Doe',
    image: '',
  },
  {
    id: '4',
    date: new Date(),
    message: 'Smith',
    image: '',
  },
];

export const DUMMY_ORDERS: Order[] = [
  {
    orderId: '1',
    orderDate: new Date(),
    orderStatus: OrderStatus.Pending,
    productId: '1',
    personalizationItemId: '1',
    extraInfo: new Map<string, string>(),
  },
  {
    orderId: '2',
    orderDate: new Date(),
    orderStatus: OrderStatus.Processing,
    productId: '2',
    personalizationItemId: '2',
    extraInfo: new Map<string, string>(),
  },
  {
    orderId: '3',
    orderDate: new Date(),
    orderStatus: OrderStatus.Delivered,
    productId: '3',
    personalizationItemId: '3',
    extraInfo: new Map<string, string>(),
  },
  {
    orderId: '4',
    orderDate: new Date(),
    orderStatus: OrderStatus.Cancelled,
    productId: '4',
    personalizationItemId: '4',
    extraInfo: new Map<string, string>(),
  },
];
