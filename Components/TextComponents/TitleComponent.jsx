import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleComponent = ({ titleText }) => {
  return <Text style={styles.title}>{titleText}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#740000',
    textAlign: 'center',
  },
});

export default TitleComponent;
