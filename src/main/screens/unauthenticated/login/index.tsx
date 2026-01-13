import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput, IconButton, Button } from 'react-native-paper';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
  const goToSignup = () => {
    navigation.navigate('signup');
  };

  const gotoHomeScreen=()=>{
    navigation.navigate('Home')
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Decorative circles */}
        <View style={styles.circleSmall} />
        <View style={styles.circleBig} />

        {/* Title */}
        <Text style={styles.title}>WelcomeBack</Text>

        {/* Email */}
        <TextInput
          label="Email"
          mode="flat"
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          left={<TextInput.Icon icon="email-outline" />}
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          label="Password"
          mode="flat"
          secureTextEntry
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          left={<TextInput.Icon icon="lock-outline" />}
          style={styles.input}
        />

        {/* Arrow Button */}
        <IconButton
          icon="arrow-right"
          size={28}
          onPress={gotoHomeScreen}
          iconColor="#FFF"
          style={styles.arrowBtn}
        />

        {/* Footer */}
        <View style={[{ flexDirection: 'row' }, { alignSelf: 'center' }]}>
          <Text style={styles.footer}>Are you new user?</Text>
          <TouchableOpacity onPress={goToSignup}>
            <Text style={styles.register}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
