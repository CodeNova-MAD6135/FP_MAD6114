import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TaskDetail = ({ route }) => {
  let progress = 0;
  let progressColor = '';
  let status = 'In Progress';
  if (status === 'Completed') {
    progress = 100;
    progressColor = '#4CAF50';
  } else if (status === 'In Progress') {
    progress = 50;
    progressColor = '#5D5FDE';
  }

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <LinearGradient
          colors={['#fff', progressColor]} // Add white gradient on both sides
          style={[styles.progressBar, { width: `${progress}%` }]}
        />
      </View>
      <View style={styles.taskWrap}>
        <Text style={styles.taskName}>Task 1</Text>
        <Text style={styles.taskDescription}>ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrase</Text>
        <View style={styles.contentWrap}>
        <Text style={styles.label}>Created Date:</Text><Text style={styles.value}>09/11/2023</Text>
        </View>
        <View style={styles.contentWrap}>
          <Text style={styles.label}>Assigned Member:</Text><Text style={styles.value}>Sonia</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 4,
  },
  taskWrap:{
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    minHeight: 200,
    padding: 20
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  taskDescription: {
    color: 'gray',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'justify',
  },
  contentWrap: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
    color: '#000'
  },
  value: {
    color: 'grey'
  },
  status: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
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

export default TaskDetail;
