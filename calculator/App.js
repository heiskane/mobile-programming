import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function App() {

  const flatListRef = React.useRef()

  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');

  const [history, setHistory] = React.useState([]);

  const [result, setResult] = React.useState('');

  const add = (num1, num2) => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    setResult(num1 + num2);
    setHistory([...history, {key: num1 + " + " + num2 + " = " + (num1+num2)} ])
    flatListRef.current.scrollToOffset({ animated: false, offset: 999999999999 });
  }

  const subtract = (num1, num2) => {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    setResult(num1 - num2);
    setHistory([...history, {key: num1 + " - " + num2 + " = " + (num1-num2)} ])
    flatListRef.current.scrollToOffset({ animated: false, offset: 999999999999 });
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
      </View>

      <View style={styles.result}>
        {result ? <Text>Result: {result}</Text> : null}
        <Text>History:</Text>
        <Text>{history.length}</Text>
        <FlatList 
          ref={flatListRef}
          onScrollToIndexFailed={() => {}}
          data={history}
          inverted
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
            <Text>{item.key}</Text>
          } />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    //alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 350
  }
});
