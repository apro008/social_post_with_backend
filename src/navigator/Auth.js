import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Signin} from '../screens';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
};

export default Auth;
