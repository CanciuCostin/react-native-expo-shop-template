import React from 'react';
import { View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    AsyncStorage.setItem('user-language', lng);
  };

  return (
    <View>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Romana" onPress={() => changeLanguage('ro')} />
    </View>
  );
};

export default LanguageSwitcher;
