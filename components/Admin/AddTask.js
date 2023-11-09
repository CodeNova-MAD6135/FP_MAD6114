import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const AddTask = ({ navigation }) => {
  const [TaskName, setTaskName] = useState('');
  const [TaskDescription, setTaskDescription] = useState('');
  const [AttachedDocument, setAttachedDocument] = useState(null);
  const [selectedMember, setSelectedMember] = useState('');

  const handleAddTask = () => {
    // Handle adding the Task (e.g., save to state or API)
    // You can implement this part as needed
  };

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({ type: '*/*' });
      console.log(result.assets[0].name);
      if (result.assets[0]) {
        setAttachedDocument(result.assets[0]);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
          <TextInput
              style={styles.input}
              placeholder="Task Name"
              value={TaskName}
              onChangeText={text => setTaskName(text)}
          />
          <TextInput
              style={[styles.input, styles.inputArea]}
              multiline
              numberOfLines={4}
              placeholder="Task Description"
              value={TaskDescription}
              onChangeText={text => setTaskDescription(text)}
          />
          <TouchableOpacity style={styles.attachButton} onPress={handlePickDocument}>
            {AttachedDocument ? (
              <Text>Attachment: {AttachedDocument.name}</Text>
            ) : (
              <View style={styles.plusIconWrapper}>
                <FontAwesome5 name='plus-circle' size={25} color='#5D5FDE' />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.picker}>
          <RNPickerSelect
                placeholder = { {label: 'Select Member', value: null}}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: 'Rahul', value: 'rahul' },
                  { label: 'Riya', value: 'riya' },
                ]}
                style={{
                  inputAndroid: {
                    height: 40,
                    marginTop: 20,
                    paddingLeft: 10,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  },
                  inputIOS: {
                    height: 40,
                    marginTop: 20,
                    paddingLeft: 10,
                    borderRadius: 8,
                    borderColor: '#ccc',
                    borderWidth: 1,
                  },
                }}
              />
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
              <Text style={styles.buttonText}>Add Task</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    position: 'relative'
  },
  input: {
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  inputArea: {
    height: 200,
  },
  attachButton: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    paddingVertical: 40,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: '#5D5FDE',
    position: 'relative',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  plusIconWrapper: {
    position: 'absolute',
    top: '80%',
    left: '50%',
    transform: [{ translateX: -90 }, { translateY: 15 }],
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#5D5FDE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 50,
  },

});

export default AddTask;
