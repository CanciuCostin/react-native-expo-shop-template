import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomTextInput from '@components/input/CustomTextInput';

describe('CustomTextInput', () => {
  it('renders correctly with the provided props', () => {
    const onChangeText = jest.fn();
    const placeholder = 'Enter text';
    const label = 'Text Input';
    const value = 'Hello World';

    const { getByPlaceholderText, getByText } = render(
      <CustomTextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        label={label}
      />,
    );

    const inputElement = getByPlaceholderText(placeholder);
    const labelElement = getByText(label);

    expect(inputElement).toBeDefined();
    expect(labelElement).toBeDefined();
    expect(inputElement.props.value).toBe(value);
  });

  it('calls the onChangeText callback when the input value changes', () => {
    const onChangeText = jest.fn();
    const placeholder = 'Enter text';
    const label = 'Text Input';

    const { getByPlaceholderText } = render(
      <CustomTextInput
        value=""
        placeholder={placeholder}
        onChangeText={onChangeText}
        label={label}
      />,
    );

    const inputElement = getByPlaceholderText(placeholder);
    const newValue = 'New Value';

    fireEvent.changeText(inputElement, newValue);

    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });
});
