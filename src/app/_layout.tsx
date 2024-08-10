import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@state/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '@i18n/config';
import {
  CyanDeepPurpleDarkTheme,
  CyanDeepPurpleLightTheme,
} from '@themes/Themes';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider
      value={
        colorScheme === 'dark'
          ? CyanDeepPurpleDarkTheme
          : CyanDeepPurpleLightTheme
      }
    >
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
