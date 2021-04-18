import React from 'react';
// import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainTabNavigatorParamsList} from '../types';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import LoginScreen from '../screens/auth/login';

const MainStack = createBottomTabNavigator<MainTabNavigatorParamsList>();

const MainNavigator: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen name="Home" component={LoginScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
