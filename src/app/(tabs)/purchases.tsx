import { StyleSheet, View, Text } from "react-native";

import { Link } from "expo-router";

export default function Purchases() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One1</Text>
      <View style={styles.separator} />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
