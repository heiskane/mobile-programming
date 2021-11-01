import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default function History({ route, navigation }) {

  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text>History:</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          <Text>{item.key}</Text>
        } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});