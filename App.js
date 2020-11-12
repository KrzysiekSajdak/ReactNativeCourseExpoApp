import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import Todo from './Todo'

const App = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);


  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput('');
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titleText}>Todo App</Text>
      </View>
      <ScrollView style={styles.todoList}>
        {todos.map(todo => (<Todo title={todo}></Todo>))}
      </ScrollView>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        style={styles.todoInput} />
      <Button
        title='ADD TODO'
        style={styles.todoButton}
        onPress={addTodo} />
    </SafeAreaView>

  );
}

export default App;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 40,
  },
  todoInput: {
    fontSize: 20,
    height: 40,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black'
  },
  todoList: {
    height: 240,
    margin: 10
  },
  todoButton: {
    padding: 10,
  }
});
