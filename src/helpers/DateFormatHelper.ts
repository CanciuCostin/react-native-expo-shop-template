import AsyncStorage from '@react-native-async-storage/async-storage';

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