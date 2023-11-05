import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserManagement = () => {
  // Dummy user data for demonstration
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', rate: 4.5 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', rate: 3.8 },
    // Add more user objects as needed
  ]);

  const handleEdit = (userId) => {
    // Implement edit functionality here
    console.log(`Edit user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    // Implement delete functionality here
    setUsers(users.filter(user => user.id !== userId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.leftContent}>
        <Image
          source={require('../../assets/user.png')} // Path to your user image
          style={styles.profileImage}
        />
      </View>
      <View style={styles.rightContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.info}>Email: {item.email}</Text>
        <Text style={styles.info}>Rate: {item.rate}</Text>
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleEdit(item.id)}>
            <Ionicons name="create-outline" size={20} color="#5D5FDE" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item.id)}>
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
    width: 2,
    height: 1,
    },
    shadowOpacity: 0.1
  },
  leftContent: {
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rightContent: {
    flex: 1,
    paddingTop: 10
  },
  name: {
    fontWeight: 'bold',
    color: 'gray',
  },
  info: {
    color: 'gray',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'flex-end'
  },
});

export default UserManagement;
