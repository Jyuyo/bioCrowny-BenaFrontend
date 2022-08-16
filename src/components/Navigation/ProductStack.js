
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import colors from '../../styles/colors';
import SingleProduct from '../../SingleProduct';

const Stack = createStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator screenOptions={{headerTintColor: colors.fontLight, headerStyle: {backgroundColor: colors.bgBlack}, cardStyle: {backgroundColor: colors.bgLight}}}>
        <Stack.Screen name="home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="singleProduct" component={SingleProduct} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}