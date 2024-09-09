import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CustomButton from '@components/input/CustomButton';
import '@testing-library/jest-native/extend-expect'; // Import the 'extend-expect' module

describe('CustomButton', () => {
  it('renders the button with the provided title', () => {
    const { getByText } = render(<CustomButton title="Submit" />);
    expect(getByText('Submit')).toBeDefined();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Submit" onPress={onPressMock} />,
    );
    fireEvent.press(getByText('Submit'));
    expect(onPressMock).toHaveBeenCalled();
  });

  it('calls the onPressAsync function when the button is pressed and resolves', async () => {
    const onPressAsyncMock = jest.fn(() => Promise.resolve());
    const { getByText } = render(
      <CustomButton title="Submit" onPressAsync={onPressAsyncMock} />,
    );
    await waitFor(() => fireEvent.press(getByText('Submit')));
    await waitFor(() => expect(onPressAsyncMock).toHaveBeenCalled());
  });

  it('disables the button when disabled prop is true', async () => {
    const { getByText } = render(<CustomButton title="Submit" disabled />);
    await waitFor(() => expect(getByText('Submit')).toBeDisabled());
  });

  it('applies the provided style to the button', async () => {
    const { getByTestId } = render(
      <CustomButton title="Submit" style={{ backgroundColor: 'red' }} />,
    );
    await waitFor(() =>
      expect(getByTestId('custom-button')).toHaveStyle({
        backgroundColor: 'red',
      }),
    );
  });
});
