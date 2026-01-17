import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import NotesScreen from '../screens/authenticated/notelist'
import CreateNotesScreen from '../screens/authenticated/createnotes'

const MainRootStackNavigation = () => {
    const MainStack=createNativeStackNavigator()
  return (
    <MainStack.Navigator>
        <MainStack.Screen name='Home' component={NotesScreen}/>
        <MainStack.Screen name='createNoteScreen' component={CreateNotesScreen}/>
    </MainStack.Navigator>
  )
}

export default MainRootStackNavigation

const styles = StyleSheet.create({})