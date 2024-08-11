import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  switchIcon: {
    flex: 1,
    alignSelf: 'center',
  },
  switchTextContainer: {
    flex: 13,
  },
  switchToggleContainer: {
    flex: 3,
  },
});

export default function CustomSwitch(props: {
  isEnabled?: boolean;
  icon?: string;
  text?: any;
  backgroundColor?: string;
  applySettingsStyling?: boolean;
}) {
  const [isEnabled, setIsEnabled] = useState(props.isEnabled || false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.switchContainer,
        { backgroundColor: props.backgroundColor || colors.card },
      ]}
    >
      <View style={[styles.switchIcon]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'default-icon'}
            size={16}
            color={colors.primary}
          />
        )}
      </View>
      <View
        style={[
          styles.switchTextContainer,
          props.applySettingsStyling ? { flex: 5 } : {},
        ]}
      >
        {props.text}
      </View>
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