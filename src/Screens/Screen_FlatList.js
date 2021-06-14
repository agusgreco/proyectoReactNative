import React, {Component} from 'react';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';

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

 export class Screen_Flatlist extends Component {
     constructor(){
         super();
         this.state = {
            usuariosImportados: [],
             activity: false,
             showModal: false,
             selectedItem: null,
         }
     }

    componentDidMount() {
        // getData()
        // .then( (usuarios) => {
        //     this.setState({users: usuarios})
        // })
        // this.getDataFromApi()
    }

    async getDataFromApi() {
        this.setState({activity: true});
        let usuarios = await getData();
        console.log(usuarios)
        this.setState({usuariosImportados: usuarios, activity: false})
    }

    // async getDataFromApi() {
    //     this.setState({activity: true});
    //     let usuarios = await AsyncStorage.getItem('Usuarios');
    //     console.log(usuarios)
    //     this.setState({users: JSON.parse(usuarios)})
    // }

//     async getData(){
//         try{
//           const resultado = await AsyncStorage.getItem('Usuarios');
//           if(item !== null){
//             this.setState({usuariosImportados: JSON.parse(resultado)});
//           }else{
//             console.log('no encontre el key')
//           }
//         }catch(error){
//           console.log(error);
//         }
//  }

// filtrarPorNombre(evento){
//     if (evento.target.value.length !== 0) {
//       var escrito = evento.target.value
//       let usuariosImportados = this.state.usuariosImportados
//       let filtrado = usuariosImportados.filter((dato) => {
//         let itemData = dato.name.first.toUpperCase()
//         let textData = escrito.toUpperCase()
//         return itemData.indexOf(textData) >= 0
//       })
//       this.setState({ usuariosImportados: filtrado})
//     } else {
//       fetch("https://randomuser.me/api/?results=12")
//       .then(result => result.json())
//       .then(data => {
//         this.setState({usuariosImportados: data.results})
//         console.log(data)
//       })
//     }
//   }

    showModal (item) {
        this.setState({selectedItem: item, showModal: true});
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

            {/* <form className="acomodar enblanco">
                    Nombre: 
                    <input type="text" onChange={(escrito) => this.filtrarPorNombre(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR"  />
                </form> */}

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

                <Button title="Obtener resultados" onPress={() => this.getDataFromApi()}/>
              
              
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
              onPress={ () => this.props.navigation.navigate('Screen Menu')}
            >MENU</Text>
            
            </View>

        )
    }
 }
