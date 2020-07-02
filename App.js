import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PokeList from './components/PokeList';
import PokemonDetail from './components/PokemonDetail';

export default function App() {
  return (
    <View>
      <PokeList />
    </View>
  );
}
