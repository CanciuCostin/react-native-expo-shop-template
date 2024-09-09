import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsButton from '@components/input/SettingsButton';

describe('SettingsButton', () => {
  const mockOnPress = jest.fn();

  it('renders correctly with label', () => {
    const { getByText } = render(
      <SettingsButton label="Button Label" onPress={mockOnPress} />,
    );
    expect(getByText('Button Label', { exact: false })).toBeDefined();
  });

  it('renders correctly with value', () => {
    const { getByText } = render(
      <SettingsButton
        label="Button Label"
        value="Button Value"
        onPress={mockOnPress}
      />,
    );
    expect(getByText('Button Value', { exact: false })).toBeDefined();
  });

  it('calls onPress function when button is pressed', () => {
    const { getByTestId } = render(
      <SettingsButton label="Button Label" onPress={mockOnPress} />,
    );
    fireEvent.press(getByTestId('settings-button'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
