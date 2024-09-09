import { useTheme } from '@react-navigation/native';
import { useState } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { ShadowStyles } from '@styles/CommonStyles';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const buttonContainerStyle = (backgroundColor: string): ViewStyle => ({
  flex: 1,
  backgroundColor: backgroundColor,
  marginVertical: '2%',
  marginHorizontal: '15%',
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
  ...ShadowStyles,
});

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
    fontSize: heightPercentageToDP('1.6%'),
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
  testID?: string;
}) {
  const [loading, setLoading] = useState(false);

  const handleOnPress = async () => {
    setLoading(true);
    if (props.onPressAsync) {
      props
        .onPressAsync()
        .catch(() => setLoading(false))
        .then(() => setLoading(false))
        .finally(() => setLoading(false));
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
      testID={props.testID || 'custom-button'}
      {...props.otherProps}
      onPress={handleOnPress}
      style={[
        buttonContainerStyle(props.backgroundColor || colors.primary),
        props.style || {},
        { borderColor: colors.border, shadowColor: colors.shadowColor },
      ]}
      disabled={props.disabled || loading}
    >
      {loading ? (
        <ActivityIndicator
          size={heightPercentageToDP('2%')}
          color={colors.buttonText}
        />
      ) : (
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
