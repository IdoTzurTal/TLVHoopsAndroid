import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from '../Screens/LoginScreen'
import AboutScreen from '../Screens/AboutScreen'
import ContactScreen from '../Screens/ContactScreen'

const NativeStack = () => {
    const ScreenStack = createNativeStackNavigator();
    return (
        <ScreenStack.Navigator>
            <ScreenStack.Screen name="Log In" component={LoginScreen} />
            <ScreenStack.Screen name="About" component={AboutScreen} />
            <ScreenStack.Screen name="Contact" component={ContactScreen} />
        </ScreenStack.Navigator>
    )
}

export default NativeStack

const styles = StyleSheet.create({})