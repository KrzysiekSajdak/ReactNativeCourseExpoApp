import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Todo = ({ title = "default" }) => {

    return (
        <View>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
    }
});

export default Todo;