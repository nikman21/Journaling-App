import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BottomNavBar from '../components/bottomNavBar';
import Header from "../components/header";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  

  const goBackOneDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 1);
    setCurrentDate(newDate);
  };

  const goForwardOneDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 1);
    setCurrentDate(newDate);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.welcome}>Good Morning!</Text>
        <Text style={styles.date}>{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</Text>
      </View>
      <View style={styles.calendar}>
        <TouchableOpacity style={styles.dateButton} onPress={goBackOneDay}>
          <Text style={styles.dateButtonText}>{'<'}</Text>
        </TouchableOpacity>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - currentDate.getDay() + index);
          return (
            <View key={index} style={[styles.day, currentDate.getDay() === index && styles.currentDay]}>
              <Text style={{color:"#fff"}}>{day}</Text>
              <Text style={{color:"#fff"}}>{date.getDate()}</Text>
            </View>
          );
        })}
        <TouchableOpacity style={styles.dateButton} onPress={goForwardOneDay}>
          <Text style={styles.dateButtonText}>{'>'}</Text>
        </TouchableOpacity>
      </View>
        <Text style= {styles.text}>Chat</Text>
        <View style={styles.journalContainer}>
          <Text style={styles.journals}>Engage and Reflect</Text>
          <TouchableOpacity style={styles.journalButtons}>
            <Text style={{color:"#000"}}>Start chat</Text>
          </TouchableOpacity>
        </View>
        <Text style= {styles.text}>The daily prompt</Text>
        <View style={styles.journalContainer}>
          <Text style={styles.journals}>Dear Future Me</Text>
          <TouchableOpacity style={styles.journalButtons}>
            <Text style={{color:"#000"}}>Respond</Text>
          </TouchableOpacity>
        </View>
        <Text style= {styles.text}>Journal</Text>
        <View style={styles.journalContainer}>
          <Text style={styles.journals}>Hello..</Text>
          <TouchableOpacity style={styles.journalButtons}>
            <Text style={{color:"#000"}}>Add Entry</Text>
          </TouchableOpacity>
        </View>
        <Text style= {styles.text}>Dream Chronicles</Text>
        <View style={styles.journalContainer}>
          <Text style={styles.journals}>Did you dream?</Text>
          <TouchableOpacity style={styles.journalButtons}>
            <Text style={{color:"#000"}}>Record Dream</Text>
          </TouchableOpacity>
        
      </View>
      <BottomNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0,
    alignItems: 'center',
    marginRight: 30,
    color: '#fff',
  },
  welcome:{
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
  },
  text:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ccc',
    marginLeft: 20,
    marginTop: 7,
    marginBottom: 4,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
    color: '#ccc',
  },
  dateButton: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: '#000',
    height: 50,
    alignItems: 'center',
  },
  day: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  currentDay: {
    borderColor: 'white',
    borderWidth: 2,
  },
  journals: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '800',

  },
  journalContainer: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    height: 65,
    marginTop: 0,
    justifyContent: 'center',
    borderRadius: 25,
    padding: 15,
    width: '100%',
  },
  journalButtons: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "auto",
    
  },
});

export default Home;

