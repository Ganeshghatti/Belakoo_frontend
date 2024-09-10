// Breadcrumbs.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Breadcrumbs = ({ items, onNavigate }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={item.key}>
          <TouchableOpacity onPress={() => onNavigate(item.route)}>
            <Text style={styles.text}>{item.label}</Text>
          </TouchableOpacity>
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
    fontFamily: 'Gotham', // Ensure Gotham font is available
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, // 120% of font size 10px is 12px
    color: '#740000',
  },
  separator: {
    fontSize: 10,
    fontFamily: 'Gotham', // Ensure Gotham font is available
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12, // 120% of font size 10px is 12px
    color: '#740000',
  },
});

export default Breadcrumbs;
