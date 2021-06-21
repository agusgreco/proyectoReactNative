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
    TouchableWithoutFeedback,
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
             usuarioBorrado: [],
             usuariosVisualizados: [],
             informacionadicional: "",
             text: "",
             textHandler:"",
         }
     }


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

    async storeBorrarData(){
        try{
            const jsonUsuariosBorrados = JSON.stringify(this.state.usuariosImportados);
            await AsyncStorage.setItem('UsuariosBorrados', jsonUsuariosBorrados)
            this.setState({ usuariosImportados: []})
            console.log(jsonUsuariosBorrados)
        }catch(error){
          console.log(error);
        }
      }

    // async storeBorrarUnData(){
    //   try{
    //       const jsonUsuariosBorrado = JSON.stringify(this.state.usuariosImportados.login.uuid);
    //       await AsyncStorage.setItem('UsuarioBorrado', jsonUsuariosBorrado)
    //       // this.setState({ usuariosImportados: []})
    //       console.log(jsonUsuariosBorrados)
    //   }catch(error){
    //     console.log(error);
    //   }
    // }


    async storeBorrarUnData(item){
      try{
        const idx = item.login.uuid;
          const jsonUsuarioBorrado = JSON.stringify(this.state.usuariosImportados.filter((usuariosImportados) => {
            return(idx== usuariosImportados.login.uuid)
        }))
        console.log(jsonUsuarioBorrado)
          await AsyncStorage.setItem('UsuarioBorrado', jsonUsuarioBorrado)

          let res = this.state.usuariosImportados.filter((usuariosImportados) => {
            return( idx!== usuariosImportados.login.uuid)
        })
          this.setState({ usuariosImportados: res})
          // this.setState({usuarioBorrado:[]})
      }catch(error){
        console.log(error);
      }
    }



    // async storeBorrarUnData(UsuarioBorrado, results){
    //   async storeBorrarUnData(){
    //   try{
    //       const jsonUsuarioBorrado = JSON.stringify(this.state.usuarioBorrado.map((usuarioBorrado) => this.state.items[usuarioBorrado]));

    //       console.log(jsonUsuarioBorrado)
    //       await AsyncStorage.setItem('UsuarioBorrado', jsonUsuarioBorrado)
    //       this.setState({ usuariosImportados: this.state.items.filter((idx) => !this.state.usuarioBorrado.includes(idx))})
    //       // this.setState({ usuariosImportados: this.state.items.filter((tarjeta, idx) => !this.state.usuarioBorrado.includes(idx))})
    //       this.setState({usuarioBorrado:[]})
    //   }catch(error){
    //     console.log(error);
    //   }
    // }



      // borrarUser(usuario){
      //   let usuariosImportados = this.state.usuariosImportados
      //   let res = usuariosImportados.filter((usuariosImportados) => {
      //       return( usuario!== usuariosImportados.login.uuid)
      //           //       return( usuario.login.uuid!== usuariosImportados.login.uuid)

      //   })
      //   let borrado = usuariosImportados.filter((usuariosImportados) => {
      //       return( usuario== usuariosImportados.login.uuid)
      //           //       return( usuario.login.uuid== usuariosImportados.login.uuid)

      //   })
      //    this.setState(usuariosImportados= res, usuariosBorrados= borrado)
      //    //antes decia arrayBorrado en vez de borrado
        
      //    storeDataBorrado
      //   }
        

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

    //   async filtrarPorNombre(texto){
    //     if (texto.length !== 0) {
    //       var escrito = texto
    //       let usuariosImportados = this.state.usuariosImportados
    //       this.setState({ usuariosVisualizados: usuariosImportados})


    //       let filtrado = usuariosVisualizados.filter(dato => {
    //         let itemData = dato.name.first.toUpperCase()
    //         let textData = escrito.toUpperCase()  
    //         if(itemData.includes(textData)) return dato
            
    //       })
    //       console.log(texto)
    //       this.setState({ usuariosVisualizados: filtrado})
    //     } 
    //     else {
    //        await this.getData()
    //         console.log(texto)

    //     }
    //   }

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

    //   async adicionar(texto){
    //     if (texto.length !== 0) {
    //       var escrito = texto
    //       let informacionadicional = this.state.informacionadicional

    //       let filtrado = informacionadicional.filter(dato => {
    //         let itemData = dato.location.city.toUpperCase() && dato.location.state.toUpperCase()
    //         let textData = escrito.toUpperCase()  
    //         if(itemData.includes(textData)) return dato
            
    //       })
    //       console.log(texto)
    //       this.setState({ informacionadicional: filtrado})
    //     } 
    //     else {
    //        await this.getData()
    //         console.log(texto)

    //     }
    //   }
    //   async storeData(){
    //     //setStringStorage
    //     try{
    //         const jsonUsuarios = JSON.stringify(this.state.usuarios);
    //         await AsyncStorage.setItem('Usuarios', jsonUsuarios)
    //         console.log("Datos almacenados")
    //     }catch(error){
    //       console.log(error);
    //     }
    //   }



    renderItem = ({item}) => {
        return(
      //     <View style={styles.container}> 
      //     <TouchableOpacity onPress={ () => this.showModal(item)}> 
      //     <View style={styles.card}> 
      //     <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
      //         <Text style={styles.modalText}> {item.name.last}, {item.name.first} </Text>
      //     </View>
      //     </TouchableOpacity>

      //  </View>
         <View style={styles.itemContainer}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.imageModal} source={{uri: item.picture.large}}/> 
                <Text style={styles.itemText}> 
                    {item.name.last}, {item.name.first} 
                </Text>
                <Text style={styles.itemText}> 
                    ({item.dob.age} years old)
                </Text>
            </View>
            </TouchableOpacity>
         </View>
        )
    }

    // keyExtractor = (item, idx) => idx.toString()

    separator = () => <View style={styles.separator}/>


    render() {

        return (

          <View style={styles.container}>
              <View style={styles.headerBorderImport}>
                  <Text style={styles.headerTextImport}> TARJETAS IMPORTADAS </Text>
              </View>

              <View style={styles.buscar}>
                <Text style={styles.buscarTextNombre}>Nombre:</Text>
                  <TextInput style={styles.buscarSquare} onChangeText={(escrito) => this.filtrarPorNombre(escrito)}>
                </TextInput> 

                <Text style={styles.buscarText} >Apellido:</Text>
                  <TextInput style={styles.buscarSquare} onChangeText={(escrito) => this.filtrarPorApellido(escrito)}>
                </TextInput> 

                <Text style={styles.buscarText}>Pais o Ciudad:</Text>
                  <TextInput style={styles.buscarSquarePais} onChangeText={(escrito) => this.filtrarPorPaisOEstado(escrito)}>
                </TextInput> 
              </View>

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

              <View style={styles.botonBackground}>
                 {/* <Button style={styles.guardarDatos} title="Obtener resultados" onPress={() => this.getData()}/> */}
                 <TouchableOpacity style={styles.botones} onPress={() => this.getData()}>
                   <View><Text style={styles.recycleTexto} >OBTENER RESULTADOS</Text></View>
                  </TouchableOpacity>

                    {/* <TouchableOpacity onPress={() => this.setState({usuariosImportados:[]})}>
                        <View><Text>ELIMINAR DATOS IMPORTADOS</Text></View>
                    </TouchableOpacity> */}

                 <TouchableOpacity style={styles.botones} onPress={() => this.storeBorrarData()}>
                    <View><Text style={styles.recycleTexto}>ELIMINAR DATOS IMPORTADOS</Text></View>
                  </TouchableOpacity>
               </View> 

              <Modal 
                 visible={this.state.showModal}
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
                      <Text style={styles.modalText}> 
                          Datos adicionales: {}
                          {/* <TextInput onChangeText={(escrito) => this.adicionar(escrito)}> </TextInput>  */}
                      </Text>
                      <Text style={styles.texto}> {this.state.textHandler} </Text>
                      <TextInput style={styles.adicional} secureTextEntry={true} onChangeText={text => this.setState({textHandler:text})}/>
                      <TouchableOpacity style={styles.agregar} onPress={() => this.setState({text: this.state.textHandler})}>
                        <View>
                          <Text style={styles.agregarTexto}>AGREGAR</Text>
                        </View>
                      </TouchableOpacity>
                              {/* <Button title="BORRAR USUARIO" onPress={() => this.borrarUser()}/> */}
                              {/* <Button title="BORRAR USUARIO" onPress={() => this.storeBorrarUnData(UsuarioBorrado, results)}/> */}
                              {/* <Button title="BORRAR USUARIO" onPress={() => this.storeBorrarUnData()}/> */}
                              {/* <Button title="BORRAR USUARIO" onPress={() => this.storeBorrarUnData(item)}/> */}
                      <TouchableOpacity style={styles.borrar} onPress={() => this.storeBorrarUnData(item)}>
                        <View>
                          <Text style={styles.agregarTexto}>BORRAR USUARIO</Text>
                        </View>
                      </TouchableOpacity>
                         </> 
                     }
                      <Text style={styles.closeButtonModal} onPress={() => this.setState({showModal: false})}> 
                         X 
                      </Text>
                     </View>
                    </View>
               </Modal>

               <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#A9A9A9', height: 100}}>
                 <TouchableOpacity style={{height: 100, width: 100}}>
                   <Text style={styles.textoMenu}
                      onPress={ () => this.props.navigation.navigate('Screen Menu')}
                    > MENU </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.icons}>
                 <Text style={styles.textoMenu}
                    onPress={ () => this.props.navigation.navigate('Screen Import')}
                  >IMPORTAR </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.icons}>
                 <Text style={styles.textoMenu}
                    onPress={ () => this.props.navigation.navigate('Screen Recycle')}
                  >PAPELERA </Text>
                 </TouchableOpacity>
                 
                 
               </View>

                
            
            </View>

        )
    }
 }

         // storeBorrarUnData(useridx){
    //     let res = this.state.usuariosImportados.filter((usuariosImportados) => {
    //         return( useridx!== usuariosImportados.login.uuid)
    //     })
    //     let borrado = this.state.usuariosImportados.filter((usuariosImportados) => {
    //         return( useridx== usuariosImportados.login.uuid)
    //     })
    //     //  let arrayBorrado = [...this.state.usuariosBorrados, ...borrado]
    //      this.setState(usuariosImportados= res, usuariosBorrados= borrado)
    //      //antes decia arrayBorrado en vez de borrado
    //      storeDataBorrado
    //     }
