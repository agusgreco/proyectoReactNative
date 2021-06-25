import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';
import { Card } from '../Components/Card';

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
    Animated,
    Easing,
    ScrollView
} from 'react-native';

 export class Screen_Flatlist extends Component {
     constructor(){
         super();
         this.state = {
             usuariosImportados: [],
             activity: false,
             showModal: false,
             selectedItem: null,
             seleccionado: [],
             usuariosBorrados: [],
             usuariosRecuperados: [],
             usuariosVisualizados: [],
             usuariosParaRecuperar: [],
             informacionadicional: "",
             text: "",
             contactosOriginales: [],
             textHandler:"",
             todosLosUsuarios: [],
         }
     }

 

    async getData() {
      try{
          const usuarios = await AsyncStorage.getItem('Usuarios');
          this.setState({usuariosImportados: JSON.parse(usuarios), contactosOriginales: JSON.parse(usuarios)});
          return usuarios
  


      }catch(e){
        console.log(e);
      }
    }



      async storeBorrarData2(seleccionado){
        try{

          let res = this.state.usuariosImportados.filter((usuariosImportados) => {
            return( usuariosImportados.login.uuid !== seleccionado.login.uuid)
        })
          this.state.usuariosBorrados.push(seleccionado)
            const jsonUsuariosBorrados2 = JSON.stringify(this.state.usuariosBorrados);
 
            await AsyncStorage.setItem('UsuariosBorrados2', jsonUsuariosBorrados2)
             
            this.setState({ usuariosImportados: res})
            console.log(jsonUsuariosBorrados)
            //nada
        }catch(error){
          console.log(error);
        }
      }

      

// async getDatosParaRecuperar(){
//   try{
//     const resultado = await AsyncStorage.getItem('UsuariosRecuperados');
//     if(resultado !== null){

//       const contactosRecuperados = JSON.parse(resultado);

//       this.setState({ usuariosRecuperados: contactosRecuperados})   
//                this.state.usuariosImportados.push(usuariosRecuperados)
//                this.setState({usuariosImportados: usuariosImportados})



//       console.log(resultado)
//     }else{
//       console.log('no se encontro')
//     }
//   }catch(error){
//     console.log(error);
//   }
// }



      async getDatosParaRecuperar2(){
        try{
          const resultado = await AsyncStorage.getItem('UsuariosRecuperados');
          if(resultado !== null){
            this.setState({usuariosParaRecuperar: JSON.parse(resultado)});


               const todosLosUsuarios = [...this.state.usuariosImportados, ...this.state.usuariosParaRecuperar]
              this.setState({usuariosImportados: todosLosUsuarios})


            console.log(resultado)
          }else{
            console.log('no se encontro')
          }
        }catch(error){
          console.log(error);
        }
 }


 async addData(textoEscrito){
  try{

    if(textoEscrito.length !== 0){
      this.state.textHandler.push(textoEscrito);
      this.setState({textHandler: textHandler})

      const masTexto = [...this.state.text, ...this.state.textHandler]
      this.setState({text: masTexto})

    }else{
      console.log('no se encontro')
    }
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
          return itemData.indexOf(textData) > -1

          // if(itemData.includes(textData)) return dato
          
        })

        this.setState({ usuariosImportados: filtrado})
      } 
      else {
        this.setState({
          usuariosImportados: this.state.contactosOriginales

      })

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


      async filtrarPorCiudadOPais(texto){
        if (texto.length !== 0) {

          
          var escrito = texto
          let usuariosImportados = this.state.usuariosImportados
          let filtrado = usuariosImportados.filter(dato => {
            if(
              dato.location.city.toUpperCase().includes(escrito.toUpperCase()) ||
              dato.location.country.toUpperCase().includes(escrito.toUpperCase())
            )
          return dato
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
         <View style={styles.itemContainer}> 
          
          {/* ESTE ES EL ORIGINAL: */}
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


    render() {

      const valoresParaRecuperar = this.state.usuariosParaRecuperar.map(item =>
        <Text key={item.login.uuid}
        style={styles.importTexto}>{item.name.first} {item.name.last}</Text>
        )

        return (

          <View style={styles.container}>

            {/* {valoresParaRecuperar} */}
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

                <Text style={styles.buscarText}>Ciudad/Pais:</Text>
                  <TextInput style={styles.buscarSquarePais} onChangeText={(escrito) => this.filtrarPorCiudadOPais(escrito)}>
                </TextInput> 
              </View>

              <View style={styles.listContainer}>
                
                { this.state.activity 
                  ?<ActivityIndicator 
                      color="blue"
                      size={60}
                      />
                  :<FlatList

                      data={this.state.usuariosImportados}
                      keyExtractor={this.keyExtractor}
                      renderItem={this.renderItem}
                      // numberColumns= {2}
                      ItemSeparatorComponent={this.separator}
                    />                           
                  }

                </View>

              

              <Animated.View style={styles.botonBackground, {
                left: this.position,
                transform: [
                  {rotateX: this.rotacion}
                ]
              }}>
                 <TouchableOpacity style={styles.botones} 
                 onPress={() => this.getData()}
                 onPressIn={this.flip}
                 >
                   <View><Text style={styles.recycleTexto} >OBTENER RESULTADOS</Text></View>
                  </TouchableOpacity>

             

                  <TouchableOpacity 
                    style={styles.botonesAbajo} 
                    onPress={() => this.getDatosParaRecuperar2()} 
                     >
                      {/* <View> */}
                        <Text style={styles.recycleTexto}>RECUPERAR TARJETAS BORRADAS</Text>
                        {/* </View> */}
                  </TouchableOpacity>

               </Animated.View> 

              <Modal 
                 visible={this.state.showModal}
                 transparent= {true}
                 animationType="slide" //slide o fade
                >
                 <View style={styles.modalContainer}> 
                    <View style={styles.modal}>
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
                          Direccion: {this.state.selectedItem && this.state.selectedItem.location.street.name + ' ' + this.state.selectedItem.location.street.number + ' ' + this.state.selectedItem.location.city + ' ' + this.state.selectedItem.location.country + ' ' + this.state.selectedItem.location.postcode}
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
                      <Text style={styles.texto}> {this.state.textHandler} </Text>
                      <TextInput style={styles.adicional}  onChangeText={text => this.setState({textHandler:text})}/>
                      {/* <TouchableOpacity style={styles.agregar} onPress={() => this.setState({text: this.state.textHandler})}> */}
                      <TouchableOpacity style={styles.agregar} onPress={() => this.addData(this.state.selectedItem)}>

                        <View>
                          <Text style={styles.agregarTexto}>AGREGAR</Text>
                        </View>
                      </TouchableOpacity>
      
                      <TouchableOpacity style={styles.borrar}
                      onPressIn={() => this.storeBorrarData2(this.state.selectedItem)}
                      onPress={() => this.setState({showModal: false})}>
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

               {/* <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#A9A9A9', height: 100}}>
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
                 
                 
               </View> */}

                
            
            </View>

        )
    }
 }
