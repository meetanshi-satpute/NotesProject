import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from '../screens/authenticated/notelist';
import CreateNotesScreen from '../screens/authenticated/createnotes';
import SettingScreen from '../screens/authenticated/setting';

const MainRootStackNavigation = () => {
  const MainStack = createNativeStackNavigator();
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={NotesScreen} />
      <MainStack.Screen name="createNoteScreen" component={CreateNotesScreen} />
      <MainStack.Screen name="settingScreen" component={SettingScreen} />
    </MainStack.Navigator>
  );
};

export default MainRootStackNavigation;
