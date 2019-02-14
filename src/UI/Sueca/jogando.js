import React, { Component } from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icon from '../../images/DKG-rules.png';
// import styles from './styles';
const cartas = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
]

export default class Sueca extends Component {
  
    state={
        showing: 0,
    }
  
  
    tirarCarta(){
        console.log('ta aqui')
        const RandomNumber = Math.floor(Math.random() * cartas.length) ; 
        console.log(RandomNumber)
        console.log('aa', cartas[RandomNumber])
        this.setState({showing: cartas[RandomNumber]},() => {
            console.log('aq', this.state.showing)
        })
    }
  
    render() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Sueca</Text>
                <TouchableOpacity>
                <Image style={styles.icon} source={icon}/>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.TiraCarta}
                onPress={() => this.tirarCarta()}>
                <Text style={styles.carta}>{this.state.showing}</Text>
            </TouchableOpacity>
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
    },
    TiraCarta:{
        flex: 1
    },
    carta:{
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000'
    }
})