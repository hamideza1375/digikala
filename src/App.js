import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { View, Platform } from "react-native";
import { Button, Div, Form, Icon, Init, P, SearchBar, Span } from "./Components/Html";
import _404 from "./Components/404/404";
import { initialState } from "./state/initialState";
import { adminState } from "./state/adminState";
import { clientState } from "./state/clientState";
import { userState } from "./state/userState";
import { propTypes, states, contextStates } from "./state/context/contexts";
import ToastProvider, { Toast } from "./utils/toast";
import { Layout, header } from "./Components/Layout/Layout";
import { rtl } from "./utils/rtl"
import { LogBox } from 'react-native';

import Home from './screens/client/Home'
import ChildItems from './screens/client/ChildItems'
import ChildOffers from "./screens/client/ChildOffers";
import ChildPopulars from "./screens/client/ChildPopulars";
import SingleItems from './screens/client/SingleItems'
import BeforePayment from './screens/client/BeforePayment'

import Register from "./screens/user/Register";
import Login from "./screens/user/Login";
import ForgetPass from "./screens/user/ForgetPass";
import ResetPass from "./screens/user/ResetPass";
import Logout from "./screens/user/Logout";
import LastPayment from "./screens/user/LastPayment";
import SendProposal from "./screens/user/SendProposal";
import Payment from "./screens/user/Payment";
import Location from "./screens/user/Location";
import Profile from "./screens/user/Profile";
import CreateComment from "./screens/user/CreateComment";
import EditComment from "./screens/user/EditComment";

import AddAdmin from "./screens/admin/AddAdmin";
import Notifee from "./screens/admin/Notifee";
import ChangeAdmin from "./screens/admin/ChangeAdmin";
import DeleteAdmin from "./screens/admin/DeleteAdmin";

import Address from "./screens/admin/Address";
import DeleteAllAddress from "./screens/admin/DeleteAllAddress";
import ListAvailable from "./screens/admin/ListAvailable";
import GetProposal from "./screens/admin/GetProposal";
import TitleTable from "./screens/admin/TitleTable";
import ChildTable from "./screens/admin/ChildTable";
import EditTitle from "./screens/admin/EditTitle";
import EditChild from "./screens/admin/EditChild";
import CreateTitle from "./screens/admin/CreateTitle";
import CreateChild from "./screens/admin/CreateChild";
import chart from "./screens/admin/chart";
// import GetProposal from "./screens/admin/DeleteTitle";

rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Mobile = () => {
  const navigation = useNavigation()
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  initialState(p)
  const _food = ({ navigation, route }) => new clientState({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userState({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminState({ ...p, navigation, route })
  const reducer = (props) => ({ _food: _food(props), _user: _user(props), _admin: _admin(props), })

  const _children = (Component, key) => ({ children: (props) => <Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })



  useEffect(() => {
    p.$input.set('a', 'a');
  }, [])


  const height = Platform.OS === 'web' ? '100vh' : '100%'
  return (
    <Span h={height} w='100%' onClick={() => { p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
      <contextStates.Provider value={p}>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
          <Tab.Group>
            <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
            <Tab.Screen name="ChildItems" options={{title: 'home'}} {..._children(ChildItems)} />
            <Tab.Screen name="ChildOffers" options={{title: 'home'}} {..._children(ChildOffers)} />
            <Tab.Screen name="ChildPopulars" options={{title: 'home'}} {..._children(ChildPopulars)} />
            <Tab.Screen name="SingleItems" options={({ route }) => ({ title: 'route.params.title' })} {..._children(SingleItems)} />
            <Tab.Screen name="BeforePayment" options={({ route }) => ({ title: 'route.params.title' })} {..._children(BeforePayment)} />
          </Tab.Group>

          <Tab.Group screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Register" options={{ title: 'ثبت نام' }} {..._children(Register, '120')} />
            <Tab.Screen name="Login" options={{ title: 'ورود' }} {..._children(Login, '120')} />
            <Tab.Screen name="ForgetPass" options={{ title: 'فراموشی رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ForgetPass)} />
            <Tab.Screen name="ResetPass" options={{ title: 'عوض کردن رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ResetPass)} />
            <Tab.Screen name="Logout" options={{ title: 'خروج' }} {..._children(Logout)} />
            <Tab.Screen name="SendProposal" options={{ headerShown: true, headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال نظرات و پیشنهادات' }} {..._children(SendProposal)} />
            <Tab.Screen name="LastPayment" options={{ title: 'آخرین خرید' }} {..._children(LastPayment, '100')} />
            <Tab.Screen name="Payment" options={{ title: 'پرداخت' }} {..._children(Payment, '100')} />
            <Tab.Screen name="Location" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(Location)} />
            <Tab.Screen name="Profile" options={{ title: 'پروفایل' }} {..._children(Profile)} />
            <Tab.Screen name="CreateComment" options={{ title: 'پروفایل' }} {..._children(CreateComment)} />
            <Tab.Screen name="EditComment" options={{ title: 'پروفایل' }} {..._children(EditComment)} />
          </Tab.Group>

          <Tab.Group>
            <Tab.Screen initialParams={{ key: 'admin' }} name="TitleTable" options={{ title: 'پنل ادمین', headerShown: false }} {..._children(TitleTable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ChildTable" options={({ route }) => ({ title: 'route.params.title', header: (props) => <Row bgcolor='#fff' style={{ shadowRadius: 7, shadowOpacity: .2, marginTop: Platform.OS === 'ios' ? 40 : 0, justifyContent: 'space-around' }} mb={5} ><Input alignSelf='center' mt={5} mb={2} w='80%' placeholderColor='red' iconColor='#777' border={[1, '#aaa']} icon='search' value={p.textSearch} onChangeText={(text) => { _food(props).sercher(text); p.settextSearch(text) }} placeholder="جستجو" /><Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, textAlign: 'center' }} size={27} /></Row> })} {..._children(ChildTable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditTitle" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditTitle)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditChild" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditChild)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateTitle" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {..._children(CreateTitle)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChild" options={({ route }) => ({ title: `ساخت دسته برای ${'route.params.title'}` })} {..._children(CreateChild)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {..._children(AddAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {..._children(Notifee)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {..._children(ChangeAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {..._children(DeleteAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAllAddress" options={{ title: 'حذف آدرس ها', headerShown: true, header: (props) => <Row fd={'row'} style={[Platform.OS === 'ios' && { marginTop: 40 }, { width: '100%', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 8 }]} ><Input border={[1, '#888']} h={42} m={'auto'} mv={10} w={'85%'} alignSelf='center' value={p.textSearch} onChangeText={(text) => { p.settextSearch(text); const fd = p._address.filter(f => f.fullname.includes(text) || f.phone == text); p.setallAddress(fd) }} p="جستجو" icon={'search'} />{<Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, left: -5, textAlign: 'center' }} size={27} />}</Row> }} {..._children(DeleteAllAddress)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین' }} {..._children(Address)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ListAvailable" options={{ title: 'لیست غذا ناموجود' }} {..._children(ListAvailable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {..._children(GetProposal)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="chart" options={{ title: 'chart' }} {..._children(chart)} />
          </Tab.Group>
          
          <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
        </Tab.Navigator >
      </contextStates.Provider>
    </Span>
  )
}


propTypes(Home)
propTypes(ChildItems)
propTypes(ChildOffers)
propTypes(ChildPopulars)
propTypes(SingleItems)
propTypes(BeforePayment)

propTypes(Register)
propTypes(Login)
propTypes(ForgetPass)
propTypes(ResetPass)
propTypes(Logout)
propTypes(SendProposal)
propTypes(LastPayment)
propTypes(Profile)
propTypes(Payment)
propTypes(Location)
propTypes(CreateComment)
propTypes(EditComment)

propTypes(TitleTable)
propTypes(ChildTable)
propTypes(EditTitle)
propTypes(EditChild)
propTypes(CreateTitle)
propTypes(CreateChild)
propTypes(AddAdmin)
propTypes(Notifee)
propTypes(ChangeAdmin)
propTypes(DeleteAdmin)
propTypes(DeleteAllAddress)
propTypes(Address)
propTypes(ListAvailable)
propTypes(GetProposal)
propTypes(chart)


const linking = {
  prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/Home',
      ChildItems: '/ChildItems',
      ChildOffers: '/ChildOffers',
      ChildPopulars: '/ChildPopulars',
      SingleItems: '/SingleItems',
      // SingleItems: '/SingleItems:id',
      BeforePayment: '/BeforePayment',

      Register: '/Register',
      Login: '/Login',
      ForgetPass: '/ForgetPass',
      ResetPass: '/ResetPass',
      Logout: '/Logout',
      SendProposal: '/SendProposal',
      LastPayment: '/LastPayment',
      Profile: '/Profile',
      Location: '/Location',
      Payment: '/Payment',
      CreateComment: '/CreateComment',
      EditComment: '/EditComment',

      AddAdmin: '/AddAdmin',
      Notifee: '/Notifee',
      ChangeAdmin: '/ChangeAdmin',
      DeleteAdmin: '/DeleteAdmin',
      DeleteAllAddress: '/DeleteAllAddress',
      ListAvailable: '/ListAvailable',
      GetProposal: '/GetProposal',
      Address: '/Address',
      TitleTable: '/TitleTable',
      CreateTitle: '/CreateTitle',
      ChildTable: '/ChildTable:id',
      EditTitle: '/EditTitle:id',
      EditChild: '/EditChild:id',
      CreateChild: '/CreateChild:id',
      NotFound: '*'
    },
  },
};



let App
if (Platform.OS !== 'web') {
  App = () => {
    return (
      <NavigationContainer>
        <Mobile />
      </NavigationContainer>
    )
  }
}
else {
  App = () => {
    return (
      <NavigationContainer linking={linking} >
        <View flex={1} style={{ minHeight: '100vh' }} dir='rtl' >
          <Mobile />
        </View>
      </NavigationContainer>
    )
  }
}

export default App;



