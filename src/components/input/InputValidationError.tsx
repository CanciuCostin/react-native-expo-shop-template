import CustomText from '@components/CustomText';
import { useTheme } from '@react-navigation/native';
import { InputValidationErrorStyles } from '@styles/CommonStyles';
import { StyleSheet, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  errorText: {
    ...InputValidationErrorStyles,
  } as TextStyle,
});

export default function InputValidationError(props: { errors: string[] }) {
  const { colors } = useTheme();

  return props.errors.map((error: string) => (
    <CustomText
      testID="input-validation-error"
      key={error}
      style={[styles.errorText, { color: colors.notification }]}
    >
      {error}
    </CustomText>
  ));
}
