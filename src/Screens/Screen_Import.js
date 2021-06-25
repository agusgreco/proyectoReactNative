import React, {Component} from 'react';
import {
  Text,
  View,
  Animated,
  Button,
  TouchableOpacity,
  Alert,
  ActivityIndicator
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
        activity: false
      }
    }

componentDidMount(){
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
        //Alert.alert("Los datos fueron guardados!")
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
    // this.setState({toValue: this.position==1? 1.2 :1})
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

          <View style={styles.importScreen}>
            <View>
              {this.state.activity 
                ?<ActivityIndicator 
                    color="blue"
                    size={60}
                    />
                : valores
                }
            </View>
          
          <Animated.View style={{
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
          
            

            {/* <Button title="Apreta para animar!" onPress={this.topDown}>
              <Animated.View style={{
                top: this.position,
                width: 150,
                height: 300,
                backgroundColor: 'red',
              }}></Animated.View>
            </Button> */}

            {/* <View style={styles.touchbarContainer}>
              <TouchableOpacity style={styles.menu}>
                <Text style={styles.textoMenu}
                    onPress={ () => this.props.navigation.navigate('Screen Menu')}
                  > MENU</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
                <Text style={styles.textoMenu}
                    onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
                  > IMPORTADAS</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.icons}>
                <Text style={styles.icons}
                    onPress={ () => this.props.navigation.navigate('Screen Recycle')}
                  > PAPELERA </Text>
              </TouchableOpacity>
            </View> */}
              
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