import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {

  const [value, setValue] = useState(0);

  const addValue = () => {
    if (value < 10) {
      setValue(value => value + 1)
    } else if (value == 10) {
      setValue(value => value = 0)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Test</Text>
        <Text>{value}</Text>
        <Button title="Add" onPress={addValue}></Button>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 40,
  }
});

export default App;