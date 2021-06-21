import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import {styles} from '../styles/styles';
import { Easing } from 'react-native-reanimated';

class Screen_Import extends Component {
    constructor(props){
      super(props);
      this.state = {
        usuarios: [],
        toValue: 1.2,
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
        await AsyncStorage.setItem('Usuarios', jsonUsuarios)
        console.log("Datos almacenados")
    }catch(error){
      console.log(error);
    }
  }

  topDown= () => {
    Animated.timing(this.position, {
      toValue: this.state.toValue,
      duration: 800, 
      easing: Easing.elastic(4),
      useNativeDriver: false
    }).start();
    this.setState({toValue: this.position==1? 1.2 :1})
  }

render(){

    const valores = this.state.usuarios.map(item =>
        <Text key={item.login.uuid}
        style={styles.importTexto}>{item.name.first} {item.name.last}</Text>
        )

    return(
       
       <View style={styles.container}>
     <View style={styles.headerBorderImport}>

            <Text style={styles.headerText}>LAS TARJETAS PARA IMPORTAR</Text>
    </View>
    <View style={styles.importScreen}>
            {valores}
            <TouchableOpacity style={styles.guardarDatos} onPress={this.storeData.bind(this)}>
                <View><Text style={styles.guardarDatosTexto} >GUARDAR DATOS</Text></View>
            </TouchableOpacity>
            </View>

            {/* <Button title="Apreta para animar!" onPress={this.topDown}>
              <Animated.View style={{
                top: this.position,
                width: 150,
                height: 300,
                backgroundColor: 'red',
              }}></Animated.View>
            </Button> */}

            <Text style={styles.textoMenu}
              onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
            >TARJETAS IMPORTADAS</Text>
            <Text style={styles.textoMenu}
              onPress={ () => this.props.navigation.navigate('Screen Recycle')}
            >PAPELERA DE RECICLAJE</Text>
            <Text style={styles.textoMenu}
              onPress={ () => this.props.navigation.navigate('Screen Menu')}
            >MENU</Text>
            {/* no se si esta bien */}

            {/* <View style={styles.botonmenu}>
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Text styles={styles.textmenu}>MENU</Text>
              </TouchableOpacity>
            </View> */}
        </View>



    )
}
}
export {Screen_Import};