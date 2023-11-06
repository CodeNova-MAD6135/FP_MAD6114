import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddProject = ({ navigation }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleAddProject = () => {
    // Handle adding the project (e.g., save to state or API)
    // You can implement this part as needed
  };

  return (
    <View style={styles.container}>
          <TextInput
              style={styles.input}
              placeholder="Project Name"
              value={projectName}
              onChangeText={text => setProjectName(text)}
          />
          <TextInput
              style={[styles.input, styles.inputArea]}
              multiline
              numberOfLines={4}
              placeholder="Project Description"
              value={projectDescription}
              onChangeText={text => setProjectDescription(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleAddProject}>
              <Text style={styles.buttonText}>Add Project</Text>
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
  addButton: {
    backgroundColor: '#5D5FDE',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddProject;
