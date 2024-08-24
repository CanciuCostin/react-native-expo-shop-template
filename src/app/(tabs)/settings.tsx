import CustomText from '@components/CustomText';
import CustomSwitch from '@components/input/CustomSwitch';
import LanguageSwitcher from '@components/input/LanguageSwitcher';
import SettingsDropDown from '@components/input/SettingsDropDown';
import { useTheme } from '@react-navigation/native';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import SettingsButton from '@components/input/SettingsButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Appearance } from 'react-native';

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
  const { t } = useTranslation();
  const [pushNotificationsEnabled, setPushNotificationsEnabled] =
    useState<boolean>(true);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.preferencesContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          {t('preferencesHeader')}
        </CustomText>
        <LanguageSwitcher />
        <SettingsDropDown
          label={t('interfaceTheme')}
          dropdownItems={['light', 'dark']}
          onValueChange={(value) => Appearance.setColorScheme(value as any)}
          icon="moon-o"
        />
        <CustomSwitch
          isEnabled={pushNotificationsEnabled}
          onToggle={() =>
            setPushNotificationsEnabled(!pushNotificationsEnabled)
          }
          applySettingsStyling
          icon="bell-o"
          text={<CustomText isBold>{t('pushNotifications')}</CustomText>}
        />
      </View>
      <View style={styles.notificationsContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          {t('dataHeader')}
        </CustomText>

        <SettingsButton
          icon="address-card-o"
          label={t('addresses')}
          onPress={() => {}}
        />
        <SettingsButton icon="bank" label={t('invoices')} onPress={() => {}} />
      </View>
      <View style={styles.applicationContainer}>
        <CustomText isBold isSecondary style={styles.settingsLabel}>
          {t('applicationHeader')}
        </CustomText>
        <SettingsButton
          icon="star-o"
          label={t('rateTheApp')}
          onPress={() =>
            Linking.openURL(
              Platform.OS === 'android'
                ? (process.env.EXPO_PUBLIC_RATE_APP_URL_ANDROID as string)
                : (process.env.EXPO_PUBLIC_RATE_APP_URL_IOS as string),
            ).catch((err) => {
              console.error(err);
            })
          }
        />
        <SettingsButton
          icon="money"
          label={t('redeemVoucher')}
          onPress={() => {}}
        />
        <SettingsButton
          icon="mail-forward"
          label={t('contactUs')}
          onPress={() =>
            Linking.openURL(process.env.EXPO_PUBLIC_CONTACT_URL as string)
          }
        />
        <SettingsButton
          icon="lock"
          label={t('privacyPolicy')}
          onPress={() =>
            Linking.openURL(process.env.EXPO_PUBLIC_PRIVACY_URL as string)
          }
        />
        <SettingsButton
          icon="book"
          label={t('termsAndConditions')}
          onPress={() =>
            Linking.openURL(process.env.EXPO_PUBLIC_TERMS_URL as string)
          }
        />
        <SettingsButton
          icon="info-circle"
          label={t('aboutUs')}
          onPress={() =>
            Linking.openURL(process.env.EXPO_PUBLIC_ABOUT_URL as string)
          }
        />
        <CustomText style={styles.copyrights}>{t('copyrights')}</CustomText>
      </View>
    </View>
  );
}
