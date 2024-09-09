import { FlatList, View, StyleSheet } from 'react-native';
import { PersonalizationData } from '@models/Types';
import React from 'react';
import { AppDispatch, RootState } from '@state/store';
import { useDispatch, useSelector } from 'react-redux';
import PersonalizationDataCard from '@components/PersonalizationDataCard';
import CustomText from '@components/CustomText';
import { router } from 'expo-router';
import Screens from '@constants/Screens';
import { setSelectedPersonalizationDataId } from '@state/productsDataSlice';
import { useTranslation } from 'react-i18next';

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
  },
});

export default function PersonalizationDataList() {
  const personalizationData: PersonalizationData[] = useSelector(
    (state: RootState) => state.productsData.personalizationData,
  );

  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const renderOrder = ({ item }: { item: PersonalizationData }) => (
    <View style={styles.listItem}>
      <PersonalizationDataCard
        personalizationDataItem={item}
        onPress={() => {
          dispatch(setSelectedPersonalizationDataId(item.id));
          router.replace(Screens.productOrderPath);
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <CustomText fontSize="1.6%" isSecondary style={[styles.label]}>
        {t('personalizeTheProduct')}
      </CustomText>
      <PersonalizationDataCard
        personalizationDataItem={{
          id: '0',
          message: t('newPersonalization'),
          image: undefined,
          date: undefined,
        }}
        onPress={() => router.replace(Screens.productOrderPath)}
      />
      <CustomText fontSize="1.6%" isSecondary style={[styles.label]}>
        {t('selectFromPreviousPersonalizations')}
      </CustomText>
      <FlatList
        data={personalizationData}
        renderItem={renderOrder}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
}
