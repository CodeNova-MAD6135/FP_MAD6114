import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProjectCard from './ProjectCard';


const ProjectOverview = () => {
  // Dummy project data for demonstration
  const projects = [
    { id: 1, name: 'Project A', status: 'In Progress', progress: 70 },
    { id: 2, name: 'Project B', status: 'Completed', progress: 100 },
    // Add more project objects as needed
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProjectCard
            name={item.name}
            status={item.status}
            progress={item.progress}
          />
        )}
      />
    </View>
  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop: 40,
    },
    card: {
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 4,
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
      color: '#fff',
    },
    progressBarContainer: {
      height: 8,
      backgroundColor: '#ccc',
      borderRadius: 4,
      marginVertical: 8,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      borderRadius: 4,
    },
  });

export default ProjectOverview;
