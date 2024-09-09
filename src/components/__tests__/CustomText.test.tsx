import React from 'react';
import { render } from '@testing-library/react-native';
import CustomText from '../CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

describe('CustomText', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<CustomText>Hello World</CustomText>);
    const textElement = getByText('Hello World');
    expect(textElement).toBeDefined();
  });

  it('renders correctly with custom font size', () => {
    const { getByText } = render(
      <CustomText fontSize="1.6%">Hello World</CustomText>,
    );
    const textElement = getByText('Hello World');
    expect(
      textElement.props.style.some(
        (style: any) => style.fontSize === hp('1.6%'),
      ),
    ).toBeTruthy();
  });
});
