import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput, ActivityIndicator} from 'react-native-paper';
import {supabase} from '../../../../lib/supabase';
import {styles} from './styles';

const SignUpScreen = ({navigation}: any) => {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);

  const [nameFocused, setNameFocused]   = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused]   = useState(false);

  const btnScale = useRef(new Animated.Value(1)).current;
  const pressIn  = () =>
    Animated.spring(btnScale, {toValue: 0.96, useNativeDriver: true}).start();
  const pressOut = () =>
    Animated.spring(btnScale, {toValue: 1, useNativeDriver: true}).start();

  const signUp = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'All fields required');
      return;
    }
    setLoading(true);
    const {error, data} = await supabase.auth.signUp({email, password});
    setLoading(false);

    console.log('data=================', data);
    console.log('error=================', error);

    if (error) {
      Alert.alert('Signup Error', error.message);
      return;
    }
    Alert.alert('Success', 'Account created', [
      {text: 'OK', onPress: () => navigation.navigate('login')},
    ]);
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B1E" />

      {/* Ambient blobs */}
      <View style={styles.blobRed} />
      <View style={styles.blobBlue} />
      <View style={styles.blobPurple} />

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* Centered container — no ScrollView */}
        <View style={styles.inner}>
          <View style={styles.card}>

            {/* Icon badge */}
            <View style={styles.iconBadge}>
              <Text style={styles.iconBadgeEmoji}>📝</Text>
            </View>

            <Text style={styles.appLabel}>NOTES APP</Text>
            <Text style={styles.title}>{'Create\nAccount'}</Text>

            {/* Name */}
            <TextInput
              label="Name"
              value={name}
              onChangeText={setName}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              autoCapitalize="words"
              mode="outlined"
              outlineColor="rgba(255,255,255,0.15)"
              activeOutlineColor="#8B5CF6"
              textColor="#FFFFFF"
              style={styles.input}
              contentStyle={styles.inputContent}
              theme={{
                colors: {
                  background: 'rgba(255,255,255,0.07)',
                  onSurfaceVariant: nameFocused
                    ? '#8B5CF6'
                    : 'rgba(255,255,255,0.45)',
                },
              }}
            />

            {/* Email */}
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              mode="outlined"
              outlineColor="rgba(255,255,255,0.15)"
              activeOutlineColor="#8B5CF6"
              textColor="#FFFFFF"
              style={[styles.input, {marginTop: 14}]}
              contentStyle={styles.inputContent}
              theme={{
                colors: {
                  background: 'rgba(255,255,255,0.07)',
                  onSurfaceVariant: emailFocused
                    ? '#8B5CF6'
                    : 'rgba(255,255,255,0.45)',
                },
              }}
            />

            {/* Password */}
            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              onFocus={() => setPassFocused(true)}
              onBlur={() => setPassFocused(false)}
              secureTextEntry={!showPass}
              mode="outlined"
              outlineColor="rgba(255,255,255,0.15)"
              activeOutlineColor="#8B5CF6"
              textColor="#FFFFFF"
              style={[styles.input, {marginTop: 14}]}
              contentStyle={styles.inputContent}
              theme={{
                colors: {
                  background: 'rgba(255,255,255,0.07)',
                  onSurfaceVariant: passFocused
                    ? '#8B5CF6'
                    : 'rgba(255,255,255,0.45)',
                },
              }}
              right={
                <TextInput.Icon
                  icon={showPass ? 'eye-off' : 'eye'}
                  color="rgba(255,255,255,0.5)"
                  onPress={() => setShowPass(p => !p)}
                />
              }
            />

            {/* Submit button */}
            <Animated.View
              style={[styles.btnWrap, {transform: [{scale: btnScale}]}]}>
              <TouchableOpacity
                activeOpacity={1}
                onPressIn={pressIn}
                onPressOut={pressOut}
                onPress={signUp}
                disabled={loading}
                style={styles.signUpBtn}>
                {loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    <Text style={styles.signUpBtnText}>Create Account</Text>
                    <Text style={styles.signUpBtnArrow}>→</Text>
                  </>
                )}
              </TouchableOpacity>
            </Animated.View>

            {/* Divider */}
            <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>or</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Sign in link */}
            <View style={styles.footerRow}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('login')}
                activeOpacity={0.7}>
                <Text style={styles.signInLink}> Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default SignUpScreen;