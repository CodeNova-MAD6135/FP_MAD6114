// TaskCard.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskCard = ({ task }) => {
  return (
    <View style={styles.taskItem}>
      <View style={styles.rightCol}>
        <View style={styles.rcFirst}>
          <Text style={styles.taskName}>{task.taskName}</Text>
          <Text style={styles.taskDescription}>{task.taskDescription}</Text>
        </View>
        <View style={styles.rcLast}>
          <Text style={styles.taskDate}>{task.created_at}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#f3f3f3',
  },
  taskName: {
    fontWeight: 'bold',
  },
  taskDescription: {
    color: 'gray',
  },
  rightCol: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%'
  },
  taskDate: {
    color: 'grey',
    fontSize: 12
  }
});

export default TaskCard;
