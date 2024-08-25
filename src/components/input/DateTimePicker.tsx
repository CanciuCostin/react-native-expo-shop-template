import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateFormat from '@helpers/DateFormatHelper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Strings from '@constants/Strings';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
  },
  dateTimeContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flex: 2,
    paddingLeft: '1%',
    justifyContent: 'center',
  },
  dateTimeLabel: {
    flex: 1,
  },
});

export default function CustomDateTimePicker(props: {
  date: Date;
  onDateChange: (date: Date) => void;
  label: string;
  isRequired?: boolean;
  icon?: string;
  backgroundColor?: string;
}) {
  const [modal, setModalVisible] = useState(false);

  const onChange = (_event: any, selectedDate: Date | undefined) => {
    setModalVisible(false);
    if (selectedDate) props.onDateChange(selectedDate);
  };

  const showMode = (currentMode: string) => {
    setModalVisible(true);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.backgroundColor || colors.card },
      ]}
    >
      <CustomText isBold style={[styles.dateTimeLabel]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'default-icon'}
            size={hp('2%')}
            color={colors.primary}
          />
        )}
        {Strings.WHITESPACE_CHARACTER + props.label}
        <CustomText style={[{ color: colors.notification }]}>
          {(props.isRequired || false) &&
            Strings.WHITESPACE_CHARACTER + Strings.MANDATORY_CHARACTER}
        </CustomText>
      </CustomText>
      <TouchableOpacity
        style={[styles.dateTimeContainer, { borderColor: colors.border }]}
        onPress={showDatepicker}
      >
        <CustomText isSecondary>{dateFormat(props.date)}</CustomText>
      </TouchableOpacity>

      {modal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
