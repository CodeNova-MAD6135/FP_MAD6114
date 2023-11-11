import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetail = ({ route }) => {
  // const { taskName, taskDescription, createdDate, assignedMember, status } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>Task 1</Text>
      <Text style={styles.taskDescription}>ply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letrase</Text>
      <Text style={styles.createdDate}>Created Date: 09/11/2023</Text>
      <Text style={styles.assignedMember}>Assigned Member: Sonia</Text>
      <Text style={styles.status}>Status: In Progress</Text>
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
  },
  createdDate: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
  },
  assignedMember: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
  },
  status: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10,
  },
});

export default TaskDetail;
