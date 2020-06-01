import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import App from './App';
import GameSetup from './GameSetup';

const Stack = createStackNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: '#fc9f9f',
  }
}

export default function MyStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={navOptions}
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen 
            name="App" 
            component={App} 
          />
          <Stack.Screen 
            name="Game Setup" 
            component={GameSetup} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }