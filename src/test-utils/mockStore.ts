import configureStore from 'redux-mock-store';
import { RootState } from '@state/store';

const mockStore = configureStore([]);

export const createMockStore = (initialState: RootState) => {
  return mockStore(initialState);
};

export const defaultTagsInitialState: RootState = {
  productsData: {
    tags: [
      { tagId: '1', tagName: 'Tag 1' },
      { tagId: '2', tagName: 'Tag 2' },
      { tagId: '3', tagName: 'Tag 3' },
    ],
    products: [],
    categories: [],
    selectedCategoryId: '0',
    selectedProductId: '0',
    selectedTags: [],
    orders: [],
    personalizationData: [],
    selectedPersonalizationDataId: undefined,
    _persist: {
      version: 0,
      rehydrated: false,
    }, // Assign an empty object to _persist property
  },
};

export const emptyInitialState: RootState = {
  productsData: {
    products: [],
    categories: [],
    selectedCategoryId: '0',
    tags: [],
    selectedProductId: '0',
    selectedTags: [],
    orders: [],
    personalizationData: [],
    selectedPersonalizationDataId: undefined,
    _persist: {
      version: 0,
      rehydrated: false,
    }, // Assign an empty object to _persist property
  },
};

export const longTagNameInitialState: RootState = {
  productsData: {
    products: [],
    categories: [],
    selectedCategoryId: '0',
    tags: [
      {
        tagId: '1',
        tagName: 'A very long tag name to test rendering in the component',
      },
    ],
    selectedProductId: '0',
    selectedTags: [],
    orders: [],
    personalizationData: [],
    selectedPersonalizationDataId: undefined,
    _persist: {
      version: 0,
      rehydrated: false,
    }, // Assign an empty object to _persist property
  },
};

export const specialCharactersTagsInitialState: RootState = {
  productsData: {
    products: [],
    categories: [],
    selectedCategoryId: '0',
    tags: [
      {
        tagId: '1',
        tagName: 'Tag1+',
      },
      {
        tagId: '2',
        tagName: 'Tag2#',
      },
      {
        tagId: '3',
        tagName: 'Tag3/',
      },
    ],
    selectedProductId: '0',
    selectedTags: [],
    orders: [],
    personalizationData: [],
    selectedPersonalizationDataId: undefined,
    _persist: {
      version: 0,
      rehydrated: false,
    }, // Assign an empty object to _persist property
  },
};
