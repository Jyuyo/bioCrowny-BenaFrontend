import { View, Text } from 'react-native';
import React from 'react';
import Account from '../../screens/Account';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from '../Auth/LoginForm';
import Auth from '../../screens/Auth';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="account" component={Account} options={{title: "Account", headerShown: false }} />
      {/* <Stack.Screen name="logout" component={Auth} options={{title: "", headerShown: false }} /> */}
    </Stack.Navigator>
  )
}