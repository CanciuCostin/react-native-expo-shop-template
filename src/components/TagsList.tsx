import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ProductTag } from '@models/Types';
import { AppDispatch, RootState } from '@state/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTag } from '@state/productsDataSlice';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('5%'),
    alignSelf: 'center',
  },
  item: {
    paddingHorizontal: wp('3%'),
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('1%'),
  },
  title: {},
});

export default function TagsList() {
  const tags = useSelector((state: RootState) => state.productsData.tags);
  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();
  const { selectedTags } = useSelector(
    (state: RootState) => state.productsData,
  );

  const renderTagItem = ({ item }: { item: ProductTag }) => (
    <TouchableOpacity
      onPress={() => dispatch(setSelectedTag(item.tagId))}
      style={[
        styles.item,
        {
          backgroundColor: colors.card,
          borderColor: selectedTags.includes(item.tagId)
            ? colors.primary
            : colors.border,
        },
      ]}
    >
      <CustomText style={styles.title}>{item.tagName}</CustomText>
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
