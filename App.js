import { StyleSheet, View,Text } from 'react-native';
import React from 'react';
import Landing from './Screens/Landing'; // Ensure the path is correct

export default function App() {
  return (
    <View style={styles.container}>
      <Landing />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
