import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';

// import {ModalInfo} from '../Components/ModalInfo'
import { 
    View,
    Text,
    Image,
    ActivityIndicator, 
    Modal, 
    TextInput,
    FlatList, 
    TouchableOpacity, 
    Button,
    StyleSheet
} from 'react-native';

 export class Screen_Flatlist extends Component {
     constructor(){
         super();
         this.state = {
            usuariosImportados: [],
             activity: false,
             showModal: false,
             selectedItem: null,
             usuariosBorrados: [],
         }
     }

    componentDidMount() {
        // getData()
        // .then( resultado => {
        //     this.setState({users: resultado, activity: false})
        // })
        // this.getDataFromApi()
    }

    // async getDataFromApi() {
    //     this.setState({activity: true});
    //     let usuarios = await getData();
    //     console.log(usuarios)
    //     this.setState({usuariosImportados: usuarios, activity: false})
    // }

    // async getDataFromApi() {
    //     this.setState({activity: true});
    //     let usuarios = await AsyncStorage.getItem('Usuarios');
    //     console.log(usuarios)
    //     this.setState({users: JSON.parse(usuarios)})
    // }

    async getData(){
        try{
          const resultado = await AsyncStorage.getItem('Usuarios');
          if(resultado !== null){
            this.setState({usuariosImportados: JSON.parse(resultado)});
          }else{
            console.log('no encontre el key')
          }
        }catch(error){
          console.log(error);
        }
 }

    // borrarUser(useridx){
    //     let res = this.state.usuariosImportados.filter((usuariosImportados) => {
    //         return( useridx!== usuariosImportados.login.uuid)
    //     })
    //     let borrado = this.state.usuariosImportados.filter((usuariosImportados) => {
    //         return( useridx== usuariosImportados.login.uuid)
    //     })
    //      let arrayBorrado = [...this.state.usuariosBorrados, ...borrado]
    //      this.setState(usuariosImportados: res, usuariosBorrados: arrayBorrado)
        
    //      storeDataBorrado
    //     }
    async storeBorrarData(){
        //obtener usuarios de mi storage bajo la key usuarios. 
        //los guardamos bajo otra key (keyBorrados) en el storage y los que estaban sobre la key usuarios se sobreescribe con un array vacio. 
    
        try{
            const jsonUsuarios = JSON.stringify(this.state.usuarios);
            await AsyncStorage.setItem('Usuarios', jsonUsuarios)
            console.log("Datos almacenados")
        }catch(error){
          console.log(error);
        }
      }

    showModal (item) {
        this.setState({selectedItem: item, showModal: true});
    } 




        keyExtractor = (item, index) => item.login.uuid;


    async filtrarPorNombre(texto){
        if (texto.length !== 0) {
          var escrito = texto
          let usuariosImportados = this.state.usuariosImportados

          let filtrado = usuariosImportados.filter(dato => {
            let itemData = dato.name.first.toUpperCase()
            let textData = escrito.toUpperCase()  
            if(itemData.includes(textData)) return dato
            
          })
          console.log(texto)
          this.setState({ usuariosImportados: filtrado})
        } 
        else {
           await this.getData()
            console.log(texto)

        }
      }

      async filtrarPorApellido(texto){
        if (texto.length !== 0) {
          var escrito = texto
          let usuariosImportados = this.state.usuariosImportados

          let filtrado = usuariosImportados.filter(dato => {
            let itemData = dato.name.last.toUpperCase()
            let textData = escrito.toUpperCase()  
            if(itemData.includes(textData)) return dato
            
          })
          console.log(texto)
          this.setState({ usuariosImportados: filtrado})
        } 
        else {
           await this.getData()
            console.log(texto)

        }
      }

      async filtrarPorPaisOEstado(texto){
        if (texto.length !== 0) {
          var escrito = texto
          let usuariosImportados = this.state.usuariosImportados

          let filtrado = usuariosImportados.filter(dato => {
            let itemData = dato.location.city.toUpperCase() && dato.location.state.toUpperCase()
            let textData = escrito.toUpperCase()  
            if(itemData.includes(textData)) return dato
            
          })
          console.log(texto)
          this.setState({ usuariosImportados: filtrado})
        } 
        else {
           await this.getData()
            console.log(texto)

        }
      }


    renderItem = ({item}) => {
        return(
         <View style={styles.container}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
                <Text style={styles.texto}> {item.name.last}, {item.name.first} </Text>
            </View>
            </TouchableOpacity>

            {/* <Text>Valor: {this.props.route.params.valor}</Text> */}
            
            {/* <Text style={styles.texto}
                  onPress={ () => this.props.navigation.goBack()}
            >GO BACK</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Import')}
            >SCREEN IMPORT</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen View Imported Cards')}
            >VIEW IMPORTED CARDS</Text> */}
         </View>

        )
    }

    keyExtractor = (item, idx) => idx.toString()

    separator = () => <View style={styles.separator}/>


    render() {
        // const valores = this.state.usuariosImportados.map(item =>
        //     <Text key={item.login.uuid}
        //     style={{fontSize:22}}>{item.name.first} {item.name.last}</Text>
        //     )
        return (

            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text> TARJETAS IMPORTADAS </Text>
                </View>
            {/* {valores} */}

            <Text>Nombre:</Text>
            <TextInput onChangeText={(escrito) => this.filtrarPorNombre(escrito)}>
            </TextInput> 

            <Text>Apellido:</Text>
            <TextInput onChangeText={(escrito) => this.filtrarPorApellido(escrito)}>
            </TextInput> 

            <Text>Pais o Ciudad:</Text>
            <TextInput onChangeText={(escrito) => this.filtrarPorPaisOEstado(escrito)}>
            </TextInput> 

                <View style={styles.listContainer}>
                    { this.state.activity 
                        ?<ActivityIndicator color="blue"
                            size={60}/>

                        :<FlatList
                            data={this.state.usuariosImportados}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            // numberColumns= {2}
                            ItemSeparatorComponent={this.separator}
                         />
                    }
                </View>

                <Button title="Obtener resultados" onPress={() => this.getData()}/>
              
              
                <TouchableOpacity onPress={() => this.setState({usuariosImportados:[]})}>
                    <View><Text>ELIMINAR DATOS IMPORTADOS</Text></View>
                </TouchableOpacity>
                
                <Modal visible={this.state.showModal}
                   transparent={true}
                   animationType="fade" //slide o fade
                   >
                   <View style={styles.modalContainer}> 
                       <View style={styles.modal}>
                       { this.state.selectedItem && 
                       <>
                           <Image style={styles.imageModal} source={{uri: this.state.selectedItem.picture.thumbnail}} />
                           <Text style={styles.modalText}> 
                               Nombre: {this.state.selectedItem && this.state.selectedItem.name.first + ' ' + this.state.selectedItem.name.last}
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
                           <Text style={styles.modalText}> 
                               Datos adicionales: {}
                           </Text>
                           </> 
                       }
                           <Text style={styles.closeButtonModal} 
                               onPress={() => this.setState({showModal: false})}> 
                               X 
                           </Text>
                       </View>
                   </View>
                </Modal>

            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Import')}
            >IMPORTAR TARJETAS</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Recycle')}
            >PAPELERA DE RECICLAJE</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen BuscarYModificar')}
            >BUSCAR Y MODIFICAR</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Menu')}
            >MENU</Text>
            
            </View>

        )
    }
 }