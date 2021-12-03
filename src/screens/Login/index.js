import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

import { Formik } from 'formik';
import Yup from 'yup';

export default class Login extends Component {
  render() {
    return (
      <SafeAreaView style={style.body}>
        <View style={style.header}>
          <Text style={style.title}>Sıgn In</Text>
        </View>
        <View style={style.logo_area}>
          <Image source={require('../../../assets/images/home.png')} />
        </View>
        <View style={style.board}>
          <View style={style.item_board}>
            <TextInput style={style.txt_input} placeholder="Username" />
          </View>
          <View style={style.item_board}>
            <TextInput
              style={style.txt_input}
              placeholder="Password" />
            <TouchableOpacity style={{position:'absolute', right:10,top:25 }}>
              <Icon name={'eye-slash'} color={'#3b5999'} size={20} />
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.item_board,
              {flexDirection: 'row', justifyContent: 'flex-end'},
            ]}>
            <Text>Forgot your password ?</Text>
          </View>
          <View style={style.item_board}>
            <TouchableOpacity style={style.button}>
              <Text style={style.button_txt}>Login</Text>
            </TouchableOpacity>
          </View>
          <View
            style={[
              style.item,
              {
                marginBottom: 10,
                justifyContent: 'center',
                alignItems: 'center',
              },
            ]}>
            <Text style={{color: '#525464'}}>Or</Text>
          </View>
          <View style={style.social}>
            <TouchableOpacity style={style.social_item}>
              <Icon name={'facebook-f'} color={'#3b5999'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
              <Icon name={'twitter'} color={'#55acee'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={style.social_item}>
              <Icon name={'linkedin'} color={'#0077B5'} size={20} />
            </TouchableOpacity>
          </View>
          <View style={[style.item]}>
            <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 17, fontWeight: '500', color: '#525464'}}>
                Don’t have an account?{' '}
                <Text style={{color: '#FFB19D', fontWeight: '700'}}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  body: {backgroundColor: 'white', flex: 1},
  header: {padding: 15, justifyContent: 'center', alignItems: 'center'},
  title: {fontWeight: '700', fontSize: 20, color: '#525464'},
  logo_area: {alignItems: 'center', marginTop: 40},
  board: {marginTop: 20, paddingHorizontal: 30},
  item_board: {marginBottom: 20},
  item: {marginBottom: 20},
  txt_input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#b0b0c3',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20C3AF',
    paddingVertical: 20,
    borderRadius: 10,
  },
  button_txt: {fontSize: 18},
  social: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  social_item: {
    padding: 10,
    width: 100,
    height: 60,
    borderWidth: 1,
    borderColor: '#E2E2E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
