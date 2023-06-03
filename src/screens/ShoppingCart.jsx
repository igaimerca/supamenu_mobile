import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../util/colors';

export default function ShoppingCartScreen() {
    return (
        <View style={styles.container}>
            <Text>Shopping Cart Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: colors.default,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogo: {
        fontSize: 24
    }
});