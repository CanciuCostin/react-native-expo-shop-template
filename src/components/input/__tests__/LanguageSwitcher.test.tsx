import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LanguageSwitcher from '@components/input/LanguageSwitcher';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);
jest.mock('react-i18next');

describe('LanguageSwitcher', () => {
  it('renders without crashing', () => {
    render(<LanguageSwitcher label="Select Language" />);
  });

  it('displays the current language', () => {
    // Mock the useTranslation hook
    jest.mock('react-i18next', () => ({
      useTranslation: () => ({
        t: (key: string) => key,
        i18n: {
          language: 'en',
        },
      }),
    }));

    const { getByText } = render(<LanguageSwitcher label="Select Language" />);
    expect(getByText('English', { exact: false })).toBeTruthy();
  });

  it('updates the language when a new language is selected', () => {
    // Mock the AsyncStorage module
    jest.mock('@react-native-async-storage/async-storage', () => ({
      getItem: jest.fn().mockResolvedValue('en'), // Mock the stored language as 'en'
      setItem: jest.fn().mockResolvedValue(undefined),
    }));

    const { getByTestId, getByText } = render(
      <LanguageSwitcher label="Select Language" />,
    );
    const dropdown = getByTestId('dropdown');
    fireEvent.press(dropdown);
    const dropdownItem = getByText('Romana', { exact: false });
    fireEvent.press(dropdownItem);

    // Assert that AsyncStorage.setItem is called with the new language
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('user-language', 'ro');
  });
});
