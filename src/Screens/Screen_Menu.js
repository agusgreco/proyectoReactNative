import React, {Component} from 'react';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';

// import {ModalInfo} from '../Components/ModalInfo'
import { 
    View,
    Text,
    Animated,
    Easing
} from 'react-native';

 export class Screen_Menu extends Component {
     constructor(){
         super();
         this.state = {
           
        }
      }


     position = new Animated.Value(0);
     
     rotacion = this.position.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
     })

     slide = () => {
       Animated.timing(this.position, {
        toValue: 1,
        duration: 4000,
        friction: 3,
        easing: Easing.elastic(3),
        useNativeDriver: false
       }).start()
     }

     componentDidMount(){
       this.slide()
     }

    render() {
        return (
          <View style={styles.containerMenu}>
            <Animated.View style={styles.headerBorder, {
                  left: this.position,
                  transform: [
                    {rotateZ: this.rotacion}
                  ]}}>
              <Text style={styles.menuHeaderText}> MENU </Text>
            </Animated.View>

                
              {/* {valores} */}

            <View style={{position: 'absolute', bottom: 0, width: '100%'}}>
                <Text style={styles.textoDeMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Import')}
                >IMPORTAR TARJETAS</Text>
                <Text style={styles.textoDeMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Flatlist')}
                >TARJETAS IMPORTADAS</Text>
                <Text style={styles.textoDeMenu}
                  onPress={ () => this.props.navigation.navigate('Screen Recycle')}
                >PAPELERA DE RECICLAJE</Text>
                <Text style={styles.textoDeMenu}
                  onPress={ () => this.props.navigation.navigate('Screen AcercaDe')}
                >ACERCA DE</Text>
             </View>


          </View>
        )
    }
 }
