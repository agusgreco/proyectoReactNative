import React, {Component} from 'react';
import {getData} from '../api/RandomUsers'
import {styles} from '../styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    View,
    Text,
    Image,
    ActivityIndicator, 
    FlatList, 
    TouchableOpacity, 
    Button,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class Card extends Component {

    constructor(){
        super();
        this.state = {
            usuariosImportados: [],
        }
    }

    async getData(){
        try{
          const resultado = await AsyncStorage.getItem('Usuarios');
          if(resultado !== null){
            this.setState({usuariosImportados: JSON.parse(resultado)});
          }else{
            console.log('no encontre el key')
          }
        }catch(error){
          console.log(error);
        }
    }

    componentDidMount(){
        this.flip
    }

    keyExtractor = (item, index) => item.login.uuid;
 
    rotation = new Animated.Value(0);
    rotVal = this.rotation.interpolate({
        inputRange: [0,1],
        outputRange: ['0deg', '180deg']
    })
    rotMasVal = this.rotation.interpolate({
        inputRange: [0,1],
        outputRange: ['180deg', '0deg']
    })

    flip = () => {
        Animated.timing(this.rotation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start()
    }

    render() {

        const valores = this.state.usuariosImportados.map(item =>  
            <Animated.View style={styles.card, { 
                backfaceVisibility: 'true',
                position: this.position,
                // left: this.position,
                transform: [
                    {rotateY: this.rotVal}
                ]
            }}>
                {/* <TouchableWithoutFeedback onPress={this.flip}> */}
                <Image style={styles.imageModal} source={{uri: item.picture.large}}/> 
                <Text style={styles.itemText}> 
                    {item.name.last}, {item.name.first} 
                </Text>
                <Text style={styles.itemText}> 
                    ({item.dob.age} years old)
                </Text>
                {/* </TouchableWithoutFeedback>        */}
            </Animated.View>         
                 
        )
        
        const masValores = this.state.usuariosImportados.map(item => 
            <Animated.View style={styles.card, { 
                backfaceVisibility: 'true',
                position: this.position, // 'absolute',
                // left: this.position,
                transform: [
                    {rotateY: this.rotMasVal}
                ]
            }}>
                {/* <TouchableWithoutFeedback onPress={this.flip}> */}
                <Text style={styles.itemText}> 
                    {item.name.last}, {item.name.first} 
                </Text>
                <Text style={styles.itemText}> 
                    Email: {item.email}
                </Text>
                <Text style={styles.itemText}> 
                    Age: {item.dob.age}
                </Text>
                <Text style={styles.itemText}> 
                    Direccion: {item.location.street.name + ' ' + item.location.street.number + ' ' + item.location.city + ' ' + item.location.state + ' ' + item.location.postcode}
                </Text>
                <Text style={styles.itemText}> 
                    Telefono: {item.phone}
                </Text>
                <Text style={styles.itemText}> 
                    Fecha de registro: {item.registered.date}
                </Text>
            {/* </TouchableWithoutFeedback> */}
            </Animated.View>
            
        )
                
            // const rotA = this.rotation.interpolate({
            //     inputRange: [0,1],
            //     outputRange: ['0deg', '180deg']
            // })
            // const rotB = this.rotation.interpolate({
            //     inputRange: [0,1],
            //     outputRange: ['180deg', '0deg']
            // })

        return (
            // <TouchableOpacity style={{flex: 1}} onPress={this.flip}>
            <View > 
                {/* <Animated.View style={styles.card, { 
                    backfaceVisibility: 'true',
                    transform: [
                    {rotateY: this.rotA}
                    ]
                }}>  */}
                
                {valores}


                    {/* <Image style={styles.imageModal} source={{uri: this.props.value.picture.large}}/> 
                    <Text style={styles.itemText}> 
                        {item.name.last}, {item.name.first} 
                    </Text>
                    <Text style={styles.itemText}> 
                        ({item.dob.age} years old)
                    </Text> */}

                {/* <TouchableWithoutFeedback style={{flex: 1}} onPress={this.flip}></TouchableWithoutFeedback> */}

                {/* </Animated.View> */}

                {/* <Animated.View style={styles.card, { 
                    backfaceVisibility: 'true',
                    position: 'absolute',
                    transform: [
                    {rotateY: this.rotB}
                    ]
                }}>  */}

                
                {masValores}


                    {/* <Image style={styles.imageModal} source={{uri: this.props.value.picture.large}}/> 
                    <Text style={styles.itemText}> 
                        {item.name.last}, {item.name.first} 
                    </Text>
                    <Text style={styles.itemText}> 
                          Email: {item.email}
                      </Text>
                      <Text style={styles.itemText}> 
                          Age: {item.dob.age}
                      </Text>
                      <Text style={styles.itemText}> 
                          Direccion: {item.location.street.name + ' ' + item.location.street.number + ' ' + item.location.city + ' ' + item.location.state + ' ' + item.location.postcode}
                      </Text>
                      <Text style={styles.itemText}> 
                          Telefono: {item.phone}
                      </Text>
                      <Text style={styles.itemText}> 
                          Fecha de registro: {item.registered.date}
                      </Text> */}

                {/* <TouchableWithoutFeedback style={{flex: 1}} onPress={this.flip}></TouchableWithoutFeedback> */}

                {/* </Animated.View> */}
            </View>
            // </TouchableOpacity>
        )
    }
 }

 export {Card}