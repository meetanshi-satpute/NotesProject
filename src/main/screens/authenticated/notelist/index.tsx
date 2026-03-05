import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  StatusBar,
  Modal,
  TouchableOpacity,
  ToastAndroid,
  BackHandler,
} from 'react-native';
import { TextInput, IconButton, FAB } from 'react-native-paper';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './styles';
import { supabase } from '../../../../lib/supabase';
import { SafeAreaView } from 'react-native-safe-area-context';

type Note = {
  id: string;
  title: string;
  content: string;
};

const NotesScreen = ({ route }: any) => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState<Note[]>([]);
  const [search, setSearch] = useState('');

  const [editVisible, setEditVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setNotes(data || []);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchNotes();
    }, []),
  );

  const deleteNote = (id: string) => {
    Alert.alert('Delete Note', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const { error } = await supabase.from('notes').delete().eq('id', id);
          if (error) {
            Alert.alert('Error', error.message);
          } else {
            setNotes(prev => prev.filter(note => note.id !== id));
          }
        },
      },
    ]);
  };

  const updateNote = async () => {
    if (!selectedNote) return;
    const { error } = await supabase
      .from('notes')
      .update({ title: editTitle, content: editContent })
      .eq('id', selectedNote.id);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setEditVisible(false);
      setSelectedNote(null);
      fetchNotes();
    }
  };

  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()),
  );

  const goToSettingScreen = () => {
    navigation.navigate('settingScreen');
  };

  // Card accent colors cycling through brand palette
  const ACCENTS = ['#EF4444', '#8B5CF6', '#3B82F6', '#F59E0B', '#10B981'];

  let presscount = 0;
  useEffect(() => {
    const onBackPress = () => {
      if (presscount === 0) {
        presscount = 1;
        ToastAndroid.show('Tap again to Exit', ToastAndroid.SHORT);
        setTimeout(() => {
          presscount = 0;
        }, 2000);
        return true;
      } else {
        BackHandler.exitApp();
        return true;
      }
    };
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress,
    );
    return () => subscription.remove(); // ✅ cleanup
  }, []);
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0F0B1E" />

      {/* Ambient blobs */}
      <View style={styles.blobRed} />
      <View style={styles.blobBlue} />
      <View style={styles.blobPurple} />

      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.headerSub}>NOTES APP</Text>
            <Text style={styles.header}>My Notes</Text>
          </View>
          <TouchableOpacity
            onPress={goToSettingScreen}
            style={styles.settingsBtn}
            activeOpacity={0.8}
          >
            <IconButton
              icon="cog-outline"
              size={22}
              iconColor="rgba(255,255,255,0.8)"
              onPress={goToSettingScreen}
            />
          </TouchableOpacity>
        </View>

        {/* Search */}
        <TextInput
          placeholder="Search notes..."
          mode="outlined"
          left={<TextInput.Icon icon="magnify" color="rgba(255,255,255,0.4)" />}
          value={search}
          placeholderTextColor="rgba(255,255,255,0.3)"
          onChangeText={setSearch}
          outlineColor="rgba(255,255,255,0.12)"
          activeOutlineColor="#8B5CF6"
          textColor="#FFFFFF"
          style={styles.search}
          contentStyle={styles.searchContent}
          theme={{
            colors: {
              background: 'rgba(255,255,255,0.07)',
              onSurfaceVariant: 'rgba(255,255,255,0.4)',
            },
          }}
        />

        {/* Notes List */}
        <FlatList
          data={filteredNotes}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item, index }) => (
            <View style={styles.noteCard}>
              {/* Accent left bar */}
              <View
                style={[
                  styles.noteAccentBar,
                  { backgroundColor: ACCENTS[index % ACCENTS.length] },
                ]}
              />
              <View style={styles.noteInner}>
                <View style={styles.noteHeader}>
                  <Text style={styles.noteTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <View style={styles.actions}>
                    <TouchableOpacity
                      style={styles.actionBtn}
                      onPress={() => {
                        setSelectedNote(item);
                        setEditTitle(item.title);
                        setEditContent(item.content);
                        setEditVisible(true);
                      }}
                    >
                      <IconButton
                        icon="pencil-outline"
                        size={18}
                        iconColor="rgba(255,255,255,0.55)"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.actionBtn}
                      onPress={() => deleteNote(item.id)}
                    >
                      <IconButton
                        icon="delete-outline"
                        size={18}
                        iconColor="rgba(239,68,68,0.7)"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.noteContent} numberOfLines={2}>
                  {item.content}
                </Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyWrap}>
              <Text style={styles.emptyIcon}>📝</Text>
              <Text style={styles.empty}>No notes yet</Text>
              <Text style={styles.emptySub}>
                Tap + to create your first note
              </Text>
            </View>
          }
        />

        {/* FAB */}
        <FAB
          icon="plus"
          style={styles.fab}
          color="#FFFFFF"
          onPress={() => navigation.navigate('createNoteScreen' as never)}
        />

        {/* Edit Modal */}
        <Modal visible={editVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              {/* Modal header */}
              <View style={styles.modalHeader}>
                <View style={styles.modalDot} />
                <Text style={styles.modalTitle}>Edit Note</Text>
              </View>

              <TextInput
                label="Title"
                mode="outlined"
                value={editTitle}
                onChangeText={setEditTitle}
                outlineColor="rgba(255,255,255,0.15)"
                activeOutlineColor="#8B5CF6"
                textColor="#FFFFFF"
                style={styles.modalInput}
                theme={{
                  colors: {
                    background: 'rgba(255,255,255,0.07)',
                    onSurfaceVariant: 'rgba(255,255,255,0.45)',
                  },
                }}
              />

              <TextInput
                label="Content"
                mode="outlined"
                multiline
                numberOfLines={6}
                value={editContent}
                onChangeText={setEditContent}
                outlineColor="rgba(255,255,255,0.15)"
                activeOutlineColor="#8B5CF6"
                textColor="#FFFFFF"
                style={[styles.modalInput, { marginTop: 14 }]}
                theme={{
                  colors: {
                    background: 'rgba(255,255,255,0.07)',
                    onSurfaceVariant: 'rgba(255,255,255,0.45)',
                  },
                }}
              />

              <View style={styles.modalActions}>
                <TouchableOpacity
                  onPress={() => setEditVisible(false)}
                  style={styles.cancelBtnWrap}
                  activeOpacity={0.7}
                >
                  <Text style={styles.cancelBtn}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={updateNote}
                  style={styles.saveBtnWrap}
                  activeOpacity={0.8}
                >
                  <Text style={styles.saveBtn}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default NotesScreen;
