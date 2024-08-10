import { useTheme } from '@react-navigation/native';
import TextLink from '@components/input/TextLink';
import CustomText from '@components/CustomText';

export default function TermsAndConditions() {
  const { colors } = useTheme();

  return (
    <CustomText style={[{ color: colors.text }]}>
      I have read and I agree with the
      <TextLink url="http://google.com" text=" Terms of Use,"></TextLink>
      <TextLink url="http://google.com" text=" Terms of Sale "></TextLink>
      and the
      <TextLink url="http://google.com" text=" Privacy Policy."></TextLink>
    </CustomText>
  );
}
