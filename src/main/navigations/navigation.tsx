import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/unauthenticated/login';
import SignUpScreen from '../screens/unauthenticated/signup';
import NotesScreen from '../screens/authenticated/notelist';
import CreateNotesScreen from '../screens/authenticated/createnotes';

const Navigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={NotesScreen} />
        <Stack.Screen name="createNoteScreen" component={CreateNotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
