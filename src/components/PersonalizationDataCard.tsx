import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { PersonalizationData } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    height: hp('12%'),
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  newPersonalizationIcon: {
    textAlign: 'center',
    flex: 1,
  },
  personalizationImage: {
    flex: 1,
    height: '75%',
    borderRadius: 10,
    //shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  personalizationDetailsContainer: {
    flex: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
});

export default function PersonalizationDataCard(props: {
  personalizationDataItem: PersonalizationData;
  onPress?: () => void;
}) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      key={props.personalizationDataItem.id}
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {props.personalizationDataItem.message === t('newPersonalization') ? (
        <FontAwesome
          style={styles.newPersonalizationIcon}
          name="plus"
          size={hp('3%')}
          color={colors.primary}
        />
      ) : (
        <Image
          style={[
            styles.personalizationImage,
            { shadowColor: colors.shadowColor },
          ]}
          source={
            props.personalizationDataItem.image
              ? { uri: props.personalizationDataItem.image }
              : require('@assets/images/image-placeholder.png')
          }
        />
      )}

      <View style={styles.personalizationDetailsContainer}>
        <CustomText isBold fontSize="1.8%">
          {props.personalizationDataItem.message}
        </CustomText>
        <CustomText isSecondary fontSize="1.6%">
          {props.personalizationDataItem.date &&
            new Date(props.personalizationDataItem.date).toDateString()}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}
