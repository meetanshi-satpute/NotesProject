import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { styles } from './styles';
import { supabase } from '../../../../lib/supabase';

const SignUpScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields required');
      return;
    }

    const { error,data } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("data=================",data);
    console.log("error=================",error);
    if (error) {
      Alert.alert('Signup Error', error.message);
      return;
    }

    Alert.alert('Success', 'Account created', [
      { text: 'OK', onPress: () => navigation.navigate('login') },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#DDE3F8" />

      <View style={styles.card}>
        <View style={styles.circleSmall} />
        <View style={styles.circleBig} />

        <Text style={styles.title}>Create{'\n'}Account</Text>

        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

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
          onPress={signUp}
          iconColor="#FFF"
          style={styles.arrowBtn}
        />

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.footer}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.signIn}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
