  
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './Tab'
import Drawer from './Drawer'

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{
              headerTitleAlign: 'center',
              title: 'MY HOME SCREEN',
              headerTintColor: 'red',
              headerTransparent: true,
            }}
          />
          <Stack.Screen name="Tab" component={Tab} />
          <Stack.Screen name="Drawer" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}