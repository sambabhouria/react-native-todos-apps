import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    {name: 'samba', key: '1'},
    {name: 'alpha', key: '2'},
    {name: 'amadou', key: '3'},
    {name: 'abdoul', key: '4'},
    {name: 'ibrahim', key: '5'},
    {name: 'houssai', key: '6'},
    {name: 'hassan', key: '7'},
    {name: 'haroun', key: '8'},
    {name: 'keita', key: '9'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {students.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
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
