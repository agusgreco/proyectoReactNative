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

 export class Screen_Menu extends Component {
     constructor(){
         super();
         this.state = {
         }
     }



    render() {

        return (

            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text>MENU</Text>
                </View>
            {/* {valores} */}

                <View >
                <Text style={styles.texto}
                  onPress={ () => this.props.navigation.navigate('Screen Import')}
                >IMPORTAR TARJETAS</Text>
                <Text style={styles.texto}
                  onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
                >TARJETAS IMPORTADAS</Text>
                <Text style={styles.texto}
                 onPress={ () => this.props.navigation.navigate('Screen BuscarYModificar')}
                >BUSCAR Y MODIFICAR</Text>
                <Text style={styles.texto}
                  onPress={ () => this.props.navigation.navigate('Screen Recycle')}
                >PAPELERA DE RECICLAJE</Text>
                <Text style={styles.texto}
                  onPress={ () => this.props.navigation.navigate('Screen AcercaDe')}
                >ACERCA DE</Text>
                </View>


            </View>
        )
    }
 }
