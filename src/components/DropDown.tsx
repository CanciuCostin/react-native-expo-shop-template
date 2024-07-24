import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
const pokemons = ["Pikachu", "Charmander", "Squirtle"];
export default function App() {
  const [pokemon, setPokemon] = useState("Pikachu");

  const handleValueChange = (
    itemValue: React.SetStateAction<string>,
    itemIndex: any
  ) => setPokemon(itemValue);

  return (
    <View>
      <Picker
        style={styles.pickerStyles}
        selectedValue={pokemon}
        onValueChange={handleValueChange}
      >
        {pokemons.map((pokemon) => (
          <Picker.Item key={pokemon} label={pokemon} value={pokemon} />
        ))}
      </Picker>
      <Text>Choose xxxxxxxxxxx for dropdown</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  pickerStyles: {
    width: "70%",
    backgroundColor: "gray",
    color: "white",
  },
});
