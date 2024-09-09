import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsDropDown from '../SettingsDropDown'; // Adjust the path to your component

describe('SettingsDropDown Component', () => {
  const dropdownItems = ['Item 1', 'Item 2', 'Item 3'];
  const label = 'Select Item';

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <SettingsDropDown dropdownItems={dropdownItems} label={label} />,
    );

    // Check if label is rendered
    expect(getByText(` ${label}`)).toBeTruthy();
  });

  it('opens the modal when the dropdown is pressed', () => {
    const { getByText, getByTestId } = render(
      <SettingsDropDown dropdownItems={dropdownItems} label={label} />,
    );

    // Simulate pressing the dropdown
    fireEvent.press(getByText(` ${label}`));

    // Check if modal appears
    expect(getByTestId('modal')).toBeTruthy();
  });

  it('closes the modal when the close button is pressed', () => {
    const { queryByTestId, getByTestId, getByText } = render(
      <SettingsDropDown dropdownItems={dropdownItems} label={label} />,
    );

    // Open the modal
    fireEvent.press(getByText(` ${label}`));
    expect(getByTestId('modal')).toBeTruthy();

    // Simulate closing the modal
    const closeButton = getByTestId('close-button');
    fireEvent.press(closeButton);

    // Check if modal closes
    expect(queryByTestId('modal')).toBeNull();
  });

  it('selects a new item from the dropdown', () => {
    const { getByTestId, getByText } = render(
      <SettingsDropDown dropdownItems={dropdownItems} label={label} />,
    );

    // Open modal
    fireEvent.press(getByText(` ${label}`));

    // Select the second item
    fireEvent.press(getByTestId('Item 2'));

    // Check if selected item is updated
    expect(getByTestId('selected-item')).toHaveTextContent('Item 2');
  });

  it('calls onValueChange when a new item is selected', () => {
    const onValueChangeMock = jest.fn();
    const { getByText } = render(
      <SettingsDropDown
        dropdownItems={dropdownItems}
        label={label}
        onValueChange={onValueChangeMock}
      />,
    );

    // Open modal
    fireEvent.press(getByText(` ${label}`));

    // Select an item
    fireEvent.press(getByText(' Item 1'));

    // Check if onValueChange is called with the correct value
    expect(onValueChangeMock).toHaveBeenCalledWith('Item 1');
  });
});
