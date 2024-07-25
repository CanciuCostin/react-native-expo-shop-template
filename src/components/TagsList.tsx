import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { ProductTag } from '@models/types';
import { AppDispatch, RootState } from '@state/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTag } from '@state/productsDataSlice';

const styles = StyleSheet.create({
  container: {
    height: 30,
  },
  item: {
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {},
});

export default function TagsList() {
  const tags = useSelector((state: RootState) => state.productsData.tags);
  const dispatch = useDispatch<AppDispatch>();

  const renderTagItem = ({ item }: { item: ProductTag }) => (
    <TouchableOpacity
      onPress={() => dispatch(setSelectedTag(item.tagId))}
      style={styles.item}
    >
      <Text style={styles.title}>{item.tagName}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={tags}
        renderItem={renderTagItem}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.tagId}`}
      />
    </SafeAreaView>
  );
}
