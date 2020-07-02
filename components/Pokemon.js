import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Pokemon = ({ name }) => (
  <View style={styles.container}>
    <Text>{name}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#03fce3',
    margin: 3,
    padding: 30,
  },
});

export default Pokemon
