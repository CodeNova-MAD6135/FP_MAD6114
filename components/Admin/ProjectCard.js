import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ProjectCard = ({ name, status, progress }) => {
    const progressColor = progress === 100 ? '#4CAF50' : '#FFC107'; // Green if completed, yellow otherwise

    return (
      <View style={[styles.card]}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text>Status: {status}</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { backgroundColor: progressColor, width: `${progress}%` }]} />
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f0f0f0',
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
      color: '#000',
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

  export default ProjectCard;