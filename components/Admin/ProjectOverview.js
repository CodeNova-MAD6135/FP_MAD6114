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
      backgroundColor: 'white',
      padding: 20
    }
  });

export default ProjectOverview;
