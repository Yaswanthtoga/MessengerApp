import React from 'react'
import ChatScreen from '../screens/ChatScreen.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator.js';
import ContactScreen from '../screens/ContactScreen.js';


const Navigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Main' screenOptions={{headerStyle:{backgroundColor:'whitesmoke'}}}>
        <Stack.Screen
            name="Main"
            component={MainTabNavigator}
            options={{ headerShown: false }}
        />
        <Stack.Screen name='Chat' component={ChatScreen} />
        <Stack.Screen name='Contact' component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator