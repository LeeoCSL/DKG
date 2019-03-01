import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";

// import styles from './styles';

export default class Kings extends Component {
  jogar() {
    this.props.navigation.navigate("KingsJogar");
  }
  regras() {
    this.props.navigation.navigate("KingsRegras");
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.jogar()}>
          <Text>Jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.regras()}>
          <Text>Regras</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
