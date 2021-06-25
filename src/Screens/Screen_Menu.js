import React, {Component} from 'react';
import {getData} from '../api/RandomUsers';
import {styles} from '../styles/styles';

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
     pos = new Animated.Value(0);
     hang = this.pos.interpolate({
       inputRange: [0, 1],
       outputRange: [0, 25]
     })
 
     slide = () => {
       Animated.parallel([
        Animated.timing(this.position, {
          toValue: 1,
          duration: 4000,
          friction: 3,
          easing: Easing.elastic(3),
          useNativeDriver: false
         }),
         Animated.timing(this.pos, {
           toValue: 1,
           duration: 4000,
           easing: Easing.elastic(3),
           useNativeDriver: false
         })
       ]).start()
     }

     componentDidMount(){
       this.slide()
     }

    render() {
        return (
          <View style={styles.containerMenu}>
            <Animated.View style={styles.headerBorder, {
                  right: 25,
                  transform: [
                    {rotateZ: this.rotacion},
                    {translateX: this.hang}
                  ]}}>
              <Text style={styles.menuHeaderText}> MENU </Text>
            </Animated.View>

              
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
