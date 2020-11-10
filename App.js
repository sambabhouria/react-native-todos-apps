import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('samba');
  const [age, setAge] = useState('30');
  const [account, setAccount] = useState('00');

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        placeholder="e.g. Samba Diallo"
        style={styles.input}
        onChangeText={(value) => setName(value)}
        multiline
        numberOfLines={4}
        maxLength={10}
      />

      <Text>Enter age:</Text>
      <TextInput
        placeholder="e.g. 99"
        style={styles.input}
        onChangeText={(value) => setAge(value)}
        maxLength={4}
      />

      <Text>Enter account number:</Text>
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 100}}
        placeholder="e.g. 1"
        onChangeText={(value) => setAccount(value)}
        maxLength={14}
        keyboardType="number-pad"
      />

      <Text style={styles.result}>
        name: {name}, age: {age} , account: {account}
      </Text>
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
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
