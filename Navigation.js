import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Register from './components/Register';
import Login from './components/Login';
import ProjectOverview from './components/Admin/ProjectOverview';
import TaskManagement from './components/Admin/TaskManagement';
import UserManagement from './components/Admin/UserManagement';
import Profile from './components/Admin/Profile';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: () => null,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ProjectOverview') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
          } else if (route.name === 'UserManagement') {
            iconName = focused ? 'people-circle' : 'people-circle-outline';
          } else if (route.name === 'TaskManagement') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(93, 95, 222)',
        tabBarInactiveTintColor: 'grey',
      })}
    >
      <Tab.Screen name="ProjectOverview" component={ProjectOverview} />
      <Tab.Screen name="UserManagement" component={UserManagement} />
      <Tab.Screen name="TaskManagement" component={TaskManagement} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
