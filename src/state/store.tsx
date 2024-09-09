import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsDataSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['orders', 'personalizationData'],
  blacklist: [
    'products',
    'categories',
    'tags',
    'selectedCategoryId',
    'selectedProductId',
    'selectedTags',
    'selectedPersonalizationDataId',
  ],
};

const persistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: {
    productsData: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
