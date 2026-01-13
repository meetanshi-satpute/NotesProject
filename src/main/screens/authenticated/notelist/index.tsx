import React, { useState } from 'react';
import { View, Text, FlatList, Alert, StatusBar } from 'react-native';
import { TextInput, IconButton, Card, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

type Note = {
  id: string;
  title: string;
  content: string;
};

const NotesScreen = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Shopping List',
      content: 'Buy milk, bread, eggs, and fruits.',
    },
    {
      id: '2',
      title: 'Meeting Notes',
      content: 'Discuss project timeline and milestones.',
    },
    {
      id: '3',
      title: 'React Native Tips',
      content: 'Use FlatList for better performance.',
    },
  ]);

  const [search, setSearch] = useState('');

  const filteredNotes = notes.filter(
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
                <IconButton icon="pencil" size={20} onPress={() => {}} />
                <IconButton icon="delete" size={20} onPress={() => {}} />
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
