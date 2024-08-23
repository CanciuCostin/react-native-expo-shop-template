import { FlatList, View, StyleSheet } from 'react-native';
import { PersonalizationData } from '@models/Types';
import React from 'react';
import { AppDispatch, RootState } from '@state/store';
import { useDispatch, useSelector } from 'react-redux';
import PersonalizationDataCard from '@components/PersonalizationDataCard';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '@components/CustomText';
import { useTheme } from '@react-navigation/native';
import { router } from 'expo-router';
import Screens from '@constants/Screens';
import { setSelectedPersonalizationDataId } from '@state/productsDataSlice';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
  },
  listItem: {
    paddingVertical: '2%',
  },
  label: {
    paddingVertical: '2%',
    paddingLeft: '2%',
    fontSize: hp('1.5%'),
  },
});

export default function PersonalizationDataList() {
  const personalizationData: PersonalizationData[] = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );

  const { colors } = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const renderOrder = ({ item }: { item: PersonalizationData }) => (
    <View style={styles.listItem}>
      <PersonalizationDataCard
        personalizationDataItem={item}
        onPress={() => {
          dispatch(setSelectedPersonalizationDataId(item.id));
          router.replace(Screens.productCreatePath);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomText style={[styles.label, { color: colors.secondaryText }]}>
        PERSONALIZE THE PRODUCT
      </CustomText>
      <PersonalizationDataCard
        personalizationDataItem={{
          id: '0',
          message: 'New Personalization',
          image: undefined,
          date: undefined,
        }}
        onPress={() => router.replace(Screens.productCreatePath)}
      />
      <CustomText style={[{ color: colors.secondaryText }, styles.label]}>
        SELECT FROM PREVIOUS PERSONALIZATIONS
      </CustomText>
      <FlatList
        data={personalizationData}
        renderItem={renderOrder}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
