import { useTheme } from '@react-navigation/native';
import { Text, Platform } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

function getAndroidFont(isBold: boolean | undefined) {
  return isBold ? 'RobotoBold' : 'RobotoRegular';
}

export default function CustomText(props: {
  testID?: string;
  isSecondary?: boolean;
  isBold?: boolean;
  style?: any;
  children: any;
  fontSize?: string;
}) {
  const { colors } = useTheme();
  const textStyle: any = {
    color: props.isSecondary ? colors.secondaryText : colors.text,
    fontSize: props.fontSize ? hp(props.fontSize) : hp('1.8%'),
    fontWeight: props.isBold ? 'bold' : 'normal',
  };

  if (Platform.OS === 'android') {
    textStyle.fontFamily = getAndroidFont(props.isBold);
  }
  return (
    <Text
      testID={props.testID || 'custom-text'}
      style={[textStyle, props.style || {}]}
    >
      {props.children}
    </Text>
  );
}
