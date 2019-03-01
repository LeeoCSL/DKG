import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 30,
  },
  contBtn:{
    flex:1,
    flexDirection: 'row'
  },
  btnVermelho:{
    flex: 1,
    backgroundColor: '#f00',
    margin: 10,
    alignItems: 'center'
  },
  txtPreto:{
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
  },
  btnPreto:{
    flex: 1,
    backgroundColor: '#000',
    margin: 10,
    alignItems: 'center'
  },
  txtVermelho:{
    color: '#f00',
    textAlign: 'center',
    fontSize: 18,
  },
  btnTransparente:{
    flex: 1,
    margin: 10
  },
})

export default styles;