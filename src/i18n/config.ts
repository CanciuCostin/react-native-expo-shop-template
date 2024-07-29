import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Import your translation files
import en from './locales/en.json';
import ro from './locales/ro.json';

import AsyncStorage from '@react-native-async-storage/async-storage';
const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
    },
    lng:
      (await AsyncStorage.getItem('user-language')) ||
      Localization.locale.split('-')[0],
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
