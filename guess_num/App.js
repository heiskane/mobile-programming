import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [goal, setGoal] = React.useState(Math.floor(Math.random() * 100) + 1);
  const [guessCount, setGuessCount] = React.useState(0);
  const [guess, setGuess] = React.useState('');
  const [msg, setMsg] = React.useState('Guess a number between 1-100');

  const try_guess = () => {
    let num = parseInt(guess)
    if (num < goal) {
      setMsg("Your guess " + guess + " is too low");
    } else if (num > goal) {
      setMsg("Your guess " + guess + " is too high");
    }

    setGuessCount(guessCount + 1);

    if (num == goal) {
      Alert.alert("You win", "You guessed the number in " + guessCount + " guesses")
      setGoal(Math.floor(Math.random() * 100) + 1);
      setGuessCount(0);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{msg}</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={guess}
        onChangeText={setGuess} />
      <Button onPress={try_guess} title="Make Guess"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  }
});
