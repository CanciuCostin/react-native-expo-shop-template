import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@components/useColorScheme';
import { AppDispatch } from '@state/store';
import { useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from '@state/store';
import {
  setProductsAsync,
  setCategoriesAsync,
  setTagsAsync,
} from '@state/productsDataSlice';
import {
  DUMMY_CATEGORIES,
  DUMMY_PRODUCTS,
  DUMMY_CATEGORY_TAGS,
} from '@data/DummyDataArrays';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/config';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
        {
          <Stack.Screen
            name="videoPlayerModal"
            options={{ presentation: 'transparentModal', headerShown: false }}
          />
        }
      </Stack>
    </ThemeProvider>
  );
}

function RootLayout() {
  return <RootLayoutNav />;
}

const AppProvider = () => (
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <RootLayout />
    </Provider>
  </I18nextProvider>
);

export default AppProvider;
