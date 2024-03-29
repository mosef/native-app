import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#484848',
    width: '100%'
  },
  label: {
    color: '#FFF'
  },
  tip: {
    fontSize: 60,
    color: '#FFF',
    fontWeight: 'bold'
  },
  total: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  }
});

const Values = ({ tipPercent, bill }) => {
  let tip = 0.0;
  let total = 0.0;
  if (bill) {
    tip = parseFloat(bill) * tipPercent;
    total = parseFloat(bill) + tip;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
    total = (Math.round(total * 100) / 100).toFixed(2);
  }
  return (
    <View style={styles.values}>
      <Text style={styles.label}>Tip Amount</Text>
      <Text style={styles.tip}>${tip}</Text>
      <Text style={styles.label}>Total Bill</Text>
      <Text style={styles.total}>${total}</Text>
    </View>
  );
};

export default Values;
