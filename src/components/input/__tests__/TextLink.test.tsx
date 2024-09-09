import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TextLink from '@components/input/TextLink';
import { Linking, TextStyle } from 'react-native';

describe('TextLink', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <TextLink url="https://example.com" text="Click here" />,
    );
    const linkText = getByText('Click here');
    expect(linkText).toBeDefined();
  });

  it('renders correctly with custom text color', () => {
    const { getByText } = render(
      <TextLink url="https://example.com" text="Click here" textColor="red" />,
    );
    const linkText = getByText('Click here');
    expect(
      linkText.props.style.some((item: TextStyle) => item.color === 'red'),
    ).toBeTruthy();
  });

  it('opens the URL when clicked', () => {
    const openURLMock = jest.fn();
    jest.spyOn(Linking, 'openURL').mockImplementation(openURLMock);

    const { getByText } = render(
      <TextLink url="https://example.com" text="Click here" />,
    );
    const linkText = getByText('Click here');
    fireEvent.press(linkText);

    expect(openURLMock).toHaveBeenCalledWith('https://example.com');
  });
});
