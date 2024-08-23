import CustomText from '@components/CustomText';
import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  errorText: {
    paddingLeft: '5%',
    marginBottom: '1%',
  },
});

export default function InputValidationError(props: { errors: string[] }) {
  const { colors } = useTheme();

  return props.errors.map((error: string) => (
    <CustomText
      key={error}
      style={[styles.errorText, { color: colors.notification }]}
    >
      {error}
    </CustomText>
  ));
}
