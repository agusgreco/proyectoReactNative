import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {styles} from './styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage'
import {NavigationContainer} from '@react-navigation/native';
import {Screen_Import} from './Screens/Screen_Import'
import {Screen_Flatlist} from './Screens/Screen_FlatList'
import {Screen_Menu} from './Screens/Screen_Menu'
import {Screen_Recycle} from './Screens/Screen_Recycle'
import {Screen_AcercaDe} from './Screens/Screen_AcercaDe'
import {createDrawerNavigator} from '@react-navigation/drawer'

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
          }}
          >
        <Drawer.Screen name='Screen Menu' component={Screen_Menu} options={{title: 'MENU'}}/>
        <Drawer.Screen name='Screen Import' component={Screen_Import} options={{title: 'IMPORTAR'}}/>
        <Drawer.Screen name='Screen Flatlist' component={Screen_Flatlist} options={{title: 'IMPORTADAS'}}/>
        <Drawer.Screen name='Screen Recycle' component={Screen_Recycle} options={{title: 'PAPELERA'}}/>
        <Drawer.Screen name='Screen AcercaDe' component={Screen_AcercaDe} options={{title: 'ACERCA DE'}}/>

      </Drawer.Navigator>
    </NavigationContainer> 
    );
  }
}
