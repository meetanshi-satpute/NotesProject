import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { TextInput, IconButton, Card, FAB } from 'react-native-paper';
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

  // Edit Modal States
  const [editVisible, setEditVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  // Fetch Notes
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

  // Delete Note
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

  // Update Note
  const updateNote = async () => {
    if (!selectedNote) return;

    const { error } = await supabase
      .from('notes')
      .update({
        title: editTitle,
        content: editContent,
      })
      .eq('id', selectedNote.id);

    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setEditVisible(false);
      setSelectedNote(null);
      fetchNotes();
    }
  };

  // Filter Notes
  const filteredNotes = notes.filter(
    note =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#DDE3F8' }}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#DDE3F8" />

        <Text style={styles.header}>My Notes</Text>

        {/* Search */}
        <TextInput
          placeholder="Search notes..."
          mode="flat"
          left={<TextInput.Icon icon="magnify" />}
          value={search}
          placeholderTextColor={'black'}
          onChangeText={setSearch}
          style={styles.search}
          textColor="black"
        />

        {/* Notes List */}
        <FlatList
          data={filteredNotes}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          renderItem={({ item }) => (
            <Card style={styles.noteCard}>
              <View style={styles.noteHeader}>
                <Text style={styles.noteTitle}>{item.title}</Text>

                <View style={styles.actions}>
                  <IconButton
                    icon="pencil"
                    size={20}
                    onPress={() => {
                      setSelectedNote(item);
                      setEditTitle(item.title);
                      setEditContent(item.content);
                      setEditVisible(true);
                    }}
                  />

                  <IconButton
                    icon="delete"
                    size={20}
                    onPress={() => deleteNote(item.id)}
                  />
                </View>
              </View>

              <Text style={styles.noteContent}>{item.content}</Text>
            </Card>
          )}
          ListEmptyComponent={<Text style={styles.empty}>No notes found</Text>}
        />

        {/* Create Note Button */}
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate('createNoteScreen' as never)}
        />

        {/* Edit Note Modal */}
        <Modal visible={editVisible} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Edit Note</Text>

              <TextInput
                label="Title"
                mode="outlined"
                value={editTitle}
                onChangeText={setEditTitle}
                style={[{ backgroundColor: 'white' }, { marginBottom: 15 }]}
                textColor="black"
              />

              <TextInput
                label="Content"
                mode="outlined"
                multiline
                numberOfLines={6}
                value={editContent}
                onChangeText={setEditContent}
                style={[{ backgroundColor: 'white' }]}
                textColor="black"
              />
              <View style={styles.modalActions}>
                <TouchableOpacity
                  onPress={() => setEditVisible(false)}
                  style={[{ flex: 1 }, { alignItems: 'center' }]}
                >
                  <Text style={styles.cancelBtn}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={updateNote}
                  style={[{ flex: 1 }, { alignItems: 'center' }]}
                >
                  <Text style={styles.YesBtn}>Yes</Text>
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
