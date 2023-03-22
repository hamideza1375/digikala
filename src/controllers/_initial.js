import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Axios from 'axios'
import jwt_decode from "jwt-decode";
import { useCallback, useEffect } from 'react'
import { Dimensions } from 'react-native'

import { adminController } from "./adminController";
import { clientController } from "./clientController";
import { userController } from "./userController";
import { Layout } from "../other/Layout/Layout";

import backgroundTimer from '../other/utils/backgroundTimer';
import { create } from '../other/utils/notification';
import { getNotification, getSlider } from '../services/clientService';


export const _initController = (p) => {

  useEffect(() => {
    var toastOK = (data) => { typeof data !== 'string' ? p.toast.success('موفق آمیز', '✅', 2500) : p.toast.success('موفق آمیز', data, 3500) }
    var toast500 = () => { p.toast.error('خطا', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    Axios.interceptors.response.use(function (response) {
      if (response.config.method !== 'get' && response.data !== '' && (response.status === 200 || response.status === 201)) toastOK(response.data)
      p.setshowActivity(false)
      return response
    }, function (error) {
      if (error?.response?.status) {
        if (error.response.status > 400 && error.response.status <= 500) { toast500() };
        if (error.response.status === 400) { toast400(error.response.data) };
        p.setshowActivity(false)
      } return Promise.reject(error);
    });
    AsyncStorage.getItem("token").then((token) => { if (token) { const user = jwt_decode(token); p.settokenValue(user); } })
  }, [])

  
  useEffect(() => { p.$input.set('a', 'a') }, [])

  useEffect(() => { setTimeout(() => { p.setSplash(false) }, 500) }, [])
  Dimensions.addEventListener('change', ({ window: { width, height } }) => { p.setwidth(width); p.setheight(height) })


  //! notifee
  useEffect(() => {
    (async () => {
      let newNotification = await AsyncStorage.getItem('notification')
      const { data } = await getNotification()
      if (data)
        if (data.message && newNotification !== data.message) {
          create(data.title, data.message, require('../other/assets/images/logo.png'))
          await AsyncStorage.setItem('notification', data.message)
        }
    })();
    backgroundTimer(async () => {
      (async () => {
        let newNotification = await AsyncStorage.getItem('notification')
        const { data } = await getNotification()
        if (data)
          if (data.message && newNotification !== data.message) {
            create(data.title, data.message, require('../other/assets/images/logo.png'))
            await AsyncStorage.setItem('notification', data.message)
          }
      })();
    }, 20000)
  }, [])



  //! getSlider
  useEffect(() => {
    getSlider().then(({ data }) => {
     data && p.setslider(Object.values(data))
    })
  }, [])



}

export function allController(p) {
  const _client = ({ navigation, route }) => new clientController({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userController({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminController({ ...p, navigation, route })
  const reducer = (props) => ({ _client: _client(props), _user: _user(props), _admin: _admin(props), })
  this._children = (Component, key) => ({ children: (props) => <Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })
}

export default function _useEffect(call, state) { useFocusEffect(useCallback(() => call(), state)) }
