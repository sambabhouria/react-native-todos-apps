import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
  const [students, setStudents] = useState([
    {name: 'samba', id: '1'},
    {name: 'alpha', id: '2'},
    {name: 'amadou', id: '3'},
    {name: 'abdoul', id: '4'},
    {name: 'ibrahim', id: '5'},
    {name: 'houssai', id: '6'},
    {name: 'hassan', id: '7'},
    {name: 'haroun', id: '8'},
    {name: 'keita', id: '9'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={students}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {students.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
