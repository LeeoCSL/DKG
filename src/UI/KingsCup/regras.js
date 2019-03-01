import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// import styles from './styles';
import styles from './estilo';
export default class Sueca extends Component {
  
  verRegra = (card) => {
    this.props.navigation.navigate("SuecaRegra", card);
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.contBtn}>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('A')}}>
              <Text style={styles.txtPreto}>
                A
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('2')}}>
              <Text style={styles.txtVermelho}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('3')}}>
              <Text style={styles.txtPreto}>
                3
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contBtn}>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('4')}}>
              <Text style={styles.txtVermelho}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('5')}}>
              <Text style={styles.txtPreto}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('6')}}>
              <Text style={styles.txtVermelho}>
                6
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contBtn}>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('7')}}>
              <Text style={styles.txtPreto}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('8')}}>
              <Text style={styles.txtVermelho}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('9')}}>
              <Text style={styles.txtPreto}>
                9
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contBtn}>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('10')}}>
              <Text style={styles.txtVermelho}>
                10
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnVermelho}
              onPress={() => {this.verRegra('J')}}>
             <Text style={styles.txtPreto}>
                J
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('Q')}}>
              <Text style={styles.txtVermelho}>
                Q
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contBtn}>
          <TouchableOpacity style={styles.btnTransparente}>
          </TouchableOpacity>
            <TouchableOpacity style={styles.btnPreto}
              onPress={() => {this.verRegra('K')}}>
              <Text style={styles.txtVermelho}>
                K
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnTransparente}>
            </TouchableOpacity>
          </View>
        </View>
        );
  }
}