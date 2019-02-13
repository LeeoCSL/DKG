import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// import styles from './styles';

export default class King extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>King's Cup</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
        color: '#000',
        alignSelf: 'center'
    }
})