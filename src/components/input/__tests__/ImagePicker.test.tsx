import React from 'react';
import { render } from '@testing-library/react-native';
import ImagePicker from '@components/input/ImagePicker';

describe('ImagePicker', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <ImagePicker
        image=""
        onImageChange={() => {}}
        label="Select Image"
        notice="Please select an image"
      />,
    );

    expect(getByTestId('imagePickerContainer')).toBeDefined();
    expect(getByTestId('imageInputLabel')).toHaveTextContent('Select Image');
    expect(getByTestId('imageInputNotice')).toHaveTextContent(
      'Please select an image',
    );
  });

  it('displays the selected image', () => {
    const { getByTestId } = render(
      <ImagePicker
        image="https://example.com/image.jpg"
        onImageChange={() => {}}
        label="Select Image"
        notice="Please select an image"
      />,
    );

    expect(getByTestId('selectedImage')).toHaveProp('source', {
      uri: 'https://example.com/image.jpg',
    });
  });
});
