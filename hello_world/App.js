import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, FlatList } from 'react-native';

export default function App() {

  const [msg, setMsg] = React.useState('');
  const [data, setData] = React.useState([]);

  const buttonPressed = () => {
    Alert.alert("Your message", msg);
    setData([...data, {key: msg}]);
    setMsg('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Hello World!</Text>
        <TextInput
          style={{
            width: 200,
            borderColor: 'gray',
            borderWidth: 1
          }}
          value={msg} onChangeText={setMsg} />
        <Button onPress={buttonPressed} title="button" />
      </View>
      <View style={styles.list_container}>
        <FlatList data={data}
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
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list_container: {
    flex: 3
  }
});
