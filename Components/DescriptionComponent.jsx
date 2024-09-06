import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DescriptionComponent = ({ descriptionText }) => {
  return <Text style={styles.description}>{descriptionText}</Text>;
};

const styles = StyleSheet.create({
  description: {
    fontSize: 12,
    color: '#740000',
    fontFamily: 'GothamBold', // Ensure the font name matches exactly
  },
});

export default DescriptionComponent;
