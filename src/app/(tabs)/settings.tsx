import CustomText from '@components/CustomText';
import CustomSwitch from '@components/input/CustomSwitch';
import LanguageSwitcher from '@components/input/LanguageSwitcher';
import SettingsDropDown from '@components/input/SettingsDropDown';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import SettingsButton from '@components/input/SettingsButton';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
          dropdownItems={[]}
          icon="moon-o"
        />
        <CustomSwitch
          isEnabled={pushNotificationsEnabled}
          onToggle={() => setPushNotificationsEnabled}
          applySettingsStyling={true}
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
          onPress={() => {}}
        />
        <SettingsButton
          icon="money"
          label={t('redeemVoucher')}
          onPress={() => {}}
        />
        <SettingsButton
          icon="mail-forward"
          label={t('contactUs')}
          onPress={() => {}}
        />
        <SettingsButton
          icon="lock"
          label={t('privacyPolicy')}
          onPress={() => {}}
        />
        <SettingsButton
          icon="book"
          label={t('termsAndConditions')}
          onPress={() => {}}
        />
        <SettingsButton
          icon="info-circle"
          label={t('aboutUs')}
          onPress={() => {}}
        />
        <CustomText style={styles.copyrights}>{t('copyrights')}</CustomText>
      </View>
    </View>
  );
}
