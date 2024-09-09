import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DropDown from '@components/input/DropDown';

describe('DropDown', () => {
  const dropdownItems = ['Option 1', 'Option 2', 'Option 3'];
  const label = 'Select an option';
  const onValueChange = jest.fn();

  it('renders correctly', () => {
    const { getByTestId } = render(
      <DropDown
        dropdownItems={dropdownItems}
        label={label}
        onValueChange={onValueChange}
        selectedItem={dropdownItems[0]}
      />,
    );

    expect(getByTestId('dropdown-container')).toBeDefined();
    expect(getByTestId('dropdown-label')).toHaveTextContent(label);
    expect(getByTestId('selected-item')).toHaveTextContent(dropdownItems[0]);
  });

  it('displays the dropdown list when clicked', () => {
    const { getByTestId, queryByTestId } = render(
      <DropDown
        dropdownItems={dropdownItems}
        label={label}
        onValueChange={onValueChange}
        selectedItem={dropdownItems[0]}
      />,
    );

    fireEvent.press(getByTestId('selected-item'));

    expect(queryByTestId('modal-window')).toBeDefined();
    dropdownItems.forEach((item) => {
      expect(queryByTestId(item)).toBeDefined();
    });
  });

  it('calls onValueChange when an item is selected', () => {
    const { getByTestId } = render(
      <DropDown
        dropdownItems={dropdownItems}
        label={label}
        onValueChange={onValueChange}
        selectedItem={dropdownItems[0]}
      />,
    );

    fireEvent.press(getByTestId('selected-item'));
    fireEvent.press(getByTestId(dropdownItems[1]));
    expect(onValueChange).toHaveBeenCalledWith(dropdownItems[1]);
  });
});
