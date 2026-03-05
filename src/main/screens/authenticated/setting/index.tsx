import React, {useState} from 'react';
import {
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import {styles} from './styles';

const SettingScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const handleLogout = () => {
    console.log('User logged out');
  };

  const handleEditProfile = () => {
    console.log('Edit profile clicked');
  };

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B1E" />

      {/* Ambient blobs */}
      <View style={styles.blobRed} />
      <View style={styles.blobBlue} />
      <View style={styles.blobPurple} />

      <View style={styles.inner}>

        {/* ── Header ── */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.appLabel}>NOTES APP</Text>
            <Text style={styles.pageTitle}>Settings</Text>
          </View>
        </View>

        {/* ── Profile Card ── */}
        <View style={styles.profileCard}>
          {/* Avatar with purple ring */}
          <View style={styles.avatarWrap}>
            <Image
              source={{uri: 'https://i.pravatar.cc/150?img=12'}}
              style={styles.avatar}
            />
            <View style={styles.avatarRing} />
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Meet Patel</Text>
            <Text style={styles.email}>meet@example.com</Text>
          </View>

          <TouchableOpacity
            onPress={handleEditProfile}
            style={styles.editBtn}
            activeOpacity={0.7}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* ── Settings Card ── */}
        <View style={styles.settingsCard}>

          {/* Dark Mode row */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.rowIcon, {backgroundColor: 'rgba(139,92,246,0.2)'}]}>
                <Text style={styles.rowEmoji}>🌙</Text>
              </View>
              <Text style={styles.rowLabel}>Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleTheme}
              trackColor={{false: 'rgba(255,255,255,0.1)', true: '#7C3AED'}}
              thumbColor={isDarkMode ? '#FFFFFF' : 'rgba(255,255,255,0.6)'}
            />
          </View>

          <View style={styles.divider} />

          {/* Notifications row (static UI) */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.rowIcon, {backgroundColor: 'rgba(59,130,246,0.2)'}]}>
                <Text style={styles.rowEmoji}>🔔</Text>
              </View>
              <Text style={styles.rowLabel}>Notifications</Text>
            </View>
            <Text style={styles.rowChevron}>›</Text>
          </View>

          <View style={styles.divider} />

          {/* Privacy row (static UI) */}
          <View style={styles.row}>
            <View style={styles.rowLeft}>
              <View style={[styles.rowIcon, {backgroundColor: 'rgba(239,68,68,0.15)'}]}>
                <Text style={styles.rowEmoji}>🔒</Text>
              </View>
              <Text style={styles.rowLabel}>Privacy</Text>
            </View>
            <Text style={styles.rowChevron}>›</Text>
          </View>
        </View>

        {/* ── Logout Button ── */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleLogout}
          activeOpacity={0.85}>
          <Text style={styles.logoutText}>Log Out</Text>
          <Text style={styles.logoutArrow}>→</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default SettingScreen;