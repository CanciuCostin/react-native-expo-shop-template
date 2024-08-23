import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function PaddingContainer() {
  const { colors } = useTheme();
  return (
    <View
      style={{ height: hp('2%'), backgroundColor: colors.background }}
    ></View>
  );
}
