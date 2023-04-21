import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerNav = () => {
  return (
    <View style={styles.container}>
      <View style={styles.streakBox}>
        <Text style={styles.streakLabel}>Streak: 7</Text>
        <Text style={styles.entryLabel}>Journal Entries Today: 2</Text>
        <Text style={styles.weeklyLabel}>Journal Entries This Week: 10</Text>
      </View>
      <TouchableOpacity style={styles.promptBox}>
        <Text style={styles.promptLabel}>Daily Prompt:</Text>
        <Text style={styles.promptValue}>What are you grateful for today?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.journalBox}>
        <Text style={styles.journalLabel}>My Journals</Text>
        <Text style={styles.journalLabel}>+ new journal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.chatBox}>
        <Text style={styles.chatLabel}>Chatbot</Text>
      </TouchableOpacity>
      <View style={styles.bottomBox}>
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsLabel}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trashButton}>
          <Text style={styles.trashLabel}>Trash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#000',
    width: '50%',
    marginTop: '10%',
    height:'80%',
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 25,
    
    
  },
  streakBox: {
    backgroundColor: 'fff',
    borderRadius: 10,
    paddingVertical:15,
    width: '90%',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  streakLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  entryLabel: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 5,
  },
  weeklyLabel: {
    fontSize: 14,
    color: '#666666',
  },
  promptBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  promptLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  promptValue: {
    fontSize: 14,
    color: '#666666',
  },
  journalBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  journalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  chatBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  chatLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  bottomBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    },
    settingsButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    },
    settingsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    },
    trashButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    },
    trashLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    },
    });
    
    export default DrawerNav;








