import { Button, View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function CustomDateTimePicker() {
  const [selectedLanguage, setSelectedLanguage] = useState("java");
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
      {show && (
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
