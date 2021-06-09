import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage'
import {styles} from '../styles/styles';

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
        <View style={styles.container}>
            <Text style={styles.title}>Las n tarjetas para importar</Text>
            {valores}
            <TouchableOpacity onPress={this.storeData.bind(this)}>
                <View><Text>GUARDAR DATOS</Text></View>
            </TouchableOpacity>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen View Imported Cards', {valor:123})}
            >VIEW IMPORTED CARDS</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen FlatList')}
            >FLATLIST</Text>
            {/* no se si esta bien */}
        </View>

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

    )
}
}
export {Screen_Import};