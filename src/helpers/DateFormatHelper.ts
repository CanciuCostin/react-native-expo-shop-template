import AsyncStorage from '@react-native-async-storage/async-storage';

const LOCALES_MAPPING = {
    'ro': 'ro-RO',
    'en': 'en-US',
}

export default function dateFormat(date: Date): string {
    const selectedLocale = AsyncStorage.getItem('user-language')
    console.log(selectedLocale)
    //TODO get the selected locale from the AsyncStorage
    return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).toLocaleUpperCase();
}