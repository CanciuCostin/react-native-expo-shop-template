import { useTheme } from '@react-navigation/native';
import { Linking, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textLink: {},
});

export default function TextLink(props: {
  url: string;
  text: string;
  textColor?: string;
}) {
  const { colors } = useTheme();

  return (
    <Text
      onPress={() => Linking.openURL(props.url)}
      style={[{ color: props.textColor || colors.linkColor }, styles.textLink]}
    >
      {props.text}
    </Text>
  );
}
