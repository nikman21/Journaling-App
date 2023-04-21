import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Home />
  );
};

export default App;


