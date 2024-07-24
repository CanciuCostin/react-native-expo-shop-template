import {
  TextInput,
  Button,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import ImagePicker from "@components/ImagePicker";
import DropDown from "@components/DropDown";
import DateTimePicker from "@components/DateTimePicker";
import ProductsHelper from "@helpers/ProductsHelper";
import { Product } from "@models/types";
import { RootState } from "@state/store";
import { useSelector } from "react-redux";

export default function ProductCreateScreen() {
  const products = useSelector(
    (state: RootState) => state.productsData.products
  );
  const selectedProductId = useSelector(
    (state: RootState) => state.productsData.selectedProductId
  );
  const product: Product | undefined = ProductsHelper.getProductBasedOnId(
    selectedProductId,
    products
  );
  return (
    <View style={styles.container}>
      <ImagePicker></ImagePicker>
      <View>
        <DropDown></DropDown>
      </View>
      <DateTimePicker></DateTimePicker>
      <TextInput
        value="test"
        placeholder="useless placeholder"
        style={styles.textInput}
      />
      <TextInput
        value="test"
        placeholder="useless placeholder"
        style={styles.textInput}
      />
      <TextInput
        value="test"
        placeholder="useless placeholder"
        style={styles.textInput}
      />
      <Pressable style={styles.button}>
        <Text>Create</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "red",
  },
});
