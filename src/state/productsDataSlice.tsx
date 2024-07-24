import {
  createSlice,
  PayloadAction,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { Product, Category, ProductTag } from "@models/types";

interface ProductsDataState {
  products: Array<Product>;
  categories: Array<Category>;
  tags: Array<ProductTag>;
  selectedCategoryId: number;
  selectedProductId: number;
  selectedTags: Array<number>;
}

const initialState: ProductsDataState = {
  products: [],
  categories: [],
  tags: [],
  selectedCategoryId: 0,
  selectedProductId: 0,
  selectedTags: [],
};

export const productsSlice = createSlice({
  name: "productsData",
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
          (tag) => tag !== action.payload
        );
      } else {
        state.selectedTags.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setProductsAsync.pending, () => {
        console.log("setProductsAsync pending");
      })
      .addCase(
        setProductsAsync.fulfilled,
        (state, action: PayloadAction<Array<Product>>) => {
          state.products = action.payload;
        }
      )
      .addCase(setProductsPaginatedAsync.pending, () => {
        console.log("setProductsPaginatedAsync pending");
      })
      .addCase(
        setProductsPaginatedAsync.fulfilled,
        (state, action: PayloadAction<Array<Product>>) => {
          action.payload.forEach((product) => {
            state.products.push(product);
          });
        }
      )
      .addCase(setCategoriesAsync.pending, () => {
        console.log("setCategoriesAsync pending");
      })
      .addCase(
        setCategoriesAsync.fulfilled,
        (state, action: PayloadAction<Array<Category>>) => {
          state.categories = action.payload;
        }
      )
      .addCase(setCategoriesPaginatedAsync.pending, () => {
        console.log("setCategoriesPaginatedAsync pending");
      })
      .addCase(
        setCategoriesPaginatedAsync.fulfilled,
        (state, action: PayloadAction<Array<Category>>) => {
          action.payload.forEach((category) => {
            state.categories.push(category);
          });
        }
      )
      .addCase(setTagsAsync.pending, () => {
        console.log("setTagsAsync pending");
      })
      .addCase(
        setTagsAsync.fulfilled,
        (state, action: PayloadAction<Array<ProductTag>>) => {
          state.tags = action.payload;
        }
      );
  },
});

export const setProductsAsync = createAsyncThunk(
  "productsData/setProductsAsync",
  async (products: Array<Product>) => {
    //await new Promise((resolve) => setTimeout(resolve, 1000));
    return products;
  }
);

export const setProductsPaginatedAsync = createAsyncThunk(
  "productsData/setProductsPaginatedAsync",
  async (products: Array<Product>) => {
    return products;
  }
);

export const setCategoriesAsync = createAsyncThunk(
  "productsData/setCategoriesAsync",
  async (categories: Array<Category>) => {
    return categories;
  }
);

export const setCategoriesPaginatedAsync = createAsyncThunk(
  "productsData/setCategoriesPaginatedAsync",
  async (categories: Array<Category>) => {
    return categories;
  }
);

export const setTagsAsync = createAsyncThunk(
  "productsData/setTagsAsync",
  async (tags: Array<ProductTag>) => {
    return tags;
  }
);

export const { setSelectedProductId, setSelectedCategoryId, setSelectedTag } =
  productsSlice.actions;
export default productsSlice.reducer;
