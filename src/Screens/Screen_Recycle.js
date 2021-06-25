import React, {Component} from 'react';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    View,
    Text,
    Image,
    ActivityIndicator, 
    Modal, 
    Alert,
    FlatList, 
    TouchableOpacity, 
    Easing
} from 'react-native';
import Animated from 'react-native-reanimated';

 export class Screen_Recycle extends Component {
     constructor(){
         super();
         this.state = {
            usuariosBorrados: [],
            usuariosParaRecuperar: [],
            usuariosImportados: [],
            showModal: false,
            activity: false,
            selectedItem: null,
            definitivo: []
         }
     }

    componentDidMount(){
        // getDataPersonaBorrada()
        // .then(resultadoBorrado => {
        //     this.setState({userBorrado: resultadoBorrado})
        // })
    }

 async getDataBorrada(){
        try{
          const resultado = await AsyncStorage.getItem('UsuariosBorrados2');
          if(resultado !== null){
            this.setState({usuariosBorrados: JSON.parse(resultado)});
            console.log(resultado)
          }else{
            console.log('no se encontro')
          }
        }catch(error){
          console.log(error);
        }
 }


async storeDatosParaRecuperar2(seleccionado){
  try{

    let res = this.state.usuariosBorrados.filter((usuariosBorrados) => {
      return( usuariosBorrados.login.uuid !== seleccionado.login.uuid)
  })
    this.state.usuariosParaRecuperar.push(seleccionado)
      const jsonUsuariosRecuperados = JSON.stringify(this.state.usuariosParaRecuperar);

      await AsyncStorage.setItem('UsuariosRecuperados', jsonUsuariosRecuperados)
       
      this.setState({ usuariosBorrados: res})

  }catch(error){
    console.log(error);
  }
}


async borrarDefinitivo(seleccionado){
  try{
    let res = this.state.usuariosBorrados.filter((usuariosBorrados) => {
      return ( usuariosBorrados.login.uuid !== seleccionado.login.uuid)
    })

    this.setState({ usuariosBorrados: res})
  }catch(error){
    console.log(error);
  }
}

async definitivo (borrados){
  try{
    await AsyncStorage.removeItem(borrados)
    let res = []
    const jsonDefinitivos = JSON.stringify(res);
    await AsyncStorage.setItem('UsuariosBorrados2', jsonDefinitivos)
    this.setState({usuariosBorrados: []})
  }catch(e){
    console.log(e)
  }
}


showModal (item) {
  this.setState({selectedItem: item, showModal: true});
} 
keyExtractor = (item, index) => item.login.uuid;

    renderItem = ({item}) => {
        return(
         <View style={styles.container}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.imageModal} source={{uri: item.picture.large}}/> 
                <Text style={styles.itemTextName}> 
                    {item.name.last}, {item.name.first} 
                </Text>
                <Text style={styles.itemText}> 
                    {item.email} 
                </Text>
                <Text style={styles.itemText}> 
                    DOB: {item.dob.date}
                </Text>
                <Text style={styles.itemText}> 
                    ({item.dob.age} years old)
                </Text>
            </View>
            </TouchableOpacity>
         </View>

        )
    }

  separator = () => <View style={styles.separator}/>

  position = new Animated.Value(0);
  rotacion = this.position.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
   })

  fun = () => {
    Animated.timing(this.position, {
      toValue: 1,
      duration: 4000,
      friction: 3,
      easing: Easing.elastic(3),
      useNativeDriver: false
     }).start()
  }

    render() {
          return (

            <View style={styles.container}>
                <View style={styles.headerBorderImport}>
                    <Text style={styles.headerText}>PAPELERA DE RECICLAJE</Text>
                </View>

                <View style={styles.listContainer}>
                    { this.state.activity 
                        ?<ActivityIndicator color="blue"
                            size={60}/>

                        :<FlatList
                            data={this.state.usuariosBorrados}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            ItemSeparatorComponent={this.separator}
                         />
                    }

                    <View style={styles.botonBackground}>
                      <Animated.View style={{
                        backgroundColor: '#111010',
                        left: this.position,
                        transform: [
                          {rotateX: this.rotacion}
                        ]
                      }}>
                        <TouchableOpacity 
                          style={styles.botonesAbajoMas} 
                          onPress={() => this.getDataBorrada()} 
                           >
                          <Text style={styles.recycleTexto}>OBTENER LAS TARJETAS BORRADAS</Text>
                        </TouchableOpacity>
                      </Animated.View>                          
                      <TouchableOpacity style={styles.botonesAbajoMas} 
                      onPressIn={() => this.definitivo('UsuariosBorrados2')}
                      >
                          <View>
                            <Text style={styles.recycleTexto}>BORRAR TODAS DEFINITIVAMENTE</Text>
                          </View>
                          </TouchableOpacity>
                          </View>

                </View>

                <Modal visible={this.state.showModal}
                   transparent={true}
                   animationType="fade" //slide o fade
                   >
                   <View style={styles.modalContainer}> 
                       <View style={styles.modalBorrar}>
                       { this.state.selectedItem && 
                       <>
                           <Image style={styles.imageModal} source={{uri: this.state.selectedItem.picture.large}} />
                           <Text style={styles.modalText}> 
                               Nombre: {this.state.selectedItem && this.state.selectedItem.name.first + ' ' + this.state.selectedItem.name.last}
                           </Text> 
                           <Text style={styles.modalText}> 
                               Email: {this.state.selectedItem && this.state.selectedItem.email}
                           </Text>
                           <Text style={styles.modalText}> 
                               Age: {this.state.selectedItem && this.state.selectedItem.dob.age}
                           </Text>
                           <Text style={styles.modalText}> 
                               Direccion: {this.state.selectedItem && this.state.selectedItem.location.street.name + ' ' + this.state.selectedItem.location.street.number + ' ' + this.state.selectedItem.location.city + ' ' + this.state.selectedItem.location.state + ' ' + this.state.selectedItem.location.postcode}
                           </Text>
                           <Text style={styles.modalText}> 
                               Telefono: {this.state.selectedItem && this.state.selectedItem.phone}
                           </Text>
                           <Text style={styles.modalText}> 
                               Fecha de registro: {this.state.selectedItem && this.state.selectedItem.registered.date}
                           </Text>
                                </> 
                       }


                      <TouchableOpacity style={styles.borrar} 
                        onPressIn={() => this.storeDatosParaRecuperar2(this.state.selectedItem)}
                        onPress={() => this.setState({showModal: false})}
                        >
                        <View>
                          <Text style={styles.agregarTexto}>RECUPERAR USUARIO</Text>
                        </View>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.borrarDef} 
                      onPressIn={() => this.borrarDefinitivo(this.state.selectedItem)}
                      onPress={() => this.setState({showModal: false})}>
                          <View>
                            <Text style={styles.agregarTextoDos}>BORRAR DEFINITIVAMENTE</Text>
                          </View>
                          </TouchableOpacity>

                           <Text style={styles.closeButtonModal} 
                               onPress={() => this.setState({showModal: false})}> 
                               X 
                           </Text>
                       </View>
                   </View>
                </Modal>

          </View>
        )
    }
 }
