import React from 'react';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import TagsList from '@components/TagsList';
import { RootState } from '@state/store';
import {
  defaultTagsInitialState,
  emptyInitialState,
  longTagNameInitialState,
  specialCharactersTagsInitialState,
} from '@test-utils/mockStore';

const mockStore = configureStore([]);

describe('TagsList Component', () => {
  it('renders correctly with given tags', () => {
    const initialState: RootState = {
      productsData: {
        tags: [
          { tagId: 1, tagName: 'React' },
          { tagId: 2, tagName: 'JavaScript' },
          { tagId: 3, tagName: 'Expo' },
        ],
        products: [],
        categories: [],
        selectedCategoryId: 0,
        selectedProductId: 0,
        selectedTags: [],
      },
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    expect(getByText('React')).toBeTruthy();
    expect(getByText('JavaScript')).toBeTruthy();
    expect(getByText('Expo')).toBeTruthy();
  });

  it('renders empty list correctly', () => {
    const store = mockStore(emptyInitialState);

    const { queryByText } = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    expect(queryByText('React')).toBeNull();
    expect(queryByText('JavaScript')).toBeNull();
    expect(queryByText('Expo')).toBeNull();
  });

  it('renders tags with special characters correctly', () => {
    const store = mockStore(specialCharactersTagsInitialState);

    const { getByText } = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    expect(getByText('Tag1+')).toBeTruthy();
    expect(getByText('Tag2#')).toBeTruthy();
    expect(getByText('Tag3/')).toBeTruthy();
  });

  it('renders tags with long names correctly', () => {
    const store = mockStore(longTagNameInitialState);

    const { getByText } = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    expect(
      getByText('A very long tag name to test rendering in the component'),
    ).toBeTruthy();
  });

  it('matches snapshot', () => {
    const store = mockStore(defaultTagsInitialState);

    const component = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders the correct number of tags', () => {
    const store = mockStore(defaultTagsInitialState);

    const { getAllByText } = render(
      <Provider store={store}>
        <TagsList />
      </Provider>,
    );

    const tags = getAllByText(/.*/);
    expect(tags).toHaveLength(3);
  });
});
