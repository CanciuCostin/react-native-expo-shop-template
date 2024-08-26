import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Strings from '@constants/Strings';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ShadowStyles } from '@styles/CommonStyles';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    ...ShadowStyles,
  },
  textInput: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: '1%',
  },
  textInputLabel: {
    flex: 1,
  },
});

export default function CustomTextInput(props: {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  label: string;
  backgroundColor?: string;
  isRequired?: boolean;
  icon?: string;
  labelProps?: any;
  textProps?: any;
  iconProps?: any;
}) {
  const [isFocused, setIsFocused] = useState(false);

  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.containerStyle,
        {
          backgroundColor: props.backgroundColor || colors.card,
          shadowColor: colors.shadowColor,
        },
      ]}
    >
      <CustomText isBold style={[styles.textInputLabel, props.textProps || {}]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'info'}
            size={hp('2%')}
            color={colors.primary}
            {...props.iconProps}
          />
        )}
        {Strings.WHITESPACE_CHARACTER + props.label}
        <CustomText style={[{ color: colors.notification }]}>
          {(props.isRequired || false) &&
            Strings.WHITESPACE_CHARACTER + Strings.MANDATORY_CHARACTER}
        </CustomText>
      </CustomText>
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        placeholderTextColor={colors.secondaryText}
        style={[
          styles.textInput,
          props.textProps || {},
          {
            borderColor: isFocused ? colors.primary : colors.border,
            color: colors.secondaryText,
          },
        ]}
      />
    </View>
  );
}
