import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react'
import { Platform, SafeAreaView, Pressable, View } from 'react-native';
import TopTab from '../Components/tabNavigation/TopTab';
import BottomTab from '../Components/tabNavigation/BottomTab';
import Drawer from '../Components/tabNavigation/Drawer';
import { Icon, SearchBar, Span } from '../Components/Html';

import HomePage from './page/HomePage';
import ChildItemPage from './page/ChildItemPage';
import ProfilePage from './page/ProfilePage';
import PanelAdminPage from './page/PanelAdminPage';


export const Layout = (p) => {

  // useFocusEffect(useCallback(() => {
  //   return () => {
  //     if (p._key === '100') { p.setnavigateProfile(p.route.name) }
  //     if (p._key === '120') { p.setnavigateUser(p.route.name) }
  //   }
  // }, []))
  const drawer = [{ name: 'Profile', title: 'پروفایل' }, { name: 'Logout', title: 'خروج از حساب کاربری' }]
  const topUser = [{ name: 'Register', title: 'ثبت نام' }, { name: 'Login', title: 'ورود' }]

  const drawer2 = [
    { name: 'AdminTitleAllFood', title: 'پنل ادمین' },
    { name: 'Address', title: 'فیش سفارشات' },
    { name: 'ListAvailable', title: 'لیست غذا های ناموجود' },
    { name: 'Notifee', title: 'ارسال نوتیفیکیشن' },
    { name: 'AddAdmin', title: 'اضافه کردن پیک موتوری' },
    { name: 'GetProposal', title: 'انتقادات و پیشنهادات' },
    { name: 'DeleteAdmin', title: 'قطع کردن دسترسی پیک موتوری' },
    { name: 'ChangeAdmin', title: 'تغییر ادمین' },
    { name: 'DeleteAllAddress', title: 'حذف تمام فیش ها' },
  ]


  let bottom = [{ title: 'Home', icon: 'home', navigate: null }]

  return (
    <View style={{ flex: 1, paddingHorizontal: Platform.OS === 'ios' ? (p.width > p.height ? 35 : 0) : 0 }} >
      <SafeAreaView />
      <View style={{ flex: 1, overflow: 'hidden' }}>
        {
          p.route.name === 'Login' && (
            <TopTab name={'Login'} group={topUser} >
              {p.children}
            </TopTab>
          )
          ||
          p.route.name === 'Register' && (
            <TopTab name={'Register'} group={topUser} >
              {p.children}
            </TopTab>
          )
          ||
          p.route.name === 'Home' &&
          <HomePage {...p} bottom={bottom} />
          ||
          p.route.name === 'ChildItems' &&
          <ChildItemPage {...p} bottom={bottom} />
          ||
          p.route.name === 'Profile' &&
          <ProfilePage {...p} bottom={bottom} />
          ||
          p.route.name === 'PanelAdmin' &&
          <PanelAdminPage {...p} bottom={bottom} />
          ||
          <View flex={1} >{p.children}</View>
        }
      </View>
    </View>
  )
}

export const header = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} >
      <Icon
        name='arrow-right'
        style={{ fontSize: 29, marginTop: -5, paddingVertical: 2.5, flexGrow: 1, color: '#222', fontWeight: '1000' }} />


    </Pressable>
  );
};
// getCurrentRoute
