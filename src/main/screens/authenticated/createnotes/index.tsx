import React, { useState } from 'react';
import { View, Text, Alert, StatusBar } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from './styles';
import { supabase } from '../../../../lib/supabase';

const CreateNotesScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const saveNote = async () => {
    if (!title || !content) {
      Alert.alert('Validation', 'All fields required');
      return;
    }
    const { data: userData, error: userErr } = await supabase.auth.getUser();
    if (userErr || !userData?.user) {
      Alert.alert('Error', 'User not logged in');
      return;
    }
    const user = userData.user;
    const { error } = await supabase.from('notes').insert({
      title,
      content,
      user_id: user.id,
    });

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    Alert.alert('Success', 'Note created', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };
  // const saveNote = async () => {
  //   if (!title || !content) {
  //     Alert.alert('Error', 'Please enter title and note');
  //     return;
  //   }

  //   setLoading(true);

  //   // Get logged-in user
  //   const { data: userData, error: userErr } = await supabase.auth.getUser();
  //   if (userErr || !userData?.user) {
  //     setLoading(false);
  //     Alert.alert('Error', 'User not logged in');
  //     return;
  //   }

  //   const user = userData.user;

  //   if (editingNote) {
  //     // Update existing note
  //     const { error } = await supabase
  //       .from('notes')
  //       .update({ title, content })
  //       .eq('id', editingNote.id)
  //       .eq('user_id', user.id);

  //     setLoading(false);

  //     if (error) {
  //       Alert.alert('Error', error.message);
  //       return;
  //     }

  //     Alert.alert('Success', 'Note updated successfully', [
  //       { text: 'OK', onPress: () => navigation.goBack() },
  //     ]);
  //   } else {
  //     // Create new note
  //     const { error } = await supabase.from('notes').insert({
  //       title,
  //       content,
  //       user_id: user.id,
  //     });

  //     setLoading(false);

  //     if (error) {
  //       Alert.alert('Error', error.message);
  //       return;
  //     }

  //     Alert.alert('Success', 'Note added successfully', [
  //       { text: 'OK', onPress: () => navigation.goBack() },
  //     ]);
  //   }
  // };
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
        textColor="black"
        activeOutlineColor="#4B0082" // dark purple outline
      />

      <TextInput
        label="Content"
        mode="outlined"
        multiline
        numberOfLines={6}
        value={content}
        onChangeText={setContent}
        style={styles.input}
        textColor="black"
        activeOutlineColor="#4B0082"
      />

      <Button mode="contained" onPress={saveNote} style={styles.saveButton}>
        Save Note
      </Button>
    </View>
  );
};

export default CreateNotesScreen;
