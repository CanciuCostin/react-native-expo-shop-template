import React from 'react';
import { render } from '@testing-library/react-native';
import InputValidationError from '@components/input/InputValidationError';

describe('InputValidationError', () => {
  it('renders without errors', () => {
    const { queryByTestId } = render(<InputValidationError errors={[]} />);
    const inputValidationError = queryByTestId('input-validation-error');
    expect(inputValidationError).toBeNull();
  });

  it('displays the error messages', () => {
    const errors = ['Error 1', 'Error 2'];
    const { getByText } = render(<InputValidationError errors={errors} />);
    errors.forEach((error) => {
      const errorMessage = getByText(error);
      expect(errorMessage).toBeTruthy();
    });
  });
});
