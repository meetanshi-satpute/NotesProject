import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { TextInput, IconButton } from 'react-native-paper';
import { styles } from './styles';

const SignUpScreen = ({ navigation }: any) => {
    const gotTologin=()=>{
        navigation.navigate('login')
    }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#DDE3F8" />

      <View style={styles.card}>
        {/* Decorative circles */}
        <View style={styles.circleSmall} />
        <View style={styles.circleBig} />

        {/* Title */}
        <Text style={styles.title}>Create{'\n'}Account</Text>

        {/* Name */}
        <TextInput
          label="Name"
          mode="flat"
          left={<TextInput.Icon icon="account-outline" />}
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          style={styles.input}
        />

        {/* Email */}
        <TextInput
          label="Email"
          mode="flat"
          left={<TextInput.Icon icon="email-outline" />}
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          label="Password"
          mode="flat"
          secureTextEntry
          left={<TextInput.Icon icon="lock-outline" />}
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          style={styles.input}
        />

        {/* Re-Password */}
        <TextInput
          label="Re-Password"
          mode="flat"
          secureTextEntry
          left={<TextInput.Icon icon="lock-outline" />}
          underlineColor="#B39DDB"
          activeUnderlineColor="#6A1B9A"
          style={styles.input}
        />

        {/* Arrow Button */}
        <IconButton
          icon="arrow-right"
          size={28}
          onPress={gotTologin}
          iconColor="#FFF"
          style={styles.arrowBtn}
        />

        {/* Footer */}

        <View style={[{ flexDirection: 'row' }, { alignSelf: 'center' }]}>
          <Text style={styles.footer}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={[styles.signIn]}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
