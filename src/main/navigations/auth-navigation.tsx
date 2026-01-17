import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/unauthenticated/login';
import SignUpScreen from '../screens/unauthenticated/signup';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="login" component={LoginScreen} />
    <Stack.Screen name="signup" component={SignUpScreen} />
  </Stack.Navigator>
);

export default AuthStack;
