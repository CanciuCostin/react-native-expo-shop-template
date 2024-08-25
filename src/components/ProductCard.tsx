import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import CustomButton from '@components/input/CustomButton';
import { Product } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    height: hp('25%'),
    borderWidth: 1,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  productDetailsContainer: {
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  productTextDetailsContainer: {
    flex: 3,
    marginLeft: '3%',
  },
  productCreateContainer: {
    flex: 2,
    marginVertical: '3%',
  },
});

export default function ProductCard(props: {
  product: Product;
  onCardPress: () => void;
  onCreatePress: () => void;
}) {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      key={props.product.productId}
      onPress={props.onCardPress}
      style={[
        styles.productContainer,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <Image
        style={[styles.productImage, { shadowColor: colors.shadowColor }]}
        source={{ uri: props.product.photos[0] }}
      />
      <View style={styles.productDetailsContainer}>
        <View style={styles.productTextDetailsContainer}>
          <CustomText>{`${t('currency')} ${props.product.productPrice}`}</CustomText>
          <CustomText isBold fontSize="1.8%">
            {props.product.productTitle}
          </CustomText>
        </View>
        <View style={styles.productCreateContainer}>
          <CustomButton
            title={t('orderButton')}
            onPress={props.onCreatePress}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
