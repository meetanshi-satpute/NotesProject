import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput, ActivityIndicator } from 'react-native-paper';
import styles from './styles';
import { supabase } from '../../../../lib/supabase';

const CreateNotesScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [titleFocused, setTitleFocused] = useState(false);
  const [contentFocused, setContentFocused] = useState(false);

  // Button press animation
  const saveScale = useRef(new Animated.Value(1)).current;
  const cancelScale = useRef(new Animated.Value(1)).current;

  const animPress = (anim: Animated.Value) =>
    Animated.spring(anim, { toValue: 0.96, useNativeDriver: true }).start();
  const animRelease = (anim: Animated.Value) =>
    Animated.spring(anim, { toValue: 1, useNativeDriver: true }).start();

  // ── Original save logic (untouched) ───────────────────────────────────────
  const saveNote = async () => {
    if (!title || !content) {
      Alert.alert('Validation', 'All fields required');
      return;
    }
    setLoading(true);
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr || !userData?.user) {
      setLoading(false);
      Alert.alert('Error', 'User not logged in');
      return;
    }
    const user = userData.user;
    const { error } = await supabase.from('notes').insert({
      title,
      content,
      user_id: user.id,
    });
    setLoading(false);

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    Alert.alert('Success', 'Note created', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  // ── Original cancel logic (untouched) ─────────────────────────────────────
  const handleCancel = () => {
    setTitle('');
    setContent('');
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
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.inner}>
          {/* Card */}
          <View style={styles.card}>
            {/* Icon badge */}
            <View style={styles.iconBadge}>
              <Text style={styles.iconBadgeEmoji}>✏️</Text>
            </View>

            <Text style={styles.appLabel}>NOTES APP</Text>
            <Text style={styles.header}>Create Note</Text>

            {/* Title */}
            <TextInput
              label="Title"
              mode="outlined"
              value={title}
              onChangeText={setTitle}
              onFocus={() => setTitleFocused(true)}
              onBlur={() => setTitleFocused(false)}
              outlineColor="rgba(255,255,255,0.15)"
              activeOutlineColor="#8B5CF6"
              textColor="#FFFFFF"
              style={styles.input}
              contentStyle={styles.inputContent}
              theme={{
                colors: {
                  background: 'rgba(255,255,255,0.07)',
                  onSurfaceVariant: titleFocused
                    ? '#8B5CF6'
                    : 'rgba(255,255,255,0.45)',
                },
              }}
            />

            {/* Content */}
            <TextInput
              label="Content"
              mode="outlined"
              multiline
              numberOfLines={6}
              value={content}
              onChangeText={setContent}
              onFocus={() => setContentFocused(true)}
              onBlur={() => setContentFocused(false)}
              outlineColor="rgba(255,255,255,0.15)"
              activeOutlineColor="#8B5CF6"
              textColor="#FFFFFF"
              style={[styles.input, styles.contentInput]}
              contentStyle={styles.inputContent}
              theme={{
                colors: {
                  background: 'rgba(255,255,255,0.07)',
                  onSurfaceVariant: contentFocused
                    ? '#8B5CF6'
                    : 'rgba(255,255,255,0.45)',
                },
              }}
            />

            {/* Buttons */}
            <View style={styles.btnRow}>
              {/* Cancel */}
              <Animated.View
                style={[
                  styles.btnFlex,
                  { transform: [{ scale: cancelScale }] },
                ]}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPressIn={() => animPress(cancelScale)}
                  onPressOut={() => animRelease(cancelScale)}
                  onPress={handleCancel}
                  style={styles.cancelBtn}
                >
                  <Text style={styles.cancelBtnText}>Clear</Text>
                </TouchableOpacity>
              </Animated.View>

              {/* Save */}
              <Animated.View
                style={[styles.btnFlex, { transform: [{ scale: saveScale }] }]}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPressIn={() => animPress(saveScale)}
                  onPressOut={() => animRelease(saveScale)}
                  onPress={saveNote}
                  disabled={loading}
                  style={styles.saveBtn}
                >
                  {loading ? (
                    <ActivityIndicator color="#fff" size="small" />
                  ) : (
                    <>
                      <Text style={styles.saveBtnText}>Save Note</Text>
                      <Text style={styles.saveBtnArrow}>→</Text>
                    </>
                  )}
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateNotesScreen;
