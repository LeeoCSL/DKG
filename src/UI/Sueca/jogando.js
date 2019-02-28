import React, { Component } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import icon from "../../images/DKG-rules.png";
// import styles from './styles';
let cartas = [
  "A♥",
  "2♥",
  "3♥",
  "4♥",
  "5♥",
  "6♥",
  "7♥",
  "8♥",
  "9♥",
  "10♥",
  "J♥",
  "Q♥",
  "K♥",
  "A♠",
  "2♠",
  "3♠",
  "4♠",
  "5♠",
  "6♠",
  "7♠",
  "8♠",
  "9♠",
  "10♠",
  "J♠",
  "Q♠",
  "K♠",
  "A♦",
  "2♦",
  "3♦",
  "4♦",
  "5♦",
  "6♦",
  "7♦",
  "8♦",
  "9♦",
  "10♦",
  "J♦",
  "Q♦",
  "K♦",
  "A♣",
  "2♣",
  "3♣",
  "4♣",
  "5♣",
  "6♣",
  "7♣",
  "8♣",
  "9♣",
  "10♣",
  "J♣",
  "Q♣",
  "K♣"
];

let cartas2 = [];

let cartas3 = [];

export default class Sueca extends Component {
  state = {
    showing: 0,
    indiceShow: -1,
    regra: "A regra vai aparecer aqui"
  };

  tirarCarta() {
    cartas3 = cartas;
    console.log("aaaaaa");
    if (cartas.length > 0) {
      console.log("ta aqui");
      const RandomNumber = Math.floor(Math.random() * cartas.length);
      console.log(RandomNumber);
      console.log("aa", cartas[RandomNumber]);
      this.setState({ showing: cartas[RandomNumber] }, () => {
        console.log("aq", this.state.showing);
      });
      this.setState({ indiceShow: RandomNumber }, () => {
        console.log("att indice", this.state.indiceShow);
      });
      this.refazVetor(RandomNumber);
      if (this.state.indiceShow === -1) {
        console.log("tire uma carta");
      } else {
        if (cartas3[this.state.indiceShow].includes("A")) {
          this.setState({ regra: "regra carta A" });
        }
        if (cartas3[this.state.indiceShow].includes("2")) {
          this.setState({ regra: "regra carta 2" });
        }
        if (cartas3[this.state.indiceShow].includes("3")) {
          this.setState({ regra: "regra carta 3" });
        }
        if (cartas3[this.state.indiceShow].includes("4")) {
          this.setState({ regra: "regra carta 4" });
        }
        if (cartas3[this.state.indiceShow].includes("5")) {
          this.setState({ regra: "regra carta 5" });
        }
        if (cartas3[this.state.indiceShow].includes("6")) {
          this.setState({ regra: "regra carta 6" });
        }
        if (cartas3[this.state.indiceShow].includes("7")) {
          this.setState({ regra: "regra carta 7" });
        }
        if (cartas3[this.state.indiceShow].includes("8")) {
          this.setState({ regra: "regra carta 8" });
        }
        if (cartas3[this.state.indiceShow].includes("9")) {
          this.setState({ regra: "regra carta 9" });
        }
        if (cartas3[this.state.indiceShow].includes("10")) {
          this.setState({ regra: "regra carta 10" });
        }
        if (cartas3[this.state.indiceShow].includes("J")) {
          this.setState({ regra: "regra carta J" });
        }
        if (cartas3[this.state.indiceShow].includes("Q")) {
          this.setState({ regra: "regra carta Q" });
        }
        if (cartas3[this.state.indiceShow].includes("K")) {
          this.setState({ regra: "regra carta K" });
        }
      }
    } else {
      this.setState({ showing: "Todas as cartas foram tiradas" });
    }
  }

  refazVetor(indiceNaoVai) {
    let ind = 0;
    for (let i = 0; i < cartas.length; i++) {
      if (i !== indiceNaoVai) {
        cartas2[ind] = cartas[i];
        ind++;
      } else {
        console.log("nao deve ir");
      }
    }
    ind = 0;
    console.log("primeiro vetor", cartas);
    console.log("segundo vetor", cartas2);
    cartas = cartas2;
    cartas2 = [];
  }

  duvida() {
    if (this.state.indiceShow === -1) {
      console.log("tire uma carta");
    } else {
      if (cartas3[this.state.indiceShow].includes("A")) {
        this.setState({ regra: "regra carta A" });
      }
      if (cartas3[this.state.indiceShow].includes("2")) {
        this.setState({ regra: "regra carta 2" });
      }
      if (cartas3[this.state.indiceShow].includes("3")) {
        this.setState({ regra: "regra carta 3" });
      }
      if (cartas3[this.state.indiceShow].includes("4")) {
        this.setState({ regra: "regra carta 4" });
      }
      if (cartas3[this.state.indiceShow].includes("5")) {
        this.setState({ regra: "regra carta 5" });
      }
      if (cartas3[this.state.indiceShow].includes("6")) {
        this.setState({ regra: "regra carta 6" });
      }
      if (cartas3[this.state.indiceShow].includes("7")) {
        this.setState({ regra: "regra carta 7" });
      }
      if (cartas3[this.state.indiceShow].includes("8")) {
        this.setState({ regra: "regra carta 8" });
      }
      if (cartas3[this.state.indiceShow].includes("9")) {
        this.setState({ regra: "regra carta 9" });
      }
      if (cartas3[this.state.indiceShow].includes("10")) {
        this.setState({ regra: "regra carta 10" });
      }
      if (cartas3[this.state.indiceShow].includes("J")) {
        this.setState({ regra: "regra carta J" });
      }
      if (cartas3[this.state.indiceShow].includes("Q")) {
        this.setState({ regra: "regra carta Q" });
      }
      if (cartas3[this.state.indiceShow].includes("K")) {
        this.setState({ regra: "regra carta K" });
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>Sueca</Text>
          <TouchableOpacity
            onPress={() => {
              this.duvida();
            }}
          >
            <Image style={styles.icon} source={icon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.TiraCarta}
          onPress={() => this.tirarCarta()}
        >
          <Text style={styles.carta}>{this.state.showing}</Text>
        </TouchableOpacity>

        <Text>{this.state.regra}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  head: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  title: {
    flex: 1,
    fontSize: 30,
    color: "#000",
    alignSelf: "center",
    textAlign: "center",
    marginRight: 10
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: "flex-end",
    marginLeft: 10
  },
  TiraCarta: {
    flex: 1
  },
  carta: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000"
  }
});
