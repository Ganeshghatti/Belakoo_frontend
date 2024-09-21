import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Landing from "./Screens/Landing";
import Login from "./Screens/Login";
import Campus from "./Screens/Campus";
import Subjects from "./Screens/Subjects";
import Chapters from "./Screens/Chapters";
import Content from "./Screens/Content";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Load resources here (fonts, data, etc.)
        
        // Any other initialization logic
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Campus"
            component={Campus}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Subjects"
            component={Subjects}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chapters"
            component={Chapters}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Content"
            component={Content}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </SafeAreaProvider>
  );
}
