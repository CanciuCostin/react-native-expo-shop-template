import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SettingsDropDown from '@components/input/SettingsDropDown';
import SUPPORTED_LANGUAGES from '@data/SupportedLanguages';
import { SupportedLanguage } from '@models/Languages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function getLanguageFromCode(code: string): SupportedLanguage | undefined {
  return SUPPORTED_LANGUAGES.find((lang) => lang.code === code);
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(getLanguageFromCode(i18n.language));

  const changeLanguage = (lng: string) => {
    setLanguage(SUPPORTED_LANGUAGES.find((lang) => lang.name === lng));
    if (!language) {
      return;
    }
    i18n.changeLanguage(language.code);
    AsyncStorage.setItem('user-language', language.code);
  };

  return (
    <View style={styles.container}>
      <SettingsDropDown
        defaultItemIndex={SUPPORTED_LANGUAGES.findIndex(
          (lng) => lng.code === language?.code,
        )}
        countryFlag={language?.flagIsoCode}
        countryFlags={SUPPORTED_LANGUAGES.map((lng) => lng.flagIsoCode)}
        label="Language"
        dropdownItems={SUPPORTED_LANGUAGES.map((lng) => lng.name)}
        onValueChange={changeLanguage}
      />
    </View>
  );
}
