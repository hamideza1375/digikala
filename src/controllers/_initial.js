import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import Axios from 'axios'
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'

import { adminController } from "./adminController";
import { clientController } from "./clientController";
import { userController } from "./userController";
import { Layout } from "../other/Layout/Layout";

import backgroundTimer from '../other/utils/backgroundTimer';
import { create } from '../other/utils/notification';
import { getNotification, getSendStatus, getSlider, getSocketIoSeenUser } from '../services/clientService';
import { getPostPrice } from '../services/adminService';
import { Loading } from '../other/Components/Html';
import online from '../other/utils/online';
import { getTicketSeen } from '../services/userService';
import { truncate } from '../other/utils/truncate';
import { localhost } from '../other/utils/axios/axios';
import { idValidator } from '../other/utils/idValidator';


var _show = false
export const _initController = (p) => {
  const [show, setshow] = useState(false)

  useEffect(() => {
    var toastOK = (data) => { typeof data !== 'string' ? p.toast.success('موفق آمیز', '√', 2500) : p.toast.success('موفق آمیز', data, 3500); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast500 = () => { p.toast.error('خطا ی سرور', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', typeof error === 'string' ? error : 'خطایی غیر منتظره رخ داد'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toastNetworkError = () => { p.toast.error('خطا ی شبکه', 'اتصال اینترنتتان را برسی کنید') }
    var toastServerError = () => { p.toast.warning('سرور در حال تعمیر', 'لطفا چند دقیقه دیگر امتحان کنید') }


    if (online() !== false) {

      Axios.interceptors.response.use(function (response) {
        p.setshowActivity(false)
        if (_show == false) { _show = true; setshow(true) }
        if (response.config.method !== 'get' && response.data?.message && (response.status === 200 || response.status === 201 || response.status === 'ok' || response.status === 'OK')) toastOK(response.data.message)
        return response
      }, function (error) {
        if (_show == false) { _show = true; setshow(true) }
        if (error['request']?.statusText === '' && error['request']?.status === 0 && error['request']?.response === '' && error['isAxiosError'] === true) {
          toastServerError()
          _show = false; setshow(false)
          p.setshowActivity(false)
        }
        else if (error?.response?.status) {
          p.setshowActivity(false)
          if (error.response.status > 400 && error.response.status <= 500) { toast500(); p.setshowActivity(false) };
          if (error.response.status === 400 && error.response.data) { toast400(error.response.data) };
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






}


export function allChildren({client, user, admin}) {  
  const _client =  ({ navigation, route }) => new clientController({ ...client, navigation, route })
  const _user =  ({ navigation, route }) => new userController({ ...user, navigation, route })
  const _admin =  ({ navigation, route }) => new adminController({ ...admin, navigation, route })
  const clientReducer = (props) => ({_client: _client(props)})
  const userReducer = (props) => ({ _user: _user(props) })
  const adminReducer = (props) => ({ _admin: _admin(props) })
  this.clientChildren = (Component, key) => ({
    children: (props) => {
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...client}>{client.showActivity && <Loading setshowActivity={client.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...client} {...clientReducer(props)} /></Layout>
    }
  })
  this.userChildren = (Component, key) => ({
    children: (props) => {
      useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const _user = token ? jwtDecode(token) : {}
          user.settokenValue(_user);
          if (props.route.params?.active === 'no' && (_user?.fullname)) return props.navigation.replace('Home')
          if (!props.route.params?.active && (!_user?.fullname)) return props.navigation.replace('Home')
        })
      }, [])
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...user}>{user.showActivity && <Loading setshowActivity={user.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...user} {...userReducer(props)} /></Layout>
    }
  })
  this.adminChildren = (Component, key) => ({
    children: (props) => {
      useEffect(() => {
        AsyncStorage.getItem("token").then((token) => {
          const user = token ? jwtDecode(token) : {}
          admin.settokenValue(user);
          if (!user?.isAdmin) return props.navigation.replace('Home')
        })
      }, [])
      useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })
      return <Layout _key={key} {...props} {...admin}>{admin.showActivity && <Loading setshowActivity={admin.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...admin} {...adminReducer(props)} /></Layout>
    }
  })

}












// export function allController(p) {
  
//   const _client =  ({ navigation, route }) => new clientController({ ...p, navigation, route })
//   const _user =  ({ navigation, route }) => new userController({ ...p, navigation, route })
//   const _admin =  ({ navigation, route }) => new adminController({ ...p, navigation, route })

//   const reducer = (props) => p.init &&
//   ({
//     _client: props.route.params?.key === 'client' ? _client(props) : {},
//     _user: props.route.params?.key === 'user' ? _user(props) : {},
//     _admin: props.route.params?.key === 'admin' ? _admin(props) : {},
//   })

//   this._children = (Component, key) => ({
//     children: (props) => {
//       useEffect(() => {
//         AsyncStorage.getItem("token").then((token) => {
//           const user = token ? jwtDecode(token) : {}
//           p.settokenValue(user);
//           if (props.route.params?.key === 'admin' && (!user?.isAdmin)) return props.navigation.replace('Home')
//           if (props.route.params?.active === 'no' && (user?.fullname)) return props.navigation.replace('Home')
//           if (props.route.params?.key === 'user' && !props.route.params?.active && (!user?.fullname)) return props.navigation.replace('Home')
//         })
//       }, [])

//       useEffect(() => { if (props.route.params?.id && !idValidator(props.route.params.id)) return props.navigation.navigate('NotFound') })

//       return <Layout _key={key} {...props} {...p}>{p.showActivity && <Loading setshowActivity={p.setshowActivity} pos='absolute' top={15} time={900000} />}<Component {...props} {...p} {...reducer(props)} /></Layout>
//     }
//   })
// }

export default function _useEffect(call, state) { useFocusEffect(useCallback(() => call(), state)) }
