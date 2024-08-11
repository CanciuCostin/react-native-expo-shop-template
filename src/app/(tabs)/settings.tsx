import CustomText from '@components/CustomText';
import CustomSwitch from '@components/input/CustomSwitch';
import LanguageSwitcher from '@components/input/LanguageSwitcher';
import SettingsDropDown from '@components/input/SettingsDropDown';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import SettingsButton from '@components/input/SettingsButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preferencesContainer: {
    flex: 4,
  },
  notificationsContainer: {
    flex: 3,
  },
  applicationContainer: {
    flex: 8,
  },
  settingsLabel: {
    flex: 1,
    textAlignVertical: 'center',
    paddingHorizontal: '5%',
  },
  copyrights: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default function SettingsScreen() {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.preferencesContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          PREFERENCES
        </CustomText>
        <LanguageSwitcher />
        <SettingsDropDown
          label="Interface Aspect"
          dropdownItems={[]}
          icon="moon-o"
        />
        <CustomSwitch
          applySettingsStyling={true}
          icon="bell-o"
          text={<CustomText isBold>Push Notifications</CustomText>}
        />
      </View>
      <View style={styles.notificationsContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          DATA
        </CustomText>

        <SettingsButton
          icon="address-card-o"
          label="Addresses"
          onPress={() => {}}
        />
        <SettingsButton icon="bank" label="Invoices" onPress={() => {}} />
      </View>
      <View style={styles.applicationContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          APPLICATION
        </CustomText>
        <SettingsButton icon="star-o" label="Rate The App" onPress={() => {}} />
        <SettingsButton icon="money" label="Reedem Code" onPress={() => {}} />
        <SettingsButton
          icon="mail-forward"
          label="Contact Us"
          onPress={() => {}}
        />
        <SettingsButton icon="lock" label="Privacy Policy" onPress={() => {}} />
        <SettingsButton
          icon="book"
          label="Terms and Conditions"
          onPress={() => {}}
        />
        <SettingsButton
          icon="info-circle"
          label="About Us"
          onPress={() => {}}
        />
        <CustomText style={styles.copyrights}>Expo Template © 2024</CustomText>
      </View>
    </View>
  );
}
