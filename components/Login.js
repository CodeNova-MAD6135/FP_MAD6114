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
import { styles } from './Styles'; 
import SizedBox from './SizedBox';
import { Controller, useForm } from '../node_modules/react-hook-form';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {

  const navigation = useNavigation();

  const handleSignUpBtnPress = () => {
      navigation.navigate('Register');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    // Clear fields after successful login
    setEmail('');
    setPassword('');
  };
  

  const validateForm = () => {
    const errors = [];
  
    if (!validateEmail(email)) {
      errors.push('Please enter a valid email address');
    }
  
    if (!password) {
      errors.push('Please enter a valid password');
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
          <Text style={styles.title}>Welcome back!</Text>

          <SizedBox height={8} />

          <Text style={styles.subtitle}>Sign in to your account</Text>

          <SizedBox height={32} />

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

          <View style={styles.extraContentContainer}>
            <Text style={styles.textButton}>Create an account? <Text style={styles.signupbtn} onPress={handleSignUpBtnPress}>Sign Up</Text> </Text>
          </View>

          <SizedBox height={16} />

          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonTitle}>Continue</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
