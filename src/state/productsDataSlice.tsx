import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product, Category, ProductTag } from '@models/types';

interface ProductsDataState {
  products: Product[];
  categories: Category[];
  tags: ProductTag[];
  selectedCategoryId: number;
  selectedProductId: number;
  selectedTags: number[];
}

const initialState: ProductsDataState = {
  products: [],
  categories: [],
  tags: [],
  selectedCategoryId: 0,
  selectedProductId: 0,
  selectedTags: [],
};

export const setProductsAsync = createAsyncThunk(
  'productsData/setProductsAsync',
  async (products: Product[]) => {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
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

export const productsSlice = createSlice({
  name: 'productsData',
  initialState,
  reducers: {
    setSelectedCategoryId: (state, action: PayloadAction<number>) => {
      state.selectedCategoryId = action.payload;
    },
    setSelectedProductId: (state, action: PayloadAction<number>) => {
      state.selectedProductId = action.payload;
    },
    setSelectedTag: (state, action: PayloadAction<number>) => {
      if (state.selectedTags.includes(action.payload)) {
        state.selectedTags = state.selectedTags.filter(
          (tag) => tag !== action.payload,
        );
      } else {
        state.selectedTags.push(action.payload);
      }
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
      );
  },
});

export const { setSelectedProductId, setSelectedCategoryId, setSelectedTag } =
  productsSlice.actions;
export default productsSlice.reducer;
