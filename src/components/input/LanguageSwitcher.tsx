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

export default function LanguageSwitcher(props: { label: string }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(getLanguageFromCode(i18n.language));

  const changeLanguage = (lng: string) => {
    const newLanguage = SUPPORTED_LANGUAGES.find((lang) => lang.name === lng);
    if (!newLanguage) {
      return;
    }
    i18n.changeLanguage(newLanguage.code);
    AsyncStorage.setItem('user-language', newLanguage.code);
    setLanguage(newLanguage);
  };

  return (
    <View style={styles.container}>
      <SettingsDropDown
        defaultItemIndex={SUPPORTED_LANGUAGES.findIndex(
          (lng) => lng.code === language?.code,
        )}
        countryFlag={language?.flagIsoCode}
        countryFlags={SUPPORTED_LANGUAGES.map((lng) => lng.flagIsoCode)}
        label={props.label}
        dropdownItems={SUPPORTED_LANGUAGES.map((lng) => lng.name)}
        onValueChange={changeLanguage}
      />
    </View>
  );
}
