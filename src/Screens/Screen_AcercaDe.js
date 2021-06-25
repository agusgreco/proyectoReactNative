import React, {Component} from 'react';
import {styles} from '../styles/styles';
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
                <View style={styles.headerBorderImport}>
                    <Text style={styles.headerTextAcercaDe}>ACERCA DE</Text>
                </View>

                <View style={styles.acercaDe}> 
                    <Text style={styles.acercaDeText} >Agustina Greco</Text>
          
                    <Text style={styles.acercaDeText} >Ema Juarez</Text>
                </View>

                <View style={styles.goBackView}>
                <Text style={styles.goBack}
                  onPress={ () => this.props.navigation.goBack()}
                >GO BACK</Text>
                {/* <Text style={styles.textoMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Import')}
                >IMPORTAR TARJETAS</Text>
                <Text style={styles.textoMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
                >TARJETAS IMPORTADAS</Text>
                <Text style={styles.textoMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Recycle')}
                >PAPELERA DE RECICLAJE</Text>
                <Text style={styles.textoMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Menu')}
                >MENU</Text> */}
                </View>


            </View>
        )
    }
 }
