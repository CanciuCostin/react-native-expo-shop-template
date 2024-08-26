import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import Strings from '@constants/Strings';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ShadowStyles } from '@styles/CommonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    ...ShadowStyles,
  },
  imagePickerContainer: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  imageInputTitle: {
    flex: 1,
  },
  imageInputLabel: {
    flex: 1,
  },
  imageIcon: {
    opacity: 0.5,
  },
});

export default function CustomImagePicker(props: {
  image: string;
  onImageChange: (image: string) => void;
  label: string;
  notice: string;
  backgroundColor?: string;
  isRequired?: boolean;
  icon?: string;
  otherProps?: any;
}) {
  const { colors } = useTheme();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      props.onImageChange(result.assets[0].uri);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: props.backgroundColor || colors.card,
          shadowColor: colors.shadowColor,
        },
      ]}
    >
      <CustomText isBold style={[styles.imageInputTitle]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'info'}
            size={hp('2%')}
            color={colors.primary}
          />
        )}
        {Strings.WHITESPACE_CHARACTER + props.label}
        <CustomText style={[{ color: colors.notification }]}>
          {(props.isRequired || false) &&
            Strings.WHITESPACE_CHARACTER + Strings.MANDATORY_CHARACTER}
        </CustomText>
      </CustomText>
      <CustomText isSecondary style={styles.imageInputLabel}>
        <FontAwesome
          name="lock"
          size={hp('1.8%')}
          color={colors.secondaryText}
        />
        {Strings.WHITESPACE_CHARACTER + props.notice}
      </CustomText>
      <TouchableOpacity
        style={[
          styles.imagePickerContainer,
          { backgroundColor: colors.background, borderColor: colors.border },
        ]}
        onPress={pickImage}
      >
        {props.image ? (
          <Image
            resizeMode="contain"
            source={
              props.image
                ? { uri: props.image }
                : require('@assets/images/image-placeholder.png')
            }
            style={styles.imageContainer}
          />
        ) : (
          <FontAwesome
            name="photo"
            size={hp('5%')}
            color={colors.secondaryText}
            style={styles.imageIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
