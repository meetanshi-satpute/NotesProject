import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import Navigator from './src/main/navigations/navigation';

const App = () => {
  return (
    <PaperProvider>
      <Navigator/>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
