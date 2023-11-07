import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ProjectDetail = ({ route, navigation }) => {
  const { projectId, projectName, projectDescription } = route.params;

  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    { taskId: 1, taskName: 'Task 1', taskDescription: 'Description for Task 1' },
    { taskId: 2, taskName: 'Task 2', taskDescription: 'Description for Task 2' },
    // Add more tasks as needed
  ]);

  const filteredTasks= tasks.filter(task => 
    task.taskName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.taskDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = () => {
    // Navigate to AddTask screen with projectId as a parameter
    navigation.navigate('AddTask', { projectId });
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskName}>{item.taskName}</Text>
      <Text style={styles.taskDescription}>{item.taskDescription}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.projectWrap}>
        <Text style={styles.projectName}>{projectName}</Text>
        <Text style={styles.projectDescription}>{projectDescription}</Text>
      </View>
      <View style={styles.listWrap}>
        <View style={styles.taskTitleWrap}>
            <Text style={styles.taskTitle}>Task(s)</Text>
        </View>
        <View style={styles.searchBox}>
            <TextInput
            style={styles.searchInput}
            placeholder="Search Tasks"
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            />
            <Ionicons 
                name="search-outline" 
                size={24} 
                color="#d3d3d3" 
                style={styles.searchIcon} 
            />
        </View>
        <FlatList
            data={filteredTasks}
            keyExtractor={(item) => item.taskId.toString()}
            renderItem={renderItem}
            style={styles.taskList}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Feather name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
  },
  projectWrap:{
    display: 'flex',
    alignItems: 'center',
  },
  projectName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  projectDescription: {
    color: 'gray',
    fontSize: 16,
    marginBottom: 20,
  },
  listWrap: {
    marginTop: 20,
    padding: 10,
  },
  taskTitleWrap:{
    borderBottomWidth: 1,
    borderBottomColor: '#c7c7c7',
    marginBottom: 10
  },
  taskTitle:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  taskItem: {
    marginBottom: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    
  },
  taskName: {
    fontWeight: 'bold',
  },
  taskDescription: {
    color: 'gray',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5D5FDE',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    right: 5
  },
});

export default ProjectDetail;
