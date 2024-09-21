// Breadcrumbs.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Breadcrumbs = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <Link href={item.route} asChild>
            <Text style={styles.text}>{item.label}</Text>
          </Link>
          {index < items.length - 1 && <Text style={styles.separator}> {'>'} </Text>}
        </React.Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft:55
  },
  text: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, 
    color: '#740000',
    textTransform: 'uppercase',
  },
  separator: {
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, 
    color: '#740000',
  },
});

export default Breadcrumbs;
