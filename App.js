// 2:35:14
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import Todo from './Todo'

const App = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: 'Freelance job with Qazi',
      amount: 499.99
    },
    {
      description: 'Freelance job with Qazi',
      amount: 499.99
    }
  ]);

  const addGig = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount
    }]);
    setDescription('');
    setAmount('')
  }

  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0))
  }, [gigs])

  return (
    <SafeAreaView style={styles.mainStyle}>
      <View>
        <Text style={styles.titleText}>Todo App</Text>
      </View>
      <Text>Total income: ${total}</Text>
      <TextInput
        value={description}
        keyboardType='default'
        placeholder='Enter a description'
        onChangeText={text => setDescription(text)}
        style={styles.todoInput} />
      <TextInput
        value={amount}
        keyboardType='numeric'
        placeholder='Enter the amount you made'
        onChangeText={text => setAmount(text)}
        style={styles.todoInput} />
      <Button
        title='Add gig'
        disabled={!amount || !description}
        onPress={addGig} />

      {gigs.map(gig => (
        <View>
          <Text>{gig.description}</Text>
          <Text>{gig.amount}</Text>
        </View>

      ))}
      {/* <Button
        title='ADD TODO'
        style={styles.todoButton}
        onPress={addTodo} /> */}
    </SafeAreaView>

  );
}

export default App;

const styles = StyleSheet.create({
  mainStyle: {
    margin: 15
  },
  titleText: {
    fontSize: 30,
    paddingBottom: 15
  },
  todoInput: {
    fontSize: 20,
    height: 30,
    margin: 10,
    padding: 10,
    borderRadius: 10,
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
