import React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';

const CustomSafeAreaView = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: 'transparent', // Make the background transparent
  },
});

export default CustomSafeAreaView;
