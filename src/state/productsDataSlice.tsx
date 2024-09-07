import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  Product,
  Category,
  ProductTag,
  Order,
  PersonalizationData,
} from '@models/Types';
import { PURGE } from 'redux-persist';

interface ProductsDataState {
  products: Product[];
  categories: Category[];
  tags: ProductTag[];
  selectedCategoryId: string;
  selectedProductId: string;
  selectedTags: string[];
  orders: Order[];
  personalizationData: PersonalizationData[];
  selectedPersonalizationDataId: string | undefined;
}

const initialState: ProductsDataState = {
  products: [],
  categories: [],
  tags: [],
  selectedCategoryId: '0',
  selectedProductId: '0',
  selectedTags: [],
  orders: [],
  personalizationData: [],
  selectedPersonalizationDataId: undefined,
};

export const setProductsAsync = createAsyncThunk(
  'productsData/setProductsAsync',
  async (products: Product[]) => {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    for (let i = 0; i < products.length; i++) {
      products[i].productOptions = new Map<string, string[]>(
        products[i].productOptions,
      );
    }
    return products;
  },
);

export const setProductsPaginatedAsync = createAsyncThunk(
  'productsData/setProductsPaginatedAsync',
  async (products: Product[]) => {
    return products;
  },
);

export const setCategoriesAsync = createAsyncThunk(
  'productsData/setCategoriesAsync',
  async (categories: Category[]) => {
    return categories;
  },
);

export const setCategoriesPaginatedAsync = createAsyncThunk(
  'productsData/setCategoriesPaginatedAsync',
  async (categories: Category[]) => {
    return categories;
  },
);

export const setTagsAsync = createAsyncThunk(
  'productsData/setTagsAsync',
  async (tags: ProductTag[]) => {
    return tags;
  },
);

export const createOrderAsync = createAsyncThunk(
  'productsData/createOrderAsync',
  async (order: Order) => {
    return order;
  },
);

export const createOrUpdatePersonalizationDataAsync = createAsyncThunk(
  'productsData/createOrUpdatePersonalizationDataAsync',
  async (personalizationDataItem: PersonalizationData) => {
    return personalizationDataItem;
  },
);

export const productsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<string>) => {
      state.selectedCategoryId = action.payload;
    },
    setSelectedProductId: (state, action: PayloadAction<string>) => {
      state.selectedProductId = action.payload;
    },
    setSelectedTag: (state, action: PayloadAction<string>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(
          (tag) => tag !== action.payload,
        );
      } else {
        state.selectedTags.push(action.payload);
      }
    },
    setSelectedPersonalizationDataId: (
      state,
      action: PayloadAction<string | undefined>,
    ) => {
      state.selectedPersonalizationDataId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProductsAsync.pending, () => {
        //console.log('setProductsAsync pending');
      })
      .addCase(
        setProductsAsync.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload;
        },
      )
      .addCase(
        setProductsPaginatedAsync.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          action.payload.forEach((product) => {
            state.products.push(product);
          });
        },
      )
      .addCase(
        setCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          state.categories = action.payload;
        },
      )
      .addCase(
        setCategoriesPaginatedAsync.fulfilled,
        (state, action: PayloadAction<Category[]>) => {
          action.payload.forEach((category) => {
            state.categories.push(category);
          });
        },
      )
      .addCase(
        setTagsAsync.fulfilled,
        (state, action: PayloadAction<ProductTag[]>) => {
          state.tags = action.payload;
        },
      )
      .addCase(
        createOrderAsync.fulfilled,
        (state, action: PayloadAction<Order>) => {
          state.orders.push(action.payload);
        },
      )
      .addCase(
        createOrUpdatePersonalizationDataAsync.fulfilled,
        (state, action: PayloadAction<PersonalizationData>) => {
          if (
            !state.personalizationData.find(
              (item) => item.id === action.payload.id,
            )
          ) {
            state.personalizationData.push(action.payload);
          } else {
            state.personalizationData = state.personalizationData.map((item) =>
              item.id === action.payload.id ? action.payload : item,
            );
          }
        },
      )
      .addCase(PURGE, (state) => {
        state.orders = [];
        state.personalizationData = [];
      });
  },
});

export const {
  setSelectedProductId,
  setSelectedCategoryId,
  setSelectedTag,
  setSelectedPersonalizationDataId,
} = productsSlice.actions;
export default productsSlice.reducer;
