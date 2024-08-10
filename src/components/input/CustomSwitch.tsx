import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
  },
  switchTextContainer: {
    flex: 4,
  },
  switchToggleContainer: {
    flex: 1,
  },
});

export default function CustomSwitch(props: {
  isEnabled?: boolean;
  icon?: string;
  text?: any;
}) {
  const [isEnabled, setIsEnabled] = useState(props.isEnabled || false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { colors } = useTheme();

  return (
    <View style={styles.switchContainer}>
      {props.icon && (
        <FontAwesome
          name={(props.icon as any) || 'default-icon'}
          size={24}
          color={colors.primary}
        />
      )}
      <View style={styles.switchTextContainer}>{props.text}</View>
      <View style={styles.switchToggleContainer}>
        <Switch
          trackColor={{ false: colors.secondaryText, true: colors.primary }}
          thumbColor={isEnabled ? colors.buttonText : colors.border}
          ios_backgroundColor={colors.background}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
