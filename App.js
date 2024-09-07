import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './Screens/Landing';  // Ensure the path is correct
import Login from './Screens/Login';      // Ensure the path is correct

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  // Hide header for the login screen
        />
        <Stack.Screen 
          name="Landing" 
          component={Landing} 
          options={{ headerShown: false }}  // Hide header for the landing screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
