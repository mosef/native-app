import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Title,
  Right
} from 'native-base';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [tipValue, setTipValue] = useState(0.2);
  const [isReady, setReady] = useState(false);
  let tip = 0.0;
  if (inputValue) {
    tip = parseFloat(inputValue) * tipValue;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
  }
  const customTip = customTip => {
    if (customTip) {
      let cutsomTipValue = parseFloat(customTip) / 100;
      setTipValue(cutsomTipValue);
    } else {
      setTipValue(0);
    }
  };
  React.useEffect(() => {
    const fetchFonts = async () => {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font
      });
      setReady(true);
    };
    fetchFonts();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Content padder>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          <Text>${tip}</Text>
          <TextInput
            style={styles.input}
            placeholder="$0.00"
            value={inputValue}
            keyboardType="numeric"
            onChangeText={text => setInputValue(text)}
          />
          <View style={styles.buttonGroup}>
            <Button title="10%" onPress={() => setTipValue(0.1)} />
            <Button title="20%" onPress={() => setTipValue(0.2)} />
            <Button title="25%" onPress={() => setTipValue(0.25)} />
            <TextInput
              style={styles.customTip}
              value={(tipValue * 100).toString()}
              placeholder="20%"
              keyboardType="numeric"
              onChangeText={customTipInput => customTip(customTipInput)}
            />
          </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  },
  customTip: {
    height: 40,
    width: '20%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  },
  buttonGroup: {
    flexDirection: 'row'
  }
});
