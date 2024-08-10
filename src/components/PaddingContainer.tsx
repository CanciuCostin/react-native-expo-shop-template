import { useTheme } from '@react-navigation/native';
import { View } from 'react-native';

export default function PaddingContainer() {
  const { colors } = useTheme();
  return <View style={{ flex: 1, backgroundColor: colors.background }}></View>;
}
