import { View, Image, StyleSheet } from 'react-native';
import { Order, PersonalizationData, Product } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  orderContainer: {
    height: hp('25%'),
    borderWidth: 1,
    borderRadius: 10,
  },
  productPhoto: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    //shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3,
  },
  orderIdText: {
    fontSize: hp('1.7%'),
    textAlign: 'left',
  },
  orderStatusText: {
    fontSize: hp('1.8%'),
    textAlign: 'right',
  },
  orderDateText: {
    fontSize: hp('1.5%'),
    textAlign: 'right',
  },
  orderTitleText: {
    fontSize: hp('1.8%'),
    textAlign: 'left',
  },
  orderDetailsContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  orderIconContainer: {
    flex: 1,
  },
  orderIcon: {
    width: hp('5%'),
    height: hp('5%'),
    borderRadius: 75,
    borderWidth: 1,
  },
  orderTextStatusContainer: {
    flex: 2,
  },
  orderTextDetailsContainer: {
    flex: 4,
  },
});

export default function OrderCard(props: {
  order: Order;
  orderProduct: Product;
  personalizationDataItem: PersonalizationData | undefined;
}) {
  const { colors } = useTheme();

  return (
    <View
      key={props.order.orderId}
      style={[
        styles.orderContainer,
        { backgroundColor: colors.background, borderColor: colors.border },
      ]}
    >
      <Image
        style={[styles.productPhoto, { shadowColor: colors.shadowColor }]}
        source={{ uri: props.orderProduct.photos[0] }}
      />

      <View style={styles.orderDetailsContainer}>
        <View style={styles.orderIconContainer}>
          {props.personalizationDataItem?.image ? (
            <Image
              style={[
                styles.orderIcon,
                {
                  borderColor: colors.border,
                },
              ]}
              source={{
                uri: props.personalizationDataItem.image,
              }}
              resizeMode="cover"
            />
          ) : (
            <FontAwesome
              name="shopping-basket"
              size={hp('3%')}
              color={colors.primary}
            />
          )}
        </View>
        <View style={styles.orderTextDetailsContainer}>
          <CustomText isBold style={[styles.orderTitleText]}>
            {props.orderProduct.productTitle}
          </CustomText>
          <CustomText isSecondary style={[styles.orderIdText]}>
            Order Id: {props.order.orderId.slice(0, 8)}
          </CustomText>
        </View>
        <View style={styles.orderTextStatusContainer}>
          <CustomText isBold style={styles.orderDateText}>
            {new Date(props.order.orderDate).toDateString()}
          </CustomText>
          <CustomText
            isBold
            style={[styles.orderStatusText, { color: colors.primary }]}
          >
            {props.order.orderStatus}
          </CustomText>
        </View>
      </View>
    </View>
  );
}