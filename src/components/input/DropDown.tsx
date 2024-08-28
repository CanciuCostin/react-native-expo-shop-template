import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Alert,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Strings from '@constants/Strings';
import { useTheme } from '@react-navigation/native';
import CustomText from '@components/CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ShadowStyles } from '@styles/CommonStyles';

const styles = StyleSheet.create({
  dropdownContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    ...ShadowStyles,
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    flex: 2,
    paddingLeft: '2%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  dropdownLabel: {
    flex: 1,
    paddingBottom: '1%',
  },
  modalContainer: {
    flex: 1,
    maxHeight: hp('40%'),
    width: '60%',
    marginTop: '60%',
    alignSelf: 'center',
  },
  modalWindow: {
    flex: 10,
    borderRadius: 10,
    paddingHorizontal: '2%',
    ...ShadowStyles,
  },
  closeModalButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  modalList: {
    width: '100%',
    flex: 6,
  },
  modalLabel: {
    flex: 1,
    paddingTop: '5%',
  },
  modalListItem: {
    paddingVertical: '5%',
    borderTopWidth: 1,
    height: hp('6%'),
    width: '100%',
  },
  dropdownItemText: {
    textAlign: 'center',
  },
});

export default function DropDown(props: {
  dropdownItems: string[];
  label: string;
  isRequired?: boolean;
  icon?: string;
  backgroundColor?: string;
  onValueChange: (value: string) => void;
  selectedItem: string;
  defaultItemIndex?: number;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.dropdownContainer,
        {
          backgroundColor: props.backgroundColor || colors.card,
          shadowColor: colors.shadowColor,
        },
      ]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeModalButton}
          >
            <FontAwesome name="close" size={hp('2.2%')} color={colors.text} />
          </TouchableOpacity>
          <View
            style={[
              styles.modalWindow,
              { backgroundColor: colors.card, shadowColor: colors.shadowColor },
            ]}
          >
            <View style={styles.modalLabel}>
              <CustomText
                isBold
                style={[
                  styles.dropdownLabel,
                  {
                    textAlign: 'center',
                    textAlignVertical: 'center',
                  },
                ]}
              >
                {props.label}
              </CustomText>
            </View>

            <View style={styles.modalList}>
              <FlatList
                data={props.dropdownItems}
                keyExtractor={(item) =>
                  props.dropdownItems.indexOf(item).toString()
                }
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    style={[
                      styles.modalListItem,
                      index % 2
                        ? { backgroundColor: colors.card }
                        : { backgroundColor: colors.oddItems },
                      { borderTopColor: colors.background },
                    ]}
                    onPress={() => {
                      props.onValueChange(item);
                      if (props.onValueChange) {
                        props.onValueChange(item);
                      }
                      setModalVisible(false);
                    }}
                  >
                    <CustomText isSecondary style={styles.dropdownItemText}>
                      {item}
                    </CustomText>
                  </TouchableOpacity>
                )}
              ></FlatList>
            </View>
          </View>
        </View>
      </Modal>
      <CustomText isBold style={[styles.dropdownLabel]}>
        {props.icon && (
          <FontAwesome
            name={(props.icon as any) || 'default-icon'}
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
      <TouchableOpacity
        style={[styles.dropdown, { borderColor: colors.border }]}
        onPress={() => setModalVisible(true)}
      >
        <CustomText isSecondary>
          {props.selectedItem + Strings.WHITESPACE_CHARACTER}
          <FontAwesome
            name="angle-down"
            size={hp('2%')}
            color={colors.primary}
            style={{ flex: 1 }}
          />
        </CustomText>
      </TouchableOpacity>
    </View>
  );
}
