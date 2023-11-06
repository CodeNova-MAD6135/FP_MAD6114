import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import EditUser from './EditUser';

const UserManagement = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', rate: 4.5 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', rate: 3.8 },
  ]);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEdit = (user) => {
    // Navigate to EditUser component with user data
    navigation.navigate('EditUser', { user });
  };

  const handleDelete = (userItem) => {
    Alert.alert(
      'Confirm Deletion',
      `Are you sure you want to remove ${userItem.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => setUsers(users.filter(user => user.id !== userItem.id)),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
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
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Ionicons name="create-outline" size={20} color="#5D5FDE" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)}>
            <Ionicons name="trash-outline" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.searchInput}
        placeholder="Search Users"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        />
        <Ionicons 
        name="search-outline" 
        size={24} 
        color="#d3d3d3" 
        style={styles.searchIcon} 
        />
        <FlatList
        data={filteredUsers}
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
  searchInput: {
    height: 40,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8
  },
  searchIcon: {
    position: 'absolute',
    top: 20,
    right: 20
  }
});

export default UserManagement;
