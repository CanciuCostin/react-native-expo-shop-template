import AsyncStorage from '@react-native-async-storage/async-storage';

export default function formatDateByLocale(date: Date): Promise<string> {
    return AsyncStorage.getItem('user-language').then((language) =>
    date.toLocaleDateString(language || 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toLocaleUpperCase());
}
