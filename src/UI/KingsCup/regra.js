import React, { Component } from 'react';

import { View, Text } from 'react-native';

// import styles from './styles';

export default class Regra extends Component {
  constructor(props){
    super(props);
}
render() {
    const tituloCarta = this.props.navigation.state.params.card;
    return (
        <View>
          <Text>{tituloCarta}</Text>
          <Text>Regra da carta</Text>
        </View>
      );
  }
}
