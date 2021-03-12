import React from 'react';
import {CryptoDetail, Transaction, Home} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
      <Stack.Screen name="Transaction" component={Transaction} />
    </Stack.Navigator>
  );
};

export default StackNav;
