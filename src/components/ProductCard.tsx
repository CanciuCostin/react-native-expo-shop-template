import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import CustomButton from '@components/input/CustomButton';
import { Product } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    height: hp('25%'),
    borderWidth: 1,
    borderRadius: 10,
  },
  categoriesPhoto: {
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
  categoriesName: {
    fontSize: hp('1.8%'),
  },
  categoriesInfo: {},
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
        style={[styles.categoriesPhoto, { shadowColor: colors.shadowColor }]}
        source={{ uri: props.product.photos[0] }}
      />
      <View style={styles.productDetailsContainer}>
        <View style={styles.productTextDetailsContainer}>
          <CustomText>Filmulet</CustomText>
          <CustomText isBold style={styles.categoriesName}>
            {props.product.productTitle}
          </CustomText>
        </View>
        <View style={styles.productCreateContainer}>
          <CustomButton title="Create" onPress={props.onCreatePress} />
        </View>
      </View>
    </TouchableOpacity>
  );
}
