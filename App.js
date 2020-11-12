import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy lamborghini', key: '1'},
    {text: 'create my own apps', key: '2'},
    {text: 'play on the switch', key: '3'},
    {text: 'buy one billion dallar hous', key: '4'},
  ]);
  return (
    <View style={styles.container}>
      {/*Header*/}
      <View style={styles.content}>{/*Forms*/}</View>

      <View style={styles.list}>{/*Forms*/}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
