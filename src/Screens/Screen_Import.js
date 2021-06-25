import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList, 
  Modal,

  ActivityIndicator
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import {styles} from '../styles/styles';
import { Easing } from 'react-native-reanimated';
import {getData} from "../api/RandomUsers"


class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state = {
        usuarios: [],
        toValue: 1.2,
        activity: false,
        numeroDePersonas: ""
      }
    }

    async getData() {
      try {
          let resultado = await fetch("https://randomuser.me/api/?results=" + this.state.numeroDePersonas);
          let json = await resultado.json();
          this.setState({usuarios: json.results})
      } catch(e) {
          console.log('Err: ' + e)
      }
  }
  

async storeData(){
    try{
        const jsonUsuarios = JSON.stringify(this.state.usuarios);
        await AsyncStorage.setItem('Usuarios', jsonUsuarios)
        console.log("Datos almacenados")
    }catch(error){
      console.log(error);
    }
  }

  position = new Animated.Value(0);
  rotacion = this.position.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
   })

  flip = () => {
    Animated.timing(this.position, {
      toValue: 1,
      duration: 4000,
      friction: 3,
      easing: Easing.elastic(3),
      useNativeDriver: false
     }).start()
  }

render(){

    const valores = this.state.usuarios.map(item =>
        <Text key={item.login.uuid}
        style={styles.importTexto}>{item.name.first} {item.name.last}</Text>
        )

    return(
       
       <View style={styles.container}>
          <View style={styles.headerBorderImportDos}>
            <Text style={styles.headerText}>LAS TARJETAS PARA IMPORTAR</Text>
          </View>

          
            <Text style={styles.cant}> 
            CANTIDAD DE USUARIOS: {}
            </Text>
            <TextInput keyboardType="number-pad" style={styles.adicional}  onChangeText={text => this.setState({numeroDePersonas:text})}/>
            <TouchableOpacity style={styles.ag} onPress={() => this.getData()}>
            <View>
            <Text style={styles.agregarNombresTexto}>ENTER</Text>
            </View>
            </TouchableOpacity>

        
          <ScrollView style={styles.importScreen}>           
            <View>
              {this.state.activity 
                ?<ActivityIndicator 
                    color="red"
                    size={60}
                    />
                : valores
                }
            </View>
          </ScrollView>

          <Animated.View style={{
            marginTop: 20,
            backgroundColor: '#111010',
            left: this.position,
            transform: [
              {rotateX: this.rotacion}
            ]
          }}>
            <TouchableOpacity style={styles.guardarDatos}
              onPress={this.storeData.bind(this)}
              onPressIn={this.flip} >
                {/* <View> */}
                  <Text style={styles.guardarDatosTexto} >GUARDAR DATOS</Text>
                  {/* </View> */}
            </TouchableOpacity>
            </Animated.View>

        </View>



    )
}
}
export {Screen_Import};