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
import { TextInput } from 'react-native-gesture-handler';

 export class Screen_BuscarYModificar extends Component {
     constructor(){
         super();
         this.state = {
            usuariosImportados: [],
            value: "",
            text: "",
            textHandler:"",
         }
     }

    async getDataFromApi() {
        this.setState({activity: true});
        let usuarios = await getData();
        console.log(usuarios)
        this.setState({usuariosImportados: usuarios, activity: false})
    }

    renderItem = ({item}) => {
        return(
         <View style={styles.container}> 
            <TouchableOpacity onPress={ () => this.showModal(item)}> 
            <View style={styles.card}> 
                <Image style={styles.image} source={{uri: item.picture.thumbnail}}/> 
                <Text style={styles.texto}> {item.name.last}, {item.name.first} </Text>
{/*                 
                <Text style={styles.texto}> {this.state.textHandler} </Text>
                <Text style={styles.texto}> Agregar informacion: {this.state.text} </Text>
                <TextInput secureTextEntry={true} onChangeText={text => this.setState({textHandler:text})}/>
                <TouchableWithoutFeedback onPress={() => this.setState({text: this.state.textHandler})}>
                    <View>
                       <Text>Agregar</Text>
                    </View>
                </TouchableWithoutFeedback> */}
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

    
filtrarPorNombre(evento){
    if (evento.target.value.length !== 0) {
      var escrito = evento.target.value
      let usuariosImportados = this.state.usuariosImportados
      let filtrado = usuariosImportados.filter((dato) => {
        let itemData = dato.name.first.toUpperCase()
        let textData = escrito.toUpperCase()
        return itemData.indexOf(textData) >= 0
      })
      this.setState({ usuariosImportados: filtrado})
    } else {
      fetch("https://randomuser.me/api/?results=12")
      .then(result => result.json())
      .then(data => {
        this.setState({usuariosImportados: data.results})
        console.log(data)
      })
    }
  }

    keyExtractor = (item, idx) => idx.toString()

    separator = () => <View style={styles.separator}/>


    render() {
        const valores = this.state.usuariosImportados.map(item =>
            <Text key={item.login.uuid}
            style={{fontSize:22}}>{item.name.first} {item.name.last}</Text>
            )
        return (

            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text>Buscar y Modificar:</Text>
                </View>
            {valores}

            {/* <form className="acomodar enblanco">
                    <Text>Nombre:</Text>
                    <input type="text" onChange={(escrito) => this.filtrarPorNombre(escrito)} value={this.state.escrito} className="input" id="header-search" placeholder="FILTRAR"  />
                </form>
                 */}

                <TextInput onChangeText={(escrito) => this.filtrarPorNombre(escrito)} value={this.state.escrito}>
                     <Text>Nombre:</Text>

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

                <Button title="Obtener tarjetas importadas" onPress={() => this.getDataFromApi()}/>

            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Import')}
            >IMPORTAR TARJETAS</Text>
            <Text style={styles.texto}
              onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
            >TARJETAS IMPORTADAS</Text> 
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
