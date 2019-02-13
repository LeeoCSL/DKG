import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icon from '../../images/DKG-rules.png';
// import styles from './styles';

export default class Sueca extends Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Sueca</Text>
                <TouchableOpacity>
                <Image style={styles.icon} source={icon}/>
                </TouchableOpacity>

            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    head:{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title:{
        flex: 1,
        fontSize: 30,
        color: '#000',
        alignSelf: 'center',
        textAlign: 'center',
        marginRight: 10
    },
    icon:{
        height:30,
        width:30,
        alignSelf: 'flex-end',
        marginLeft: 10
    }
})