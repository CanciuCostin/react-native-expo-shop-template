import { Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import dateFormat from '@helpers/DateFormatHelper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Strings from '@constants/Strings';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';

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
  defaultDate?: Date;
  label: string;
  isRequired?: boolean;
  icon?: string;
  backgroundColor?: string;
}) {
  const [date, setDate] = useState(
    props.defaultDate || new Date(1598051730000),
  );
  const [modal, setModalVisible] = useState(false);

  const onChange = (_event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setModalVisible(false);
    setDate(currentDate);
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
      <CustomText isBold style={[styles.dateTimeLabel, { color: colors.text }]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'default-icon'}
            size={16}
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
        <CustomText isSecondary>{dateFormat(date)}</CustomText>
      </TouchableOpacity>

      {modal && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}
