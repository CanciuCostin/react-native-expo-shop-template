import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const pokemons = ['Pikachu', 'Charmander', 'Squirtle'];

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  pickerStyles: {
    width: '70%',
    backgroundColor: 'gray',
    color: 'white',
  },
});

export default function App() {
  const [pokemon, setPokemon] = useState('Pikachu');

  const handleValueChange = (
    itemValue: React.SetStateAction<string>,
    _itemIndex: any,
  ) => setPokemon(itemValue);

  return (
    <View>
      <Picker
        style={styles.pickerStyles}
        selectedValue={pokemon}
        onValueChange={handleValueChange}
      >
        {pokemons.map((pokemonItem) => (
          <Picker.Item
            key={pokemonItem}
            label={pokemonItem}
            value={pokemonItem}
          />
        ))}
      </Picker>
      <Text>Choose xxxxxxxxxxx for dropdown</Text>
    </View>
  );
}
