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
    
    //  async getDataFromApi() {
    //     this.setState({activity: true});
    //     let usuarios = await getData();
    //     console.log(usuarios)
    //     this.setState({usuariosBorrados: usuarios, activity: false})
    // }

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

                <Button title="Obtener tarjetas borradas" onPress={() => this.getDataBorrada()}/>
              
              
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
