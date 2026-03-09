import React, {useState} from 'react';
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  StatusBar,
  Alert,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {supabase} from '../../../../lib/supabase';
import {styles} from './styles';
import { CustomModal } from '../../../components/customModal';

const SettingScreen = () => {
  const navigation = useNavigation<any>();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  // Confirm Logout
  const confirmLogout = async () => {
    setLogoutModal(false);
    setLoggingOut(true);

    const {error} = await supabase.auth.signOut();

    setLoggingOut(false);

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    navigation.replace('login');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B1E" />

      <View style={styles.inner}>
        
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.appLabel}>NOTES APP</Text>
            <Text style={styles.pageTitle}>Settings</Text>
          </View>
        </View>

        {/* Profile */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrap}>
            <Image
              source={{uri: 'https://i.pravatar.cc/150?img=12'}}
              style={styles.avatar}
            />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Meet Patel</Text>
            <Text style={styles.email}>meet@example.com</Text>
          </View>

          <TouchableOpacity
            onPress={handleEditProfile}
            style={styles.editBtn}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Settings Card */}
        <View style={styles.settingsCard}>

          {/* Dark Mode */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLabel}>Dark Mode</Text>
            </View>

            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
            />
          </View>

          <View style={styles.divider} />

          {/* Notifications */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLabel}>Notifications</Text>
            </View>
            <Text style={styles.rowChevron}>›</Text>
          </View>

          <View style={styles.divider} />

          {/* Privacy */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <Text style={styles.rowLabel}>Privacy</Text>
            </View>
            <Text style={styles.rowChevron}>›</Text>
          </View>

        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={[styles.logoutBtn, loggingOut && {opacity: 0.6}]}
          onPress={() => setLogoutModal(true)}
          disabled={loggingOut}
        >
          <Text style={styles.logoutText}>
            {loggingOut ? 'Logging out...' : 'Log Out'}
          </Text>

          {!loggingOut && <Text style={styles.logoutArrow}>→</Text>}
        </TouchableOpacity>

      </View>

      {/* Logout Modal */}
      <CustomModal
        isVisible={logoutModal}
        title="Log Out"
        detail="Are you sure you want to log out?"
        noText="Cancel"
        yesText="Log Out"
        onClose={() => setLogoutModal(false)}
        onPressNo={() => setLogoutModal(false)}
        onPressYes={confirmLogout}
      />

    </View>
  );
};

export default SettingScreen;