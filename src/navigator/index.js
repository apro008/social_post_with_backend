import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Tabs from './Tabs.js';
import Auth from './Auth.js';

const Navigation = () => {
  const {user} = useSelector(state => state.user);
  return (
    <NavigationContainer>
      {user.email ? <Tabs /> : <Auth />}
    </NavigationContainer>
  );
};

export default Navigation;
