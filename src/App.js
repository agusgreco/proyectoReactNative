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
// import {Screen_ViewImportedCards} from './Screens/Screen_ViewImportedCards'
import {Screen_Flatlist} from './Screens/Screen_FlatList'
import {Screen_Menu} from './Screens/Screen_Menu'
import {Screen_Recycle} from './Screens/Screen_Recycle'
import {Screen_AcercaDe} from './Screens/Screen_AcercaDe'
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
    <Drawer.Navigator 
        initialRouteName='Screen Menu' 
        drawerPosition='left'
        drawerType='slide' 
        overlayColor='black'
        drawerStyle={{
               backgroundColor: "grey",
               width: 220
        }}
        drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: 'black',
        labelStyle: {fontSize: 15},
        // style: { }
        }}
        >
      <Drawer.Screen name='Screen Menu' component={Screen_Menu} options={{title: 'MENU'}}/>
      <Drawer.Screen name='Screen Import' component={Screen_Import} options={{title: 'IMPORTAR'}}/>
      {/* <Drawer.Screen name='Screen View Imported Cards' component={Screen_ViewImportedCards} options={{title: 'Screen_ViewImportedCards'}}/> */}
      {/* <Drawer.Screen name="Screen View Imported Cards" component={Screen_ViewImportedCards} initialParams={{valor:0}}/> */}
      <Drawer.Screen name='Screen Flatlist' component={Screen_Flatlist} options={{title: 'IMPORTADAS'}}/>
      <Drawer.Screen name='Screen Recycle' component={Screen_Recycle} options={{title: 'PAPELERA'}}/>
      <Drawer.Screen name='Screen AcercaDe' component={Screen_AcercaDe} options={{title: 'ACERCA DE'}}/>

    </Drawer.Navigator>
    </NavigationContainer> 


      // <NavigationContainer>
      //   <Drawer.Navigator initialRouteName="Screen_Menu"
      //     drawerPosition="left"
      //     drawerType="slide"
      //     overlayColor="grey"
      //     drawerStyle={{
      //       backgroundColor: "white",
      //       width: 250
      //     }}
      //     drawerContentOptions={{
      //       activeTintColor: "white",
      //       activeBackgroundColor: "blue",
      //       inactiveTintColor: 'black',
      //       itemStyle: {borderRadius: 100, borderWidth: 3},
      //       labelStyle: { fontWeight: 'bold', fontSize: 15},
      //       style: { }
      //     }}
      //   > 
      //     <Drawer.Screen name="Screen_Menu" component={Screen_Menu} options={{title: "Menu"}}/>
      //     <Drawer.Screen name="Screen_Import" component={Screen_Import} options={{title: "Importar", headerTintColor: 'red'}}/>
      //     <Drawer.Screen name="Screen_Flatlist" component={Screen_Flatlist} options={{title: "Tarjetas Importadas"}}/>
      //     <Drawer.Screen name='Screen_Recycle' component={Screen_Recycle} options={{title: 'Papelera de Reciclaje'}}/>
      //     <Drawer.Screen name="Screen_AcercaDe" componente={Screen_AcercaDe} options={{title: "Acerca de"}} />

      //   </Drawer.Navigator>
      // </NavigationContainer>
   


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
