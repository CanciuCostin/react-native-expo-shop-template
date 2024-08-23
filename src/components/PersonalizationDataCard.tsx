import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Order, PersonalizationData } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

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
  personalizationMessage: {
    fontSize: hp('1.8%'),
  },
  personalizationDate: {
    fontSize: hp('1.6%'),
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

  return (
    <TouchableOpacity
      onPress={props.onPress}
      key={props.personalizationDataItem.id}
      style={[
        styles.container,
        { backgroundColor: colors.card, borderColor: colors.border },
      ]}
    >
      {props.personalizationDataItem.message === 'New Personalization' ? (
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
        <CustomText
          isBold
          style={[styles.personalizationMessage, { color: colors.text }]}
        >
          {props.personalizationDataItem.message}
        </CustomText>
        <CustomText
          style={[styles.personalizationDate, { color: colors.secondaryText }]}
        >
          {props.personalizationDataItem.date &&
            new Date(props.personalizationDataItem.date).toDateString()}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
}