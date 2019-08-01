import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight
      }
    })
  }
});

const Head = () => {
  return (
    <View>
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    </View>
  );
};

export default Head;
