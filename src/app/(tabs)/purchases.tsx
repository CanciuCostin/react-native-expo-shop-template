import CustomText from '@components/CustomText';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default function Purchases() {
  return (
    <View style={styles.container}>
      <CustomText isBold>Tab One1</CustomText>
      <View style={styles.separator} />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}
