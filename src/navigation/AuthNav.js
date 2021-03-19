import * as React from 'react';
import { View, Text, Button, Image, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {images, theme} from '../constants';

import SplashScreen from '../screens/SplashScreen';
import OnBoarding from '../screens/OnboardingScreen';
import SignInScreen from '../screens/SignInScreen';
import GetStartedScreen from '../screens/GetStartedScreen';

import SignUpScreen from '../screens/SignUpScreen'

import TabNav from './TabNav';



const {COLORS, FONTS, SIZES} = theme;

const Stack = createStackNavigator();

function AuthNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboard" component={OnBoarding} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={TabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNav;
