import React, { useState } from 'react';
import { View, Text, FlatList, Alert, StatusBar } from 'react-native';
import { TextInput, IconButton, Card, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import { supabase } from '../../../../lib/supabase';
type Note = {
  id: string;
  title: string;
  content: string;
};

const NotesScreen = route => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setNotes(data || []);
  };

  useFocusEffect(
    useCallback(() => {
      fetchNotes();
    }, []),
  );

  const [search, setSearch] = useState('');
  const deleteNote = async (id: string) => {
    Alert.alert('Delete', 'Are you sure?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await supabase.from('notes').delete().eq('id', id);
          fetchNotes();
        },
      },
    ]);
  };
  const note = route.params?.note;

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const saveNote = async () => {
    if (note) {
      await supabase.from('notes').update({ title, content }).eq('id', note.id);
    } else {
      await supabase.from('notes').insert([{ title, content }]);
    }

   
  };

  const filteredNotes = notes?.filter(
    note =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#DDE3F8" />

      <Text style={styles.header}>My Notes</Text>

      {/* Search */}
      <TextInput
        placeholder="Search notes..."
        mode="flat"
        left={<TextInput.Icon icon="magnify" />}
        value={search}
        onChangeText={setSearch}
        style={styles.search}
        placeholderTextColor={'black'}
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
                  onPress={() => {}}
                />
                <IconButton
                  icon="delete"
                  size={20}
                  onPress={() => {}}
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
        onPress={() => navigation.navigate('createNoteScreen')}
      />
    </View>
  );
};

export default NotesScreen;
