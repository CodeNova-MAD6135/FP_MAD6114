import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, Alert, TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

const UserManagement = ({navigation}) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [swipedIndex, setSwipedIndex] = useState(null);

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

  const handleSwipe = (index) => {
    if (swipedIndex !== null && swipedIndex !== index) {
      // Unswipe the previously swiped item
      setSwipedIndex(null);
    }
    setSwipedIndex(index);
  };

  const renderItem = ({ item, index }) => (
    <Swipeable
      renderRightActions={() => (
        <View style={styles.userSwipeItem}>
          <TouchableOpacity onPress={() => handleEdit(item)}>
            <Ionicons name="create" size={24} color="#007BFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)} >
            <Ionicons name="trash" size={24} color="#FF4500" />
          </TouchableOpacity>
        </View>
      )}
      onSwipeableOpen={() => handleSwipe(index)}
      onSwipeableClose={() => {
        if (swipedIndex === index) {
          setSwipedIndex(null);
        }
      }}
    >
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
      </View>
    </View>
    </Swipeable>
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
    backgroundColor: 'white',
  },
  userSwipeItem: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 10,

  },
  userItem: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3'
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
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 8
  },
  searchIcon: {
    position: 'absolute',
    top: 22,
    right: 20
  },
});

export default UserManagement;
