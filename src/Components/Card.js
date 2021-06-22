import React, {Component} from 'react';
import {getData} from '../api/RandomUsers'
import {styles} from '../styles/styles';
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
            // toValue: 1
        }
    }
 
    rotation = new Animated.Value(0);

    flip = () => {
        Animated.timing(this.rotation, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }).start()
    }

    render() {

        const rotA = this.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['0deg', '180deg']
        })
        const rotB = this.rotation.interpolate({
            inputRange: [0,1],
            outputRange: ['180deg', '0deg']
        })

        return (
            // <TouchableOpacity style={{flex: 1}} onPress={this.flip}>
            <View > 
                <Animated.View style={styles.card, { 
                    backfaceVisibility: 'true',
                    transform: [
                    {rotateY: this.rotA}
                    ]
                }}> 
                    <Image style={styles.imageModal} source={{uri: this.props.value.picture.large}}/> 
                    <Text style={styles.itemText}> 
                        {this.props.value.name.last}, {this.props.value.name.first} 
                    </Text>
                    <Text style={styles.itemText}> 
                        ({this.props.value.dob.age} years old)
                    </Text>
                <TouchableWithoutFeedback style={{flex: 1}} onPress={this.flip}></TouchableWithoutFeedback>
                </Animated.View>

                <Animated.View style={styles.card, { 
                    backfaceVisibility: 'true',
                    position: 'absolute',
                    transform: [
                    {rotateY: this.rotB}
                    ]
                }}> 
                    <Image style={styles.imageModal} source={{uri: this.props.value.picture.large}}/> 
                    <Text style={styles.itemText}> 
                        {this.props.value.name.last}, {this.props.value.name.first} 
                    </Text>
                    <Text style={styles.itemText}> 
                          Email: {this.props.value.email}
                      </Text>
                      <Text style={styles.itemText}> 
                          Age: {this.props.value.dob.age}
                      </Text>
                      <Text style={styles.itemText}> 
                          Direccion: {this.props.value.location.street.name + ' ' + this.props.value.location.street.number + ' ' + this.props.value.location.city + ' ' + this.props.value.location.state + ' ' + this.props.value.location.postcode}
                      </Text>
                      <Text style={styles.itemText}> 
                          Telefono: {this.props.value.phone}
                      </Text>
                      <Text style={styles.itemText}> 
                          Fecha de registro: {this.props.value.registered.date}
                      </Text>
                <TouchableWithoutFeedback style={{flex: 1}} onPress={this.flip}></TouchableWithoutFeedback>
                </Animated.View>
            </View>
            // </TouchableOpacity>
        )
    }
 }

 export {Card}