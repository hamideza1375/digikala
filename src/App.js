import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { Dropdown, Init, P, Span } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import { initialState } from "./state/initialState";
import { adminState } from "./state/adminState";
import { clientState } from "./state/clientState";
import { userState } from "./state/userState";
import { propTypes, states, contextStates } from "./state/context/contexts";
import ToastProvider, { Toast } from "./other/utils/toast";
import { Layout, header } from "./other/Layout/Layout";
import { rtl } from "./other/utils/rtl"
import { LogBox } from 'react-native';

import Home from './views/client/Home'
import ChildItems from './views/client/ChildItems'
import ChildOffers from "./views/client/ChildOffers";
import ChildPopulars from "./views/client/ChildPopulars";
import SingleItems from './views/client/SingleItems'
import BeforePayment from './views/client/BeforePayment'

import Register from "./views/user/Register";
import Login from "./views/user/Login";
import ForgetPass from "./views/user/ForgetPass";
import ResetPass from "./views/user/ResetPass";
import Logout from "./views/user/Logout";
import LastPayment from "./views/user/LastPayment";
import SendProposal from "./views/user/SendProposal";
import Payment from "./views/user/Payment";
import Location from "./views/user/Location";
import Profile from "./views/user/Profile";
import CreateComment from "./views/user/CreateComment";
import EditComment from "./views/user/EditComment";

import AddAdmin from "./views/admin/AddAdmin";
import Notifee from "./views/admin/Notifee";
import ChangeAdmin from "./views/admin/ChangeAdmin";
import DeleteAdmin from "./views/admin/DeleteAdmin";

import Address from "./views/admin/Address";
import DeleteAllAddress from "./views/admin/DeleteAllAddress";
import ListUnAvailable from "./views/admin/ListUnAvailable";
import GetProposal from "./views/admin/GetProposal";
import TableGroupItems from "./views/admin/TableGroupItems";
import TableChildItems from "./views/admin/TableChildItems";
import EditGroupItem from "./views/admin/EditGroupItem";
import EditChildItem from "./views/admin/EditChildItem";
import CreateGroupItem from "./views/admin/CreateGroupItem";
import CreateChildItem from "./views/admin/CreateChildItem";
import Chart from "./views/admin/Chart";
import PanelAdmin from "./views/admin/PanelAdmin";

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
    <Span h={height} w='100%' minw={280} onClick={() => { p.setshownDropdown(false);p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
      <contextStates.Provider value={p}>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        <Dropdown root {...p}>{p.dropdownValue}</Dropdown>
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
          <Tab.Group>

          <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'PanelAdmin' }} {..._children(PanelAdmin)} />
            <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
            <Tab.Screen name="ChildItems" options={{ title: 'home' }} {..._children(ChildItems)} />
            <Tab.Screen name="ChildOffers" options={{ title: 'home' }} {..._children(ChildOffers)} />
            <Tab.Screen name="ChildPopulars" options={{ title: 'home' }} {..._children(ChildPopulars)} />
            <Tab.Screen name="SingleItems" options={({ route }) => ({ title: 'route.params.title' })} {..._children(SingleItems)} />
            <Tab.Screen name="BeforePayment" options={({ route }) => ({ title: 'route.params.title', headerStyle: { backgroundColor: '#ddd' } })} {..._children(BeforePayment)} />
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
            <Tab.Screen initialParams={{ key: 'admin' }} name="TitleTable" options={{ title: 'پنل ادمین', headerShown: false }} {..._children(TableGroupItems)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="TableChildItems" options={({ route }) => ({ title: 'route.params.title', header: (props) => <Row bgcolor='#fff' style={{ shadowRadius: 7, shadowOpacity: .2, marginTop: Platform.OS === 'ios' ? 40 : 0, justifyContent: 'space-around' }} mb={5} ><Input alignSelf='center' mt={5} mb={2} w='80%' placeholderColor='red' iconColor='#777' border={[1, '#aaa']} icon='search' value={p.textSearch} onChangeText={(text) => { _food(props).sercher(text); p.settextSearch(text) }} placeholder="جستجو" /><Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, textAlign: 'center' }} size={27} /></Row> })} {..._children(TableChildItems)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditTitle" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditGroupItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditChild" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditChildItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateTitle" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {..._children(CreateGroupItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChild" options={({ route }) => ({ title: `ساخت دسته برای ${'route.params.title'}` })} {..._children(CreateChildItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {..._children(AddAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {..._children(Notifee)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {..._children(ChangeAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {..._children(DeleteAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAllAddress" options={{ title: 'حذف آدرس ها', headerShown: true, header: (props) => <Row fd={'row'} style={[Platform.OS === 'ios' && { marginTop: 40 }, { width: '100%', justifyContent: 'center', backgroundColor: '#fff', marginBottom: 8 }]} ><Input border={[1, '#888']} h={42} m={'auto'} mv={10} w={'85%'} alignSelf='center' value={p.textSearch} onChangeText={(text) => { p.settextSearch(text); const fd = p._address.filter(f => f.fullname.includes(text) || f.phone == text); p.setallAddress(fd) }} p="جستجو" icon={'search'} />{<Micon name='arrow-back' onPress={() => { props.navigation.navigate('AdminTitleAllFood') }} style={{ height: 42, width: 35, marginTop: 17, left: -5, textAlign: 'center' }} size={27} />}</Row> }} {..._children(DeleteAllAddress)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین' }} {..._children(Address)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ListAvailable" options={{ title: 'لیست غذا ناموجود' }} {..._children(ListUnAvailable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {..._children(GetProposal)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Chart" options={{ title: 'chart' }} {..._children(Chart)} />
            {/* <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'PanelAdmin' }} {..._children(PanelAdmin)} /> */}
          </Tab.Group>

          <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
        </Tab.Navigator >
      </contextStates.Provider>
    </Span>
  )
}


propTypes(Home)
// propTypes(ChildItems)
// propTypes(ChildOffers)
// propTypes(ChildPopulars)
// propTypes(SingleItems)
// propTypes(BeforePayment)

// propTypes(Register)
// propTypes(Login)
// propTypes(ForgetPass)
// propTypes(ResetPass)
// propTypes(Logout)
// propTypes(SendProposal)
// propTypes(LastPayment)
// propTypes(Profile)
// propTypes(Payment)
// propTypes(Location)
// propTypes(CreateComment)
// propTypes(EditComment)

// propTypes(TableGroupItems)
// propTypes(TableChildItems)
// propTypes(EditGroupItem)
// propTypes(EditChildItem)
// propTypes(CreateGroupItem)
// propTypes(CreateChildItem)
// propTypes(AddAdmin)
// propTypes(Notifee)
// propTypes(ChangeAdmin)
// propTypes(DeleteAdmin)
// propTypes(DeleteAllAddress)
// propTypes(Address)
// propTypes(ListUnAvailable)
// propTypes(GetProposal)
// propTypes(Chart)
// propTypes(PanelAdmin)


const linking = {
  // prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/home',
      ChildItems: '/childitems',
      ChildOffers: '/childoffers',
      ChildPopulars: '/childpopulars',
      SingleItems: '/singleitems',
      BeforePayment: '/beforepayment',

      Register: '/register',
      Login: '/login',
      ForgetPass: '/forgetpass',
      ResetPass: '/resetpass',
      Logout: '/logout',
      SendProposal: '/sendproposal',
      LastPayment: '/lastpayment',
      Profile: '/profile',
      Location: '/location',
      Payment: '/payment',
      CreateComment: '/createcomment',
      EditComment: '/editcomment',

      PanelAdmin: '/paneladmin',
      AddAdmin: '/addadmin',
      Notifee: '/notifee',
      Chart: '/chart',
      ChangeAdmin: '/changeadmin',
      DeleteAdmin: '/deleteadmin',
      DeleteAllAddress: '/deletealladdress',
      ListUnAvailable: '/listunAvailable',
      GetProposal: '/getproposal',
      Address: '/address',
      TableGroupItems: '/tablegroupitems',
      CreateGroupItem: '/creategroupItem',
      TableChildItems: '/tablechilditems:id',
      EditGroupItem: '/editgroupitem:id',
      EditChildItem: '/editchilditem:id',
      CreateChildItem: '/createchilditem:id',
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



