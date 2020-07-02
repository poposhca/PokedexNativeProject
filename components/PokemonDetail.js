import * as React from 'react';
import { Text, View } from 'react-native';

const PokemonDetail = ({ name, detail }) => {
    return (
        <View>
            <Text>This is the Pokemon Detail</Text>
            <Text>Name: {name}</Text>
            <Text>More info: {detail}</Text>
        </View>
    )
}

export default PokemonDetail
