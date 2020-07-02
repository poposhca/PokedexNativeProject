import * as React from 'react';
import { Text, View, ScrollView, FlatList, Button } from 'react-native';
import Pokemons from './Pokemons'
import Pokemon from './Pokemon'

const PokeList = ({ navigation }) => {
  const [pokemons, setPokemons] = React.useState({ results:[] });
  return (
    <View>
      {/* Insertar boton */}
      <Button title="Load Pokemons" onPress={() => setPokemons(Pokemons)} />

      {/* Lista de Pokemon */}
      <FlatList
        data={pokemons.results}
        renderItem={({ item }) => (
          <Pokemon name={item.name} />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  )
}

export default PokeList;
