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

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> */}
      </Stack>
    </ThemeProvider>
  );
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Perform some sort of async data or asset fetching.a
    setTimeout(() => {
      // dispatch(setProductsAsync(DUMMY_PRODUCTS));
      // dispatch(setCategoriesAsync(DUMMY_CATEGORIES));
      // dispatch(setTagsAsync(DUMMY_CATEGORY_TAGS));
      Promise.all([
        dispatch(setProductsAsync(DUMMY_PRODUCTS)),
        dispatch(setCategoriesAsync(DUMMY_CATEGORIES)),
        dispatch(setTagsAsync(DUMMY_CATEGORY_TAGS)),
      ]).then(() => {
        setDataLoaded(true);
      });
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded && dataLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, dataLoaded]);

  // if (!loaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

const AppProvider = () => (
  <Provider store={store}>
    <RootLayout />
  </Provider>
);

export default AppProvider;
