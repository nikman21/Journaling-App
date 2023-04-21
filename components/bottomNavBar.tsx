import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const BottomNavBar = () => {
    const [showOptions, setShowOptions] = useState(false);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
    return (
      <View style={styles.bottomNavBar}>
        <TouchableOpacity style={styles.navButton}>
        <Icon name="home" size={30} color="#fff" />
        <Text style={{color:'#fff'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="compass" size={30} color="#fff" />
          <Text style={{color:'#fff'}}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerButton} onPress={toggleOptions}>
          <Icon name="plus" size={40} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="book" size={30} color="#fff" />
          <Text style={{color:'#fff'}}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Icon name="bar-chart" size={30} color="#fff" />
          <Text style={{color:'#fff'}}>Insights</Text>
        </TouchableOpacity>
        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Icon name="circle" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Icon name="" size={30} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
              <Icon name="circle" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    bottomNavBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 80,
      backgroundColor: '#000000',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    navButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      
      marginHorizontal: 10,
      backgroundColor: '#000000',

    },
    centerButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: '#fff',
      marginHorizontal: 20,
    },
    optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 80,
      left: 0,
      right: 0,
      height: 50,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    optionButton: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 25,
      marginHorizontal: 10,
      backgroundColor: 'blue',
    },
  });
export default BottomNavBar;  