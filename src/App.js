import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { Button, Dropdown, Img, Init, Span } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import { allController, _initController } from "./controllers/_initial";
import { propTypes, states, contextStates } from "./context/_context";
import ToastProvider, { Toast } from "./other/utils/toast";
import { Layout, header } from "./other/Layout/Layout";
import { rtl } from "./other/utils/rtl"
import { LogBox } from 'react-native';

import Home from './views/client/Home'
import ChildItems from './views/client/ChildItems'
import ChildOffers from "./views/client/ChildOffers";
import ChildPopulars from "./views/client/ChildPopulars";
import SingleItem from './views/client/SingleItem'
import BeforePayment from './views/client/BeforePayment'
import Location from "./views/client/Location";
import Map from "./views/client/Map";
import SetAddressInTehran from "./views/client/SetAddressInTehran";
import Payment from "./views/client/Payment";
import CreateComment from "./views/client/CreateComment";
import EditComment from "./views/client/EditComment";

import Register from "./views/user/Register";
import GetCode from "./views/user/GetCode";
import Login from "./views/user/Login";
import Profile from "./views/user/Profile";
import ForgetPass from "./views/user/ForgetPass";
import ResetPass from "./views/user/ResetPass";
import ResetSpecification from "./views/user/ResetSpecification";
import Logout from "./views/user/Logout";
import LastPayment from "./views/user/LastPayment";
import SendProposal from "./views/user/SendProposal";
import SendTicket from "./views/user/SendTicket";
import GetTicket from "./views/user/GetTicket";
import TicketBox from "./views/user/TicketBox";
import ShowActiveOrder from "./views/user/ShowActiveOrder";
import ShowLastOrder from "./views/user/ShowLastOrder";
import SavedItems from "./views/user/SavedItems";
import Rules from "./views/user/Rules";
import FramePayment from "./views/user/FramePayment";

import AddAdmin from "./views/admin/AddAdmin";
import Notifee from "./views/admin/Notifee";
import ChangeAdmin from "./views/admin/ChangeAdmin";
import DeleteAdmin from "./views/admin/DeleteAdmin";
import Address from "./views/admin/Address";
import AllPayment from "./views/admin/AllPayment";
import ListUnAvailable from "./views/admin/ListUnAvailable";
import GetProposal from "./views/admin/GetProposal";
import TableCategory from "./views/admin/TableCategory";
import TableChildItems from "./views/admin/TableChildItems";
import EditCategory from "./views/admin/EditCategory";
import EditChildItem from "./views/admin/EditChildItem";
import SetOffer from "./views/admin/SetOffer";
import CreateCategory from "./views/admin/CreateCategory";
import CreateChildItem from "./views/admin/CreateChildItem";
import ShowLatLngOnMap from "./views/admin/ShowLatLngOnMap";
import PanelAdmin from "./views/admin/PanelAdmin";
import Sellers from "./views/admin/Sellers";
import AddSeller from "./views/admin/AddSeller";
import CreateSlider from "./views/admin/CreateSlider";
import AdminTicketBox from "./views/admin/AdminTicketBox";
import SocketIo from "./socketIo/socketIo";
import reload from "./other/utils/reload";

rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Mobile = () => {
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState)
  const p = { ...allState, toast }
  _initController(p)
  const { _children } = new allController(p)

  const height = Platform.OS === 'web' ? '100vh' : '100%'


  try {


    return (
      <>
        <ToastProvider {...p} />
        {p.splash ?
          <>
            <Img src={p.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
            <Button outline mb={1} onClick={() => { reload() }} >بارگذاری مجدد</Button>
          </>
          :
          <Span h={height} w='100%' minw={280} onClick={() => { p.shownDropdown && p.setshownDropdown(false); p.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
            <contextStates.Provider value={p}>
              <Dropdown root {...p}><Span>{p.dropdownValue}</Span></Dropdown>
              <Init ref={(e) => allState.set$(e)} id={'s'} />
              <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
                <Tab.Group>
                  <Tab.Screen name="Home" options={{ title: 'home', headerShown: false }} {..._children(Home)} />
                  <Tab.Screen name="ChildItems" options={{ title: 'home', headerShown: false }} {..._children(ChildItems)} />
                  <Tab.Screen name="ChildOffers" options={{ title: 'home' }} {..._children(ChildOffers)} />
                  <Tab.Screen name="ChildPopulars" options={{ title: 'home' }} {..._children(ChildPopulars)} />
                  <Tab.Screen name="SingleItem" options={({ route }) => ({ title: 'route.params.title' })} {..._children(SingleItem)} />
                  <Tab.Screen name="BeforePayment" options={({ route }) => ({ title: 'route.params.title', headerStyle: { backgroundColor: '#ddd' } })} {..._children(BeforePayment)} />
                  <Tab.Screen name="Map" initialParams={{ map: false }} options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(Map)} />
                  <Tab.Screen name="Location" initialParams={{ map: false }} options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(Location)} />
                  <Tab.Screen name="SetAddressInTehran" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {..._children(SetAddressInTehran)} />
                  <Tab.Screen name="Payment" options={{ title: 'پرداخت' }} {..._children(Payment, '100')} />
                  <Tab.Screen name="CreateComment" options={{ title: 'پروفایل' }} {..._children(CreateComment)} />
                  <Tab.Screen name="EditComment" options={{ title: 'پروفایل' }} {..._children(EditComment)} />
                  <Tab.Screen name="SocketIo" options={{ title: 'پروفایل', headerShown: true }} {..._children(SocketIo)} />
                </Tab.Group>

                <Tab.Group screenOptions={{ headerShown: false }} >
                  <Tab.Screen name="Register" options={{ title: 'ثبت نام' }} {..._children(Register, '120')} />
                  <Tab.Screen name="GetCode" options={{ title: 'ثبت نام' }} {..._children(GetCode, '120')} />
                  <Tab.Screen name="Login" options={{ title: 'ورود' }} {..._children(Login, '120')} />
                  <Tab.Screen name="Profile" options={{ title: 'پروفایل' }} {..._children(Profile)} />
                  <Tab.Screen name="ForgetPass" options={{ title: 'فراموشی رمز عبور', headerShown: true, headerTitleStyle: { color: 'black', fontFamily:'IRANSansWeb', fontSize: 15 }, headerTitleAlign: 'center' }} {..._children(ForgetPass)} />
                  <Tab.Screen name="ResetPass" options={{ title: 'عوض کردن رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ResetPass)} />
                  <Tab.Screen name="ResetSpecification" options={{ title: 'عوض کردن رمز عبور', headerShown: true, headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {..._children(ResetSpecification)} />
                  <Tab.Screen name="Logout" options={{ title: 'خروج' }} {..._children(Logout)} />
                  <Tab.Screen name="SendProposal" options={{ headerShown: true, headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال نظرات و پیشنهادات' }} {..._children(SendProposal)} />
                  <Tab.Screen name="LastPayment" options={{ title: 'آخرین خرید' }} {..._children(LastPayment, '100')} />
                  <Tab.Screen name="SendTicket" options={{ title: 'ارسال تیکت' }} {..._children(SendTicket)} />
                  <Tab.Screen name="GetTicket" options={{ title: 'ارسال تیکت' }} {..._children(GetTicket)} />
                  <Tab.Screen name="TicketBox" options={{ title: 'ارسال تیکت' }} {..._children(TicketBox)} />
                  <Tab.Screen name="ShowActiveOrder" options={{ title: 'ارسال تیکت' }} {..._children(ShowActiveOrder)} />
                  <Tab.Screen name="ShowLastOrder" options={{ title: 'ارسال تیکت' }} {..._children(ShowLastOrder)} />
                  <Tab.Screen name="SavedItems" options={{ title: 'ارسال تیکت' }} {..._children(SavedItems)} />
                  <Tab.Screen name="Rules" options={{ title: 'ارسال تیکت', headerShown: true }} {..._children(Rules)} />
                  <Tab.Screen name="FramePayment" options={{ title: 'ارسال تیکت', headerShown: true }} {..._children(FramePayment)} />
                </Tab.Group>

                <Tab.Group>
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableCategory" options={{ title: 'پنل ادمین', headerShown: false }} {..._children(TableCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableChildItems" options={({ route }) => ({ title: 'route.params.title' })} {..._children(TableChildItems)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="EditCategory" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="EditChildItem" options={({ route }) => ({ title: 'route.params.title' })} {..._children(EditChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="SetOffer" options={({ route }) => ({ title: 'route.params.title' })} {..._children(SetOffer)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateCategory" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {..._children(CreateCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChildItem" options={({ route }) => ({ title: `ساخت دسته برای ${'route.params.title'}` })} {..._children(CreateChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {..._children(AddAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {..._children(Notifee)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {..._children(ChangeAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {..._children(DeleteAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AllPayment" options={{ title: 'حذف آدرس ها' }} {..._children(AllPayment)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین' }} {..._children(Address)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ListUnAvailable" options={{ title: 'لیست غذا ناموجود' }} {..._children(ListUnAvailable)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {..._children(GetProposal)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'PanelAdmin', headerShown: false }} {..._children(PanelAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Sellers" options={{ title: 'Sellers' }} {..._children(Sellers)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddSeller" options={{ title: 'AddSeller' }} {..._children(AddSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateSlider" options={{ title: 'CreateSlider' }} {..._children(CreateSlider)} />
                  <Tab.Screen name="AdminTicketBox" options={{ title: 'ارسال تیکت' }} {..._children(AdminTicketBox)} />
                  <Tab.Screen name="ShowLatLngOnMap" options={{ title: 'پروفایل', headerShown: false }} {..._children(ShowLatLngOnMap)} />
                </Tab.Group>

                <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {..._children(_404)} />
              </Tab.Navigator >
            </contextStates.Provider>
          </Span>
        }
      </>
    )

  } catch (error) {
    console.log(error);
  }
}


// propTypes(Home)
// propTypes(ChildItems)
// propTypes(ChildOffers)
// propTypes(ChildPopulars)
// propTypes(SingleItem)
// propTypes(BeforePayment)
// propTypes(SocketIo)
// propTypes(CreateComment)
// propTypes(EditComment)
// propTypes(LastPayment)
// propTypes(FramePayment)
// propTypes(Payment)
// propTypes(Location)
// propTypes(Map)

// propTypes(Register)
// propTypes(GetCode)
// propTypes(Login)
// propTypes(ForgetPass)
// propTypes(ResetPass)
// propTypes(ResetSpecification)
// propTypes(Logout)
// propTypes(SendProposal)
// propTypes(Profile)
// propTypes(setAddressInTehran)
// propTypes(SendTicket)
// propTypes(GetTicket)
// propTypes(TicketBox)
// propTypes(ShowActiveOrder)
// propTypes(ShowLastOrder)
// propTypes(SavedItems)
// propTypes(Rules)

// propTypes(TableCategory)
// propTypes(TableChildItems)
// propTypes(EditCategory)
// propTypes(EditChildItem)
// propTypes(SetOffer)
// propTypes(CreateCategory)
// propTypes(CreateChildItem)
// propTypes(AddAdmin)
// propTypes(Notifee)
// propTypes(ChangeAdmin)
// propTypes(DeleteAdmin)
// propTypes(AllPayment)
// propTypes(Address)
// propTypes(ListUnAvailable)
// propTypes(GetProposal)
// propTypes(PanelAdmin)
// propTypes(Sellers)
// propTypes(AddSeller)
// propTypes(CreateSlider)
// propTypes(AdminTicketBox)
// propTypes(ShowLatLngOnMap)


const linking = {
  // prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/home',
      ChildItems: '/childitems',
      ChildOffers: '/childoffers',
      ChildPopulars: '/childpopulars',
      SingleItem: '/singleitem/:id',
      BeforePayment: '/beforepayment',
      Location: '/location',
      Map: '/map',
      SocketIo: '/socketio',
      SetAddressInTehran: '/setaddressintehran',
      Payment: '/payment',
      CreateComment: '/createcomment',
      EditComment: '/editcomment',

      Register: '/register',
      GetCode: '/getCode',
      Login: '/login',
      ForgetPass: '/forgetpass',
      ResetPass: '/resetpass',
      ResetSpecification: '/resetspecification',
      Logout: '/logout',
      SendProposal: '/sendproposal',
      LastPayment: '/lastpayment',
      Profile: '/profile',
      SendTicket: '/sendTicket',
      GetTicket: '/getTicket',
      TicketBox: '/ticketBox',
      ShowActiveOrder: '/showActiveOrder',
      ShowLastOrder: '/showLastOrder',
      SavedItems: '/savedItems',
      Rules: '/rules',
      FramePayment: '/framepayment',

      AdminTicketBox: '/adminTicketBox',
      AddSeller: '/addSeller',
      CreateSlider: '/createslider',
      Sellers: '/sellers',
      PanelAdmin: '/paneladmin',
      AddAdmin: '/addadmin',
      Notifee: '/notifee',
      ChangeAdmin: '/changeadmin',
      DeleteAdmin: '/deleteadmin',
      AllPayment: '/allPayment',
      ListUnAvailable: '/listunAvailable',
      GetProposal: '/getproposal',
      Address: '/address',
      TableCategory: '/tableCategory',
      CreateCategory: '/createCategory',
      TableChildItems: '/tableChildItems',
      EditCategory: '/editCategory',
      EditChildItem: '/editchilditem',
      SetOffer: '/setOffer',
      CreateChildItem: '/createchilditem/:id',
      ShowLatLngOnMap: '/showlatlngonmap',
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



