import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from './Styles'; 
import SizedBox from './SizedBox';
import { Controller, useForm } from '../node_modules/react-hook-form';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const errors = validateForm();
  
    if (errors.length === 0) {
      // Add your login logic here
      console.log(`Email: ${email}, Password: ${password}`);
    } else {
      Alert.alert('Error', errors.join('\n'), [{ text: 'Ok' }]);

    }
    
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setRole('');
  };
  

  const validateForm = () => {
    const errors = [];

    if (!name) {
        errors.push('Please enter a valid name');
      }
  
    if (!validateEmail(email)) {
      errors.push('Please enter a valid email address');
    }
  
    if (!password) {
      errors.push('Please enter a valid password');
    }

    // if (password !== confirmPassword) {
    //     errors.push('Passwords do not match');
    //     return;
    //   }

    if (!role) {
        errors.push('Please select a role');
      }
  
    return errors;
  };
  
  

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeAreaView}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.content}
        >
          <Text style={styles.title}>Creat an Account!</Text>

          <SizedBox height={32} />

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                autoCapitalize="none"
                autoCompleteType="name"
                autoCorrect={false}
                keyboardType="default"
                returnKeyType="next"
                style={styles.textInput}
                textContentType="name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Email</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                style={styles.textInput}
                textContentType="username"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Password</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                returnKeyType="done"
                secureTextEntry
                style={styles.textInput}
                textContentType="password"
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />

          <Pressable>
            <View style={styles.form}>
              <Text style={styles.label}>Confirm Password</Text>

              <TextInput
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                secureTextEntry
                returnKeyType="done"
                style={styles.textInput}
                textContentType="password"
                value={confirmPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
          </Pressable>

          <SizedBox height={16} />
          <View style={styles.form}>
            <View style={styles.selectContainer}>
              <RNPickerSelect
                placeholder = { {label: 'Select role', value: null}}
                onValueChange={(value) => console.log(value)}
                items={[
                  { label: 'Member', value: 'member' },
                  { label: 'Admin', value: 'admin' },
                ]}
              />
            </View>
         </View>

          <SizedBox height={32} />

          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default RegisterScreen;
