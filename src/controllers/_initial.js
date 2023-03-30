import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import Axios from 'axios'
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useState } from 'react'
import { Dimensions } from 'react-native'

import { adminController } from "./adminController";
import { clientController } from "./clientController";
import { userController } from "./userController";
import { Layout } from "../other/Layout/Layout";

import backgroundTimer from '../other/utils/backgroundTimer';
import { create } from '../other/utils/notification';
import { getNotification, getSlider } from '../services/clientService';
import { Loading } from '../other/Components/Html';
import online from '../other/utils/online';


var _show = false
export const _initController = (p) => {
  const [show, setshow] = useState(false)

  useEffect(() => {
    var toastOK = (data) => { typeof data !== 'string' ? p.toast.success('موفق آمیز', '✅', 2500) : p.toast.success('موفق آمیز', data, 3500) }
    var toast500 = () => { p.toast.error('خطا ی سرور', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toastNetworkError = () => { p.toast.error('خطا ی شبکه', 'اتصال اینترنتتان را برسی کنید') }
    var toastServerError = () => { p.toast.warning('سرور در حال تعمیر', 'لطفا چند دقیقه دیگر امتحان کنید') }


    if (online() !== false) {

      Axios.interceptors.response.use(function (response) {
        p.setshowActivity(false)
        if (_show == false) { _show = true; setshow(true) }
        if (response.config.method !== 'get' && response.data !== '' && (response.status === 200 || response.status === 201)) toastOK(response.data)
        return response
      }, function (error) {
        if (_show == false) { _show = true; setshow(true) }
        if (error['request']?.statusText === '' && error['request']?.status === 0 && error['request']?.response === '' && error['isAxiosError'] === true) {
          toastServerError()
          p.setshowActivity(false)
        }
        else if (error?.response?.status) {
          p.setshowActivity(false)
          if (error.response.status > 400 && error.response.status <= 500) { toast500(); p.setshowActivity(false) };
          if (error.response.status === 400) { toast400(error.response.data) };
        } return Promise.reject(error);
      });

    }
    else {
      p.setshowActivity(false)
      toastNetworkError()
    }


    (async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const user = jwtDecode(token)
        if (user.exp < Date.now() / 1000) {
          await AsyncStorage.removeItem("token");
        }
      }

      AsyncStorage.getItem("token").then((token) => {
        if (token) {
          const user = jwtDecode(token);
          p.settokenValue(user);
          if (token) Axios.defaults.headers.common["Authorization"] = token;
        }
      })
    })()

  }, [])


  useEffect(() => { p.$input.set('a', 'a') }, [])
  useEffect(() => { show === true && setTimeout(() => { p.setSplash(false); p.setshowActivity(false) }, 200) }, [show])
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


  _useEffect(() => {
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
  this._children = (Component, key) => ({
    children: (props) =>
      <Layout _key={key} {...props} {...p}>{p.showActivity && <Loading setshowActivity={p.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...p} {...reducer(props)} /></Layout>
  })
}

export default function _useEffect(call, state) { useFocusEffect(useCallback(() => call(), state)) }
