import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomSwitch from '@components/input/CustomSwitch';
import { screen } from '@testing-library/react-native';

describe('CustomSwitch', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <CustomSwitch isEnabled={false} onToggle={() => {}} />,
    );
    const switchComponent = getByTestId('custom-switch');

    expect(switchComponent).toBeDefined();
    expect(switchComponent.props.value).toBe(false);
    expect(switchComponent.props.onChange).toBeDefined();
  });

  it('calls onToggle function when switch is toggled', () => {
    const onToggleMock = jest.fn();
    const { getByTestId } = render(
      <CustomSwitch isEnabled={false} onToggle={onToggleMock} />,
    );
    const switchComponent = getByTestId('custom-switch');

    fireEvent(switchComponent, 'onValueChange', true);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
    expect(onToggleMock).toHaveBeenCalledWith(true);
  });
});
