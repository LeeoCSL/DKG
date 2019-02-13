import React, { Component } from 'react';

import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Image } from 'react-native';


// import styles from './styles';
import beer from '../../images/DKG-beer.jpg';
import crown from '../../images/DKG-king.jpg';
import serio from '../../images/DKG-serio.jpg';
export default class src extends Component {
    static navigationOptions ={
        header: null
      }
      
    sueca() {
        this.props.navigation.navigate("Sueca");
    }
    kings() {
        this.props.navigation.navigate("Kings");
    }
    serio() {
        this.props.navigation.navigate("Serio");
    }

  render() {
    return (<View style={styles.container}>
        <Text style={styles.title}>D</Text>
        <Text style={styles.title}>K</Text>
        <Text style={styles.title}>G</Text>

        <TouchableOpacity style={styles.botaoSueca}
        onPress={() => this.sueca()}>
            <Image style={styles.imagemSueca} source={beer}/>    
            <Text style={styles.textoSueca}>Sueca</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoKingsCup}
        onPress={() => this.kings()}>
            <Image style={styles.imagemKingsCup} source={crown}/>    
            <Text style={styles.textKingsCup}>King's Cup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSerio}
        onPress={() => this.serio()}>
            <Image style={styles.imagemSerio} source={serio}/>    
            <Text style={styles.textSerio}>Sério</Text>
        </TouchableOpacity>
    </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        paddingTop: 40
        
    },
    title: {
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#000'
    },
    botaoSueca: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#999',
        marginTop: 30,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    textoSueca:{
        fontSize: 25,
        alignSelf: 'center'
    },
    imagemSueca:{
        height: 50,
        width: 50,
        marginRight: 10
    },
    botaoKingsCup: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#999',
        marginTop: 30,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    textKingsCup:{
        fontSize: 25,
        alignSelf: 'center'
    },
    imagemKingsCup:{
        height: 50,
        width: 50,
        marginRight: 10
    },
    botaoSerio: {
        flexDirection: 'row',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#999',
        marginTop: 30,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
    },
    textSerio:{
        fontSize: 25,
        alignSelf: 'center'
    },
    imagemSerio:{
        height: 50,
        width: 50,
        marginRight: 10
    },
})