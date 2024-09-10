import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ShadowStyles } from '@styles/CommonStyles';

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    flex: 1,
    ...ShadowStyles,
  },
  switchIcon: {
    flex: 1,
    alignSelf: 'center',
  },
  switchTextContainer: {
    flex: 13,
  },
  switchToggleContainer: {
    alignItems: 'flex-end',
    flex: 3,
  },
});

export default function CustomSwitch(props: {
  isEnabled: boolean;
  onToggle: () => void;
  icon?: string;
  text?: any;
  backgroundColor?: string;
  applySettingsStyling?: boolean;
  testID?: string;
}) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.switchContainer,
        {
          backgroundColor: props.backgroundColor || colors.card,
          shadowColor: colors.shadowColor,
        },
      ]}
    >
      <View style={[styles.switchIcon]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'default-icon'}
            size={hp('2%')}
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
          testID={props.testID || 'custom-switch'}
          trackColor={{ false: colors.secondaryText, true: colors.primary }}
          thumbColor={props.isEnabled ? colors.buttonText : colors.border}
          ios_backgroundColor={colors.background}
          onValueChange={props.onToggle}
          value={props.isEnabled}
        />
      </View>
    </View>
  );
}
