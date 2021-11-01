import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Alert } from 'react-native';

export default function Calculator({navigation}) {


  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');

  const [history, setHistory] = React.useState([]);

  const [result, setResult] = React.useState('');

  const add = (num1, num2) => {
    let result = parseFloat(num1) + parseFloat(num2)
    setResult(result);
    setHistory([{key: num1 + " + " + num2 + " = " + result}, ...history ])
  }

  const subtract = (num1, num2) => {
    let result = parseFloat(num1) - parseFloat(num2)
    setResult(result);
    setHistory([{key: num1 + " - " + num2 + " = " + result}, ...history ])
  }


  return (

    <View style={styles.container}>

      <View style={styles.inputs}>
        <Text>Calculator</Text>
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={num1}
          onChangeText={setNum1} />
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          value={num2}
          onChangeText={setNum2} />
      </View>

      <View style={styles.buttons}>
        <Button onPress={() => add(num1, num2)} title="+" />
        <Button onPress={() => subtract(num1, num2)} title="-" />
        <Button
          title="History"
          onPress={() => navigation.navigate('History', {history})} />
      </View>

      <View style={styles.result}>
        {result ? <Text>Result: {result}</Text> : null}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
