import React, {Component} from 'react';
import {styles} from '../styles/styles';

// import {ModalInfo} from '../Components/ModalInfo'
import { 
    View,
    Text,
    Modal, 

} from 'react-native';

 export class Screen_AcercaDe extends Component {
     constructor(){
         super();
         this.state = {
         }
     }



    render() {

        return (

            <View style={styles.container}>
                <View style={styles.headerBorder}>
                    <Text>ACERCA DE</Text>
                </View>

                    <Text>Agustina Greco</Text>
            
                    <Text>Ema Juarez</Text>


                <View >
                <Text style={styles.texto}
                  onPress={ () => this.props.navigation.goBack()}
                >GO BACK</Text>
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


            </View>
        )
    }
 }
