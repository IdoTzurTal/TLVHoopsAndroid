import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/LoginScreen'
import AboutScreen from '../Screens/AboutScreen'
import ContactScreen from '../Screens/ContactScreen'

const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerStack

const styles = StyleSheet.create({})