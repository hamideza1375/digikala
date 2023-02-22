import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { Dropdown, Init, Input, P, Row, Span } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import { initialController } from "./controllers/initialController";
import { adminController } from "./controllers/adminController";
import { clientController } from "./controllers/clientController";
import { userController } from "./controllers/userController";
import { propTypes, states, contextStates } from "./context/contexts";
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
import Location from "./views/client/Location";
import Payment from "./views/client/Payment";
import CreateComment from "./views/client/CreateComment";
import EditComment from "./views/client/EditComment";

import Register from "./views/user/Register";
import Login from "./views/user/Login";
import Profile from "./views/user/Profile";
import ForgetPass from "./views/user/ForgetPass";
import ResetPass from "./views/user/ResetPass";
import Logout from "./views/user/Logout";
import LastPayment from "./views/user/LastPayment";
import SendProposal from "./views/user/SendProposal";
import SendTicket from "./views/user/SendTicket";
import GetTicket from "./views/user/GetTicket";
import TicketBox from "./views/user/TicketBox";
import ShowActiveOrder from "./views/user/ShowActiveOrder";
import ShowLastOrder from "./views/user/ShowLastOrder";
import SavedItems from "./views/user/SavedItems";
import CommentsPosted from "./views/user/CommentsPosted";

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
import PanelAdmin from "./views/admin/PanelAdmin";
import Sellers from "./views/admin/Sellers";
import AddSeller from "./views/admin/AddSeller";
import AdminGetTicket from "./views/admin/AdminGetTicket";

rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Mobile = () => {
  const navigation = useNavigation()
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  initialController(p)
  const _client = ({ navigation, route }) => new clientController({ ...p, navigation, route })
  const _user = ({ navigation, route }) => new userController({ ...p, navigation, route })
  const _admin = ({ navigation, route }) => new adminController({ ...p, navigation, route })
  const reducer = (props) => ({ _client: _client(props), _user: _user(props), _admin: _admin(props), })

  const _children = (Component, key) => ({ children: (props) => <Layout _key={key} {...props} {...p}><Component {...props} {...p} {...reducer(props)} /></Layout> })



  useEffect(() => {
    p.$input.set('a', 'a');
  }, [])


  const height = Platform.OS === 'web' ? '100vh' : '100%'
  return (
    <Span h={height} w='100%' minw={280} onClick={() => { p.setshownDropdown(false); p.$input.get('dropdownDrawer')?.current.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
      <contextStates.Provider value={p}>
        <Dropdown root {...p}><Span>{p.dropdownValue}</Span></Dropdown>
        <Init ref={(e) => allState.set$(e)} id={'s'} />
        <ToastProvider {...p} />
        <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
          <Tab.Group>
            <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
            <Tab.Screen name="ChildItems" options={{ title: 'home' }} {..._children(ChildItems)} />
            <Tab.Screen name="ChildOffers" options={{ title: 'home' }} {..._children(ChildOffers)} />
            <Tab.Screen name="ChildPopulars" options={{ title: 'home' }} {..._children(ChildPopulars)} />
            <Tab.Screen name="SingleItems" options={({ route }) => ({ title: 'route.params.title' })} {..._children(SingleItems)} />
            <Tab.Screen name="BeforePayment" options={({ route }) => ({ title: 'route.params.title', headerStyle: { backgroundColor: '#ddd' } })} {..._children(BeforePayment)} />
            <Tab.Screen name="Location" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(Location)} />
            <Tab.Screen name="Payment" options={{ title: 'پرداخت' }} {..._children(Payment, '100')} />
            <Tab.Screen name="CreateComment" options={{ title: 'پروفایل' }} {..._children(CreateComment)} />
            <Tab.Screen name="EditComment" options={{ title: 'پروفایل' }} {..._children(EditComment)} />
          </Tab.Group>

          <Tab.Group screenOptions={{ headerShown: false }} >
            <Tab.Screen name="Register" options={{ title: 'ثبت نام' }} {..._children(Register, '120')} />
            <Tab.Screen name="Login" options={{ title: 'ورود' }} {..._children(Login, '120')} />
            <Tab.Screen name="Profile" options={{ title: 'پروفایل' }} {..._children(Profile)} />
            <Tab.Screen name="ForgetPass" options={{ title: 'فراموشی رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ForgetPass)} />
            <Tab.Screen name="ResetPass" options={{ title: 'عوض کردن رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ResetPass)} />
            <Tab.Screen name="Logout" options={{ title: 'خروج' }} {..._children(Logout)} />
            <Tab.Screen name="SendProposal" options={{ headerShown: true, headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال نظرات و پیشنهادات' }} {..._children(SendProposal)} />
            <Tab.Screen name="LastPayment" options={{ title: 'آخرین خرید' }} {..._children(LastPayment, '100')} />
            <Tab.Screen name="SendTicket" options={{ title: 'ارسال تیکت' }} {..._children(SendTicket)} />
            <Tab.Screen name="GetTicket" options={{ title: 'ارسال تیکت' }} {..._children(GetTicket)} />
            <Tab.Screen name="TicketBox" options={{ title: 'ارسال تیکت' }} {..._children(TicketBox)} />
            <Tab.Screen name="ShowActiveOrder" options={{ title: 'ارسال تیکت' }} {..._children(ShowActiveOrder)} />
            <Tab.Screen name="ShowLastOrder" options={{ title: 'ارسال تیکت' }} {..._children(ShowLastOrder)} />
            <Tab.Screen name="SavedItems" options={{ title: 'ارسال تیکت' }} {..._children(SavedItems)} />
            <Tab.Screen name="CommentsPosted" options={{ title: 'ارسال تیکت' }} {..._children(CommentsPosted)} />
          </Tab.Group>

          <Tab.Group>
            <Tab.Screen initialParams={{ key: 'admin' }} name="TableGroupItems" options={{ title: 'پنل ادمین', headerShown: false }} {..._children(TableGroupItems)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="TableChildItems" options={({ route }) => ({ title: 'route.params.title' })} {..._children(TableChildItems)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditGroupItem" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditGroupItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="EditChildItem" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditChildItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateGroupItem" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {..._children(CreateGroupItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChildItem" options={({ route }) => ({ title: `ساخت دسته برای ${'route.params.title'}` })} {..._children(CreateChildItem)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {..._children(AddAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {..._children(Notifee)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {..._children(ChangeAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {..._children(DeleteAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAllAddress" options={{ title: 'حذف آدرس ها' }} {..._children(DeleteAllAddress)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین' }} {..._children(Address)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="ListUnAvailable" options={{ title: 'لیست غذا ناموجود' }} {..._children(ListUnAvailable)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {..._children(GetProposal)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'PanelAdmin' }} {..._children(PanelAdmin)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="Sellers" options={{ title: 'Sellers' }} {..._children(Sellers)} />
            <Tab.Screen initialParams={{ key: 'admin' }} name="AddSeller" options={{ title: 'AddSeller' }} {..._children(AddSeller)} />
            <Tab.Screen name="AdminGetTicket" options={{ title: 'ارسال تیکت' }} {..._children(AdminGetTicket)} />
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
// propTypes(SendTicket)
// propTypes(GetTicket)
// propTypes(TicketBox)
// propTypes(ShowActiveOrder)
// propTypes(ShowLastOrder)
// propTypes(SavedItems)
// propTypes(CommentsPosted)

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
// propTypes(PanelAdmin)
// propTypes(Sellers)
// propTypes(AddSeller)
// propTypes(AdminGetTicket)


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
      SendTicket: '/sendTicket',
      GetTicket: '/getTicket',
      TicketBox: '/ticketBox',
      ShowActiveOrder: '/showActiveOrder',
      ShowLastOrder: '/showLastOrder',
      SavedItems: '/savedItems',
      CommentsPosted: '/commentsPosted',

      AdminGetTicket: '/adminGetTicket',
      AddSeller: '/addSeller',
      Sellers: '/sellers',
      PanelAdmin: '/paneladmin',
      AddAdmin: '/addadmin',
      Notifee: '/notifee',
      ChangeAdmin: '/changeadmin',
      DeleteAdmin: '/deleteadmin',
      DeleteAllAddress: '/deletealladdress',
      ListUnAvailable: '/listunAvailable',
      GetProposal: '/getproposal',
      Address: '/address',
      TableGroupItems: '/tablegroupitems',
      CreateGroupItem: '/creategroupItem',
      TableChildItems: '/tableChildItems',
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



