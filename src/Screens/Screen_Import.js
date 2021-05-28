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


class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state = {
        usuarios: []
      }
    }

componentDidMount(){
        // this.getData();
  fetch("https://randomuser.me/api/?results=9")
  .then(result => result.json())
  .then(data => {
    this.setState({usuarios: data.results})
    console.log(data)
  })
  // cada contacto tener un boton de guardar, y que cuando lo toques llames a storeData, etc 

}

async storeData(){
    //setStringStorage
    try{
        const jsonUsuarios = JSON.stringify(this.state.usuarios);
        await AsyncStorage.setItem("Usuarios", jsonUsuarios)
        console.log("Datos almacenados")
    }catch(error){
      console.log(error);
    }
  }

render(){

    const valores = this.state.usuarios.map(item =>
        <Text key={item.login.uuid}
        style={{fontSize:22}}>{item.name.first} {item.name.last}</Text>
        )

    return(
        <View>
            <Text>Las n tarjetas para importar</Text>
            {valores}
            <TouchableOpacity onPress={this.storeData.bind(this)}>
                <View><Text>GUARDAR DATOS</Text></View>
            </TouchableOpacity>
            
        </View>
    )
}
}
export {Screen_Import};