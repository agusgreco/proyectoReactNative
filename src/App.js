import 'react-native-gesture-handler';
import React, {Component} from 'react';
// import {
//   Text,
//   StyleSheet,
//   View,
//   Button,
//   TouchableOpacity,
//   TextInput,
//   TouchableWithoutFeedback,
//   ScrollView
// } from 'react-native';
import {styles} from './styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage'
// import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {Screen_Import} from './Screens/Screen_Import'
import {Screen_ViewImportedCards} from './Screens/Screen_ViewImportedCards'
import {Screen_Flatlist} from './Screens/Screen_FlatList'
import {createDrawerNavigator} from '@react-navigation/drawer'

// const Stack= createStackNavigator();
const Drawer= createDrawerNavigator();


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contador: 0,
      nombre: "",
      text: "",
      textHandler: "",
      apellido: "",
      edad: "",
      // datos: [],
      datos: '',
    }
  }


  render(){

    const {datos} = this.state

    return (
      // <NavigationContainer>
      //   <Stack.Navigator 
      //   //   screenOptions={{
      //   //   headerStyle:{backgroundColor:'black'}
      //   //   headerTintColor: 'white'
      //   // }}
      //   //no me anda!! ayuda
      //   >
      //     <Stack.Screen name='Screen Import' component={Screen_Import} options={{title: 'Import'}}/>
      //     <Stack.Screen name='Screen View Imported Cards' component={Screen_ViewImportedCards} options={{title: 'Imported Cards'}}/>
      //     {/* <Stack.Screen name="Screen View Imported Cards" component={Screen_ViewImportedCards} initialParams={{valor:0}}/> */}
      //     <Stack.Screen name='Screen Flatlist' component={Screen_FlatList}/>
      //   </Stack.Navigator>
      // </NavigationContainer>
 <NavigationContainer>
<Drawer.Navigator initialRouteName='Screen Import' drawerPosition='left' drawerType='slide' overlayColor='grey'>
  <Drawer.Screen name='Screen Import' component={Screen_Import} options={{title: 'Import'}}/>
  <Drawer.Screen name='Screen View Imported Cards' component={Screen_ViewImportedCards} options={{title: 'Imported Cards'}}/>
  {/* <Drawer.Screen name="Screen View Imported Cards" component={Screen_ViewImportedCards} initialParams={{valor:0}}/> */}
  <Drawer.Screen name='Screen Flatlist' component={Screen_Flatlist}/>
</Drawer.Navigator>
</NavigationContainer> 
   


    );
  }
}

  // componentDidMount(){
  //         // this.getData();
  //   fetch("https://randomuser.me/api/?results=9")
  //   .then(result => result.json())
  //   .then(data => {
  //     this.setState({datos: data.results})
  //     console.log(data)
  //     console.log(data.results[0].location.postcode)
  //   })
  //   // cada contacto tener un boton de guardar, y que cuando lo toques llames a storeData, etc 

  // }



  // async storeData(key, value){
  //   //setStringStorage
  //   try{
  //     await AsyncStorage.setItem(key, value)
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  // async getData(){
  //   //getStringStorage
  //   try{
  //     const item = await AsyncStorage.getItem('');
  //     if(item !== null){
  //       this.setState({datos: item});
  //     }else{
  //       console.log('no encontre el key')
  //     }
  //   }catch(error){
  //     console.log(error);
  //   }
  // }
