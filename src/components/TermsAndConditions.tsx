import { useTheme } from '@react-navigation/native';
import TextLink from '@components/input/TextLink';
import CustomText from '@components/CustomText';
import { useTranslation } from 'react-i18next';

export default function TermsAndConditions() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <CustomText style={[{ color: colors.text }]}>
      {t('termsAndConditionsNotice')}
      <TextLink url="http://google.com" text=" Terms of Use,"></TextLink>
      <TextLink url="http://google.com" text=" Terms of Sale "></TextLink>
      {t('andThe')}
      <TextLink url="http://google.com" text=" Privacy Policy."></TextLink>
    </CustomText>
  );
}
