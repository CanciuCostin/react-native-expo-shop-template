import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

const buttonContainerStyle = (backgroundColor: string): ViewStyle => ({
  flex: 1,
  backgroundColor: backgroundColor,
  marginVertical: '2%',
  marginHorizontal: '15%',
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
});

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
  },
});

export default function CustomButton(props: {
  title: string;
  onPressAsync?: () => Promise<void>;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
  backgroundColor?: string;
  otherProps?: any;
}) {
  const [loading, setLoading] = useState(false);

  const handleOnPress = async () => {
    setLoading(true);
    if (props.onPressAsync) {
      props
        .onPressAsync()
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else if (props.onPress) {
      props.onPress();
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const { colors } = useTheme();

  return (
    <TouchableOpacity
      {...props.otherProps}
      onPress={handleOnPress}
      style={[
        buttonContainerStyle(props.backgroundColor || colors.primary),
        props.style || {},
        { borderColor: colors.border },
      ]}
      disabled={props.disabled || loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={colors.buttonText} />
      ) : (
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
