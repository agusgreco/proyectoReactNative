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

class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
          usuariosImportados: [],
      }
    }
async getData(){
        try{
          const resultado = await AsyncStorage.getItem('Usuarios');
          if(item !== null){
            this.setState({usuariosImportaddos: JSON.parse(resultado)});
          }else{
            console.log('no encontre el key')
          }
        }catch(error){
          console.log(error);
        }
 }
    render(){
        const valores = this.state.usuariosImportados.map(item =>
            <Text key={item.login.uuid}
            style={{fontSize:22}}>{item.name.first} {item.name.last}</Text>
            )
            
    return(
            <View>
                <Text>Valores importados</Text>
                {valores}
                <TouchableOpacity onPress={this.getData.bind(this)}>
                    <View><Text>RECUPERAR DATOS</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({usuarios:[]})}>
                    <View><Text>BORRAR DATOS IMPORTADOS</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
    }
    export {Screen_ViewImportedCards};