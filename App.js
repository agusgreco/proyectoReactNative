import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      nombre: "",
      text: "",
      textHandler: "",
      apellido: "",
      edad: "",
    }
  }

  render(){
    return (
  <ScrollView>
  
      <Text>Hola</Text>

  </ScrollView>
    
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

    );
  }
}