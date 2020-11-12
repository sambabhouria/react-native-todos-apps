import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy lamborghini', key: '1'},
    {text: 'create my own apps', key: '2'},
    {text: 'play on the switch', key: '3'},
    {text: 'buy one billion dallar hous', key: '4'},
    {text: 'learn knew techno', key: '5'},
    {text: 'learner is my next todo', key: '6'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* add todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
