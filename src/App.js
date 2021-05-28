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

import AsyncStorage from '@react-native-async-storage/async-storage'

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
      // datos: [],
      datos: '',
    }
  }
  // componentDidMount(){
  //         // this.getData();
  //   fetch("https://randomuser.me/api/?results=9")
  //   .then(result => result.json())
  //   .then(data => {
  //     this.setState({datos: data.results})
  //     console.log(data)
  //     console.log(data.results[0].location.postcode)
  //   })
  //   // cada contacto tener un boton de guardar, y que cuando lo toques llames a storeData, etc 

  // }



  // async storeData(key, value){
  //   //setStringStorage
  //   try{
  //     await AsyncStorage.setItem(key, value)
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // async getData(){
  //   //getStringStorage
  //   try{
  //     const item = await AsyncStorage.getItem('');
  //     if(item !== null){
  //       this.setState({datos: item});
  //     }else{
  //       console.log('no encontre el key')
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }


  render(){

    const {datos} = this.state

    return (
  <ScrollView>
        <Screen_Import/>
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