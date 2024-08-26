import { View, Image, StyleSheet } from 'react-native';
import { Order, PersonalizationData, Product } from '@models/Types';
import { useTheme } from '@react-navigation/native';
import CustomText from './CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { ShadowStyles } from '@styles/CommonStyles';

const styles = StyleSheet.create({
  orderContainer: {
    height: hp('25%'),
    borderWidth: 1,
    borderRadius: 10,
    ...ShadowStyles,
  },
  productPhoto: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  orderIdText: {
    textAlign: 'left',
  },
  orderStatusText: {
    textAlign: 'right',
  },
  orderDateText: {
    textAlign: 'right',
  },
  orderTitleText: {
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
  const { t } = useTranslation();

  return (
    <View
      key={props.order.orderId}
      style={[
        styles.orderContainer,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
          shadowColor: colors.shadowColor,
        },
      ]}
    >
      <Image
        style={[styles.productPhoto]}
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
          <CustomText isBold fontSize="1.8%" style={[styles.orderTitleText]}>
            {props.orderProduct.productTitle}
          </CustomText>
          <CustomText isSecondary fontSize="1.7%" style={[styles.orderIdText]}>
            {t('orderId')} {props.order.orderId.slice(0, 8)}
          </CustomText>
        </View>
        <View style={styles.orderTextStatusContainer}>
          <CustomText isBold fontSize="1.5%" style={styles.orderDateText}>
            {new Date(props.order.orderDate).toDateString()}
          </CustomText>
          <CustomText
            isBold
            fontSize="1.8%"
            style={[styles.orderStatusText, { color: colors.primary }]}
          >
            {props.order.orderStatus}
          </CustomText>
        </View>
      </View>
    </View>
  );
}
