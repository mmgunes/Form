import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Login from './src/screens/Login';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStore from './src/Store/MainStore';

export default class App extends Component {
  componentDidMount = async () => {
   /* AsyncStorage.setItem('app_name', 'MtBB');
    AsyncStorage.setItem('mgunes', '4747');
    // console.log(AsyncStorage.getItem('app_name').then( cvp=>{console.log(cvp)}))

    //Value değeri dizi
    AsyncStorage.setItem('app_name', JSON.stringify(['a', 'b', 'c', 'd']));

    const app_name = await AsyncStorage.getItem('app_name');
    console.log(JSON.parse(app_name));*/

    console.log(MainStore.name)
    console.log(MainStore.getName())

  };

  render() {
    return <Login />;
  }
}
