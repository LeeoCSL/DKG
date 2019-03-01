import React, { Component } from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

// import styles from './styles';

export default class Serio extends Component {
  vorta() {
    this.props.navigation.navigate("Main");
  }

  cumeca() {
    this.props.navigation.navigate("SerioJogando");
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.title}>Sério</Text> */}
        <Text style={styles.ready}>Vocês estão prontas crianças?</Text>

        <View style={styles.butoes}>
          <TouchableOpacity
            style={styles.vorta}
            onPress={() => {
              this.vorta();
            }}
          >
            <Text style={styles.nao}>NÃO :(</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cumeca}
            onPress={() => {
              this.cumeca();
            }}
          >
            <Text style={styles.sim}>ESTAMOS CAPETÃO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    color: "#000",
    alignSelf: "center"
  },
  ready: {
    fontSize: 24
  },
  butoes: {
    flexDirection: "row",
    marginTop: 20
  },
  cumeca: {
    borderWidth: 4,
    borderColor: "#0f0",
    borderRadius: 20,
    margin: 10,
    padding: 10
  },
  sim: {
    color: "#000"
  },
  vorta: {
    borderWidth: 4,
    borderColor: "#f00",
    borderRadius: 20,
    margin: 10,
    padding: 10
  },
  nao: {
    color: "#000"
  }
});
