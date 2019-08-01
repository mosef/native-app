import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  hello: {
    backgroundColor: 'black'
  },
  helloText: {
    fontSize: 24,
    color: 'white'
  }
});
const Hello = () => {
  return (
    <View style={styles.hello}>
      <Text style={styles.helloText}>Hello IOS</Text>
    </View>
  );
};

export default Hello;
