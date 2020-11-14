// 2:35:14
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { LineChart } from "react-native-chart-kit";

import { Dimensions } from "react-native";


import Todo from './Todo'

const App = () => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [labels, setLabels] = useState([]);
  const [infoData, setInfoData] = useState(0);
  const [gigs, setGigs] = useState([
    {
      description: 'Freelance job with Qazi',
      amount: 499.99,
      timestamp: new Date()
    },
    {
      description: 'Freelance job with Qazi',
      amount: 99.99,
      timestamp: new Date()
    },
    {
      description: 'Freelance job with Qazi',
      amount: 199.99,
      timestamp: new Date()
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

  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <SafeAreaView style={styles.mainStyle}>

      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [
                  gigs[0].amount,
                  gigs[1].amount,
                  gigs[2].amount,
                  gigs[1].amount,
                  gigs[0].amount,
                  gigs[1].amount,
                  gigs[0].amount,
                ]
              }
            ]
          }}
          width={screenWidth} // from react-native
          height={220}
          yAxisLabel="£"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 1, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />
      </View>
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

      {
        gigs.map(gig => (
          <View>
            <Text>{gig.description}</Text>
            <Text>{gig.amount}</Text>
          </View>

        ))
      }
      {/* <Button
        title='ADD TODO'
        style={styles.todoButton}
        onPress={addTodo} /> */}
    </SafeAreaView >

  );
}

export default App;

const styles = StyleSheet.create({
  mainStyle: {
    margin: 0
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
  },
  chart: {
    width: 200
  }
});
