import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home, AddPost, Profile} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let IconName;
          if (route.name === 'Home') {
            IconName = focused ? 'home' : 'home-outline';
            //color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          } else if (route.name === 'AddPost') {
            IconName = focused ? 'person-add' : 'person-add-outline';
            //color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          } else if (route.name === 'Profile') {
            IconName = focused
              ? 'ios-person-circle'
              : 'ios-person-circle-outline';
            //color = focused ? '#000' : '#000';
            size = focused ? 25 : 20;
          }
          return <Ionicons name={IconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default Tabs;
