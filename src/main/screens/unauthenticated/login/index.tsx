import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../../../lib/supabase';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Enter email & password');
      return;
    }

    const { error ,data} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log("data=================",data);
    console.log("error=================",error);
    if (error) {
      Alert.alert('Login Failed', error.message);
      return;
    }

    navigation.replace('Home'); // Notes screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.circleSmall} />
        <View style={styles.circleBig} />

        <Text style={styles.title}>WelcomeBack</Text>

        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <TextInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <IconButton
          icon="arrow-right"
          size={28}
          onPress={login}
          iconColor="#FFF"
          style={styles.arrowBtn}
        />

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.footer}>Are you new user?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.register}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
