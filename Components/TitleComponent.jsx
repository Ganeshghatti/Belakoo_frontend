import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleComponent = ({ titleText }) => {
  return <Text style={styles.title}>{titleText}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'GothamBold', // Ensure the font name matches exactly
  },
});

export default TitleComponent;
