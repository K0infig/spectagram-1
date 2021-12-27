import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import BottonTabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=> {
    return (
      
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={BottonTabNavigator} />
          <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
      
    );
  }


  export default DrawerNavigator;