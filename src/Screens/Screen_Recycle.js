import React, {Component} from 'react';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import {ModalInfo} from '../Components/ModalInfo'
import { 
    View,
    Text,
    Image,
    ActivityIndicator, 
    Modal, 
    Alert,
    FlatList, 
    TouchableOpacity, 
    Button,
    StyleSheet
} from 'react-native';

 export class Screen_Recycle extends Component {
     constructor(){
         super();
         this.state = {
            usuariosBorrados: [],
            usuarioBorrado: [],
            showModal: false,
            activity: false,


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
          const resultado = await AsyncStorage.getItem('UsuariosBorrados');
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


 async getUnDataBorrada(){
  try{
    const resultado = await AsyncStorage.getItem('UsuarioBorrado');
    if(resultado !== null){
      this.setState({usuarioBorrado: JSON.parse(resultado)});
      console.log(resultado)
    }else{
      console.log('no se encontro')
    }
  }catch(error){
    console.log(error);
  }
}

//  async getDataUnBorrada(){
//   try{
//     const resultado = await AsyncStorage.getItem('UsuarioBorrados');
//     if(resultado !== null){
//       this.setState({usuarioBorrado: JSON.parse(resultado)});
//       console.log(resultado)
//     }else{
//       console.log('no se encontro')
//     }
//   }catch(error){
//     console.log(error);
//   }
// }
    

showModal (item) {
  this.setState({selectedItem: item, showModal: true});
} 
keyExtractor = (item, index) => item.login.uuid;

    renderItem = ({item}) => {
        return(
         <View style={styles.container}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
            <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
                <Text style={styles.modalText}> {item.name.last}, {item.name.first} </Text>
            </View>
            </TouchableOpacity>

         </View>

        )
    }

    
    separator = () => <View style={styles.separator}/>


    render() {
        // const valores = this.state.usuariosImportados.map(item =>
        //     <Text key={item.login.uuid}
        //     style={{fontSize:22}}>{item.name.first} {item.name.last}</Text>
        //     )
        return (

            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text>PAPELERA DE RECICLAJE</Text>
                </View>
            {/* {valores} */}

                <View style={styles.listContainer}>
                    { this.state.activity 
                        ?<ActivityIndicator color="blue"
                            size={60}/>

                        :<FlatList
                            data={this.state.usuariosBorrados}
                            keyExtractor={this.keyExtractor}
                            renderItem={this.renderItem}
                            // numberColumns= {2}
                            ItemSeparatorComponent={this.separator}
                         />
                    }
                </View>

                <Button title="Obtener todas las tarjetas borradas" onPress={() => this.getDataBorrada()}/>
                <Button title="Obtener tarjetas borradas" onPress={() => this.getDataUnBorrada()}/>

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
                           <Text style={styles.closeButtonModal} 
                               onPress={() => this.setState({showModal: false})}> 
                               X 
                           </Text>
                       </View>
                   </View>
                </Modal>
              
                <TouchableOpacity onPress={() => this.setState({usuariosBorrados:[]})}>
                    <View><Text>BORRAR DEFINITIVAMENTE LOS DATOS</Text></View>
                </TouchableOpacity>
            
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Import')}
            >IMPORTAR TARJETAS</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
            >TARJETAS IMPORTADAS</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Menu')}
            >MENU</Text>
            
            </View>
        )
    }
 }
