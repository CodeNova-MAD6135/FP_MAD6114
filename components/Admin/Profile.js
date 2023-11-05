import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  // Assuming user data is available
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profileImage: require('../../assets/user.png'), // Replace with actual image source
  };

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.profileImage} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#5D5FDE" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: 'gray',
    marginBottom: 20,
  },
});

export default Profile;
