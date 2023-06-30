import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, Keyboard, TouchableWithoutFeedback, View, TextInput} from 'react-native';

class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder='Title'
        placeholderTextColor='#b2b2b2'
        style={styles.title}
        multiline
        />

        <TextInput placeholder='Begin Writing...'
        placeholderTextColor='#b2b2b2'
        keyboardType = 'default'
        style={styles.text}
        multiline
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
    //fontSize: 200
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#b2b2b2',
    marginTop: 50,
    marginBottom: 10,
    //height:50,
    width:'97%',
    borderBottomWidth:1/2,
    borderLeftWidth:1/2,
    padding:10,
  },
  text: {
    fontSize: 20,
    color: '#b2b2b2',
    marginTop: 20,
    marginBottom: 10,
    width:'97%',
    borderBottomWidth:1/2,
    borderLeftWidth:1/2,
    padding:10,
  }
});

export default App;
