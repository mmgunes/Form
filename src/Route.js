import React from 'react';
import {View, Text} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './screens/Login';
import Register from './screens/Register';

const AuthenticateStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(AuthenticateStack);
