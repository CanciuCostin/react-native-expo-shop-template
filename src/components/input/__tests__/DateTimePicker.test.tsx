import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import DateTimePicker from '@components/input/DateTimePicker';

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

describe('DateTimePicker', () => {
  const mockDate = new Date('2022-01-01T00:00:00');
  const mockOnDateChange = jest.fn();
  const mockLabel = 'Select Date';
  const mockIsRequired = true;
  const mockIcon = 'calendar';
  const mockBackgroundColor = 'white';

  it('renders correctly with required props', async () => {
    const { getByTestId, getByText } = render(
      <DateTimePicker
        date={mockDate}
        onDateChange={mockOnDateChange}
        label={mockLabel}
        isRequired={mockIsRequired}
        icon={mockIcon}
        backgroundColor={mockBackgroundColor}
      />,
    );

    const container = getByTestId('dateTimePickerContainer');
    const dateTimeContainer = getByTestId('dateTimeContainer');
    const dateTimeLabel = getByText(mockLabel, { exact: false });

    await waitFor(() => {
      expect(container).toBeDefined();
    });
    expect(dateTimeContainer).toBeDefined();
    expect(dateTimeLabel).toBeDefined();
  });
});
