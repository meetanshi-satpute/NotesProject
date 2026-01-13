import React, { useState } from 'react';
import {
  View,
  Text,
  Alert,
  StatusBar,
} from 'react-native';
import {
  TextInput,
  Button,
} from 'react-native-paper';
import styles from './styles';

const CreateNotesScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Validation', 'Title and content are required');
      return;
    }

    // Dummy save
    Alert.alert('Success', 'Note created successfully', [
      {
        text: 'OK',
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#DDE3F8" />

      <Text style={styles.header}>Create Note</Text>

      <TextInput
        label="Title"
        mode="outlined"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        label="Content"
        mode="outlined"
        multiline
        numberOfLines={6}
        value={content}
        onChangeText={setContent}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={saveNote}
        style={styles.saveButton}
      >
        Save Note
      </Button>
    </View>
  );
};

export default CreateNotesScreen;
