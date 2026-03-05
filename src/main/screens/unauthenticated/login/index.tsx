import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {TextInput, ActivityIndicator} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../../../lib/supabase';
import {styles} from './styles';

// ── Task preview items (mirrors app icon) ─────────────────────────────────────
const TASKS = [
  {color: '#EF4444', label: 'Design login screen', done: true},
  {color: '#8B5CF6', label: 'Connect to Supabase', done: true},
  {color: '#F59E0B', label: 'Ship v1.0 🚀', done: false},
];

// ── Checkbox ──────────────────────────────────────────────────────────────────
const Checkbox: React.FC<{color: string; done: boolean}> = ({color, done}) => (
  <View
    style={[
      styles.checkbox,
      {
        backgroundColor: done ? color : 'transparent',
        borderColor: color,
        borderWidth: done ? 0 : 2,
      },
    ]}>
    {done && <Text style={styles.checkTick}>✓</Text>}
  </View>
);

// ── Main Screen ───────────────────────────────────────────────────────────────
const LoginScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [showPass, setShowPass]     = useState(false);
  const [loading, setLoading]       = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passFocused, setPassFocused]   = useState(false);

  // Button press scale animation
  const btnScale = useRef(new Animated.Value(1)).current;
  const pressIn  = () =>
    Animated.spring(btnScale, {toValue: 0.96, useNativeDriver: true}).start();
  const pressOut = () =>
    Animated.spring(btnScale, {toValue: 1, useNativeDriver: true}).start();

  // ── Supabase login ─────────────────────────────────────────────────────────
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Missing fields', 'Please enter your email and password.');
      return;
    }
    setLoading(true);
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    setLoading(false);

    if (error) {
      Alert.alert('Login Failed', error.message);
      return;
    }
    console.log('Logged in:', data.user?.email);
    navigation.replace('Home');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B1E" />

      {/* ── Ambient blobs ── */}
      <View style={styles.blobRed} />
      <View style={styles.blobBlue} />
      <View style={styles.blobPurple} />

      <KeyboardAvoidingView
        style={styles.kav}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

        
          {/* ── Login Card ── */}
          <View style={styles.card}>

            {/* Icon badge */}
            <View style={styles.iconBadge}>
              <Text style={styles.iconBadgeEmoji}>✏️</Text>
            </View>

            <Text style={styles.appLabel}>NOTES APP</Text>
            <Text style={styles.title}>Welcome Back</Text>

            {/* Email — react-native-paper TextInput */}
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
              style={styles.input}
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

            {/* Password — react-native-paper TextInput */}
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

            {/* Forgot password */}
            <TouchableOpacity
              style={styles.forgotRow}
              onPress={() => navigation.navigate('ForgotPassword')}
              activeOpacity={0.7}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Login button */}
            <Animated.View style={{transform: [{scale: btnScale}]}}>
              <TouchableOpacity
                activeOpacity={1}
                onPressIn={pressIn}
                onPressOut={pressOut}
                onPress={handleLogin}
                disabled={loading}
                style={styles.loginBtn}>
                {loading ? (
                  <ActivityIndicator color="#fff" size="small" />
                ) : (
                  <>
                    <Text style={styles.loginBtnText}>Sign In</Text>
                    <Text style={styles.loginBtnArrow}>→</Text>
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

            {/* Register link */}
            <View style={styles.registerRow}>
              <Text style={styles.registerText}>New here? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('signup')}
                activeOpacity={0.7}>
                <Text style={styles.registerLink}>Create an account</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;