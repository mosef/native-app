import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Container, Content } from 'native-base';
import Head from './ui/Head';
import Values from './ui/Values';

export default function App() {
  const [isReady, setReady] = useState(false);
  const [tipValue, setTipValue] = useState(0.2);
  const [inputValue, setInputValue] = useState('');

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
      <Head />
      <View style={styles.container}>
        <Content style={{ width: '100%' }}>
          <Values tipPercent={tipValue} bill={inputValue} />
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholder="$0.00"
              value={inputValue}
              keyboardType="numeric"
              onChangeText={text => setInputValue(text)}
              underlineColorAndroid="#FFF"
              placeholderTextColor="#FFF"
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
                underlineColorAndroid="#FFF"
                placeholderTextColor="#FFF"
              />
            </View>
          </View>
        </Content>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
    color: '#FFF'
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
    color: '#FFF'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
