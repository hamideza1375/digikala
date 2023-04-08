import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { View, Platform } from "react-native";
import { Button, Dropdown, Img, Init, Span } from "./other/Components/Html";
import _404 from "./other/Components/404/404";
import { allChildren, _initController } from "./controllers/_initial";
import { states, contextStates } from "./context/_context";
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
import QuitsForSeller from "./views/admin/QuitsForSeller";
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
import SendPostPrice from "./views/admin/SendPostPrice";
import PanelAdmin from "./views/admin/PanelAdmin";
import Sellers from "./views/admin/Sellers";
import AddSeller from "./views/admin/AddSeller";
import CreateSlider from "./views/admin/CreateSlider";
import AdminTicketBox from "./views/admin/AdminTicketBox";
import SocketIo from "./socketIo/socketIo";
import reload from "./other/utils/reload";
import SellerPanel from "./views/user/SellerPanel";
import { adminController } from "./controllers/adminController";
import { initialPropType } from "./context/_initialState";
import { clientController } from "./controllers/clientController";
import { userController } from "./controllers/userController";

rtl()
LogBox.ignoreAllLogs();



const Tab = createNativeStackNavigator()
const Mobile = () => {
  let icon = Platform.OS === 'ios' ? { headerLeft: header } : {}
  const allState = states()
  const toast = new Toast(allState.client)
  const p = { ...allState.client, ...allState.user, ...allState.admin, toast }
  const { clientChildren, userChildren, adminChildren } = new allChildren({ client: { ...allState.client, toast }, user: { ...allState.user, toast }, admin: { ...allState.admin, toast } })
  const height = Platform.OS === 'web' ? '100vh' : '100%'
  _initController({ ...allState.init, toast })
  const _admin = new adminController({ ...allState.admin, toast })
  _admin.getPostPrice()
  const _user = new userController({ ...allState.user, toast })
  _user.sendTicketNotifeeAndSeen()
  const _client = new clientController({ ...allState.client, toast })
  _client.getSlider()
  _client.getSendStatus()
  _client.getNotifee()
  _client.seenAndSendNotificationForSocketIo()

  try {
    return (
      <>
        <ToastProvider {...allState.init} />
        {allState.init.splash ?
          <>
            <Img src={allState.init.logoUrl} f={1} style={{ resizeMode: 'stretch' }} />
            <Button outline mb={1} onClick={() => { reload() }} >بارگذاری مجدد</Button>
          </>
          :
          <Span h={height} w='100%' minw={280} onClick={() => { allState.init.shownDropdown && allState.init.setshownDropdown(false); allState.init.$input.get('dropdownDrawer')?.current?.setNativeProps({ style: { display: 'flex', transform: [{ scale: 0 }] } }) }}>
            <contextStates.Provider value={allState.init}>
              <Dropdown root {...allState.init}><Span>{allState.init.dropdownValue}</Span></Dropdown>
              <Init ref={(e) => allState.init.set$(e)} id={'s'} />
              <Tab.Navigator screenOptions={() => { return { headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center', ...icon } }} >
                <Tab.Group>
                  <Tab.Screen initialParams={{ key: 'client' }} name="Home" options={{ title: 'home', headerShown: false }} {...clientChildren(Home, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildItems" options={{ title: 'home', headerShown: false }} {...clientChildren(ChildItems, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildOffers" options={{ title: 'home', headerShown: false }} {...clientChildren(ChildOffers, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="ChildPopulars" options={{ title: 'home', headerShown: false }} {...clientChildren(ChildPopulars, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SingleItem" options={({ route }) => ({ title: 'route.params.title', headerShown: false })} {...clientChildren(SingleItem, '1')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="BeforePayment" options={({ route }) => ({ title: `هزینه ی ارسال به سراسر ایران فقط ${allState.init.postPrice} تومان`, headerStyle: { backgroundColor: '#ddd' } })} {...clientChildren(BeforePayment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="Map" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(Map)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="Location" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(Location)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SetAddressInTehran" options={{ title: 'نقشه', headerShown: Platform.OS !== 'ios' ? false : true }} {...clientChildren(SetAddressInTehran)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="Payment" options={{ title: 'پرداخت' }} {...clientChildren(Payment, '100')} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="CreateComment" options={{ title: 'پروفایل' }} {...clientChildren(CreateComment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="EditComment" options={{ title: 'پروفایل' }} {...clientChildren(EditComment)} />
                  <Tab.Screen initialParams={{ key: 'client' }} name="SocketIo" options={{ title: 'پروفایل', headerShown: true }} {...clientChildren(SocketIo)} />
                </Tab.Group>

                <Tab.Group >
                  <Tab.Screen initialParams={{ key: 'user', page: 'register' }} name="Register" options={{ title: 'ثبت نام' }} {...userChildren(Register)} />
                  <Tab.Screen initialParams={{ key: 'user', page: 'login' }} name="Login" options={{ title: 'ورود' }} {...userChildren(Login)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="GetCode" options={{ title: 'ثبت نام' }} {...userChildren(GetCode)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ForgetPass" options={{ title: 'فراموشی رمز عبور', headerTitleStyle: { color: 'black', fontFamily: 'IRANSansWeb', fontSize: 15 }, headerTitleAlign: 'center' }} {...userChildren(ForgetPass)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ResetPass" options={{ title: 'عوض کردن رمز عبور', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetPass)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="Logout" options={{ title: 'خروج' }} {...userChildren(Logout)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="Rules" options={{ title: 'ارسال تیکت', }} {...userChildren(Rules)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="Profile" options={{ title: 'پروفایل', headerShown: false }} {...userChildren(Profile)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SellerPanel" options={{ title: 'پروفایل', headerShown: false }} {...userChildren(SellerPanel)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ResetSpecification" options={{ title: 'عوض کردن رمز عبور', headerTitleStyle: { color: 'transparent' }, headerTitleAlign: 'center' }} {...userChildren(ResetSpecification)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SendProposal" options={{ headerTitleStyle: { color: '#222', fontFamily: 'IRANSansWeb', fontSize: 15 }, title: 'ارسال نظرات و پیشنهادات' }} {...userChildren(SendProposal)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="LastPayment" options={{ title: 'آخرین خرید' }} {...userChildren(LastPayment)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SendTicket" options={{ title: 'ارسال تیکت' }} {...userChildren(SendTicket)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="GetTicket" options={{ title: 'ارسال تیکت' }} {...userChildren(GetTicket)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="TicketBox" options={{ title: 'ارسال تیکت' }} {...userChildren(TicketBox)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ShowActiveOrder" options={{ title: 'ارسال تیکت' }} {...userChildren(ShowActiveOrder)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="ShowLastOrder" options={{ title: 'ارسال تیکت' }} {...userChildren(ShowLastOrder)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="SavedItems" options={{ title: 'ارسال تیکت' }} {...userChildren(SavedItems)} />
                  <Tab.Screen initialParams={{ key: 'user' }} name="FramePayment" options={{ title: 'ارسال تیکت', }} {...userChildren(FramePayment)} />
                </Tab.Group>

                <Tab.Group>
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableCategory" options={{ title: 'پنل ادمین', headerShown: false }} {...adminChildren(TableCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="TableChildItems" options={({ route }) => ({ title: 'route.params.title', headerShown: false })} {...adminChildren(TableChildItems)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="EditCategory" options={({ route }) => ({ title: 'route.params.title' })} {...adminChildren(EditCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="EditChildItem" options={({ route }) => ({ title: 'route.params.title' })} {...adminChildren(EditChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="SetOffer" options={({ route }) => ({ title: 'route.params.title' })} {...adminChildren(SetOffer)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateCategory" options={({ route }) => ({ title: 'ساخت دسته ی اغذیه' })} {...adminChildren(CreateCategory)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateChildItem" options={({ route }) => ({ title: `ساخت دسته برای ${'route.params.title'}` })} {...adminChildren(CreateChildItem)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddAdmin" options={{ title: 'اضافه کردن ادمین' }} {...adminChildren(AddAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Notifee" options={{ title: 'ارسال نوتیفیکیشن' }} {...adminChildren(Notifee)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ChangeAdmin" options={{ title: 'تعویض ادمین' }} {...adminChildren(ChangeAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="DeleteAdmin" options={{ title: 'حذف ادمین' }} {...adminChildren(DeleteAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AllPayment" options={{ title: 'حذف آدرس ها' }} {...adminChildren(AllPayment)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Address" options={{ title: 'اضافه کردن ادمین', headerShown: false }} {...adminChildren(Address)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="QuitsForSeller" options={{ title: 'اضافه کردن ادمین', headerShown: false }} {...adminChildren(QuitsForSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ListUnAvailable" options={{ title: 'لیست غذا ناموجود' }} {...adminChildren(ListUnAvailable)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="GetProposal" options={{ title: 'ارسال نظرات و پیشنهادات' }} {...adminChildren(GetProposal)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="PanelAdmin" options={{ title: 'PanelAdmin', headerShown: false }} {...adminChildren(PanelAdmin)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="Sellers" options={{ title: 'Sellers', headerShown: false }} {...adminChildren(Sellers)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AddSeller" options={{ title: 'AddSeller' }} {...adminChildren(AddSeller)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="CreateSlider" options={{ title: 'CreateSlider' }} {...adminChildren(CreateSlider)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="AdminTicketBox" options={{ title: 'ارسال تیکت' }} {...adminChildren(AdminTicketBox)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="ShowLatLngOnMap" options={{ title: 'پروفایل', headerShown: false }} {...adminChildren(ShowLatLngOnMap)} />
                  <Tab.Screen initialParams={{ key: 'admin' }} name="SendPostPrice" options={{ title: 'پروفایل', headerShown: false }} {...adminChildren(SendPostPrice)} />
                </Tab.Group>

                <Tab.Screen name="NotFound" options={{ title: '404', headerShown: false }} {...clientChildren(_404)} />
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


// initialPropType(Home)
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
// propTypes(SellerPanel)
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
// propTypes(QuitsForSeller)
// propTypes(ListUnAvailable)
// propTypes(GetProposal)
// propTypes(PanelAdmin)
// propTypes(Sellers)
// propTypes(AddSeller)
// propTypes(CreateSlider)
// propTypes(AdminTicketBox)
// propTypes(ShowLatLngOnMap)
// propTypes(SendPostPrice)


const linking = {
  // prefixes: ['localhost:3000://', 'http://localhost:3000'],
  config: {
    screens: {
      Home: '/home',
      ChildItems: '/childitems/:id',
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
      SellerPanel: '/sellerpanel',
      SendTicket: '/sendticket',
      GetTicket: '/getticket',
      TicketBox: '/ticketbox',
      ShowActiveOrder: '/showactiveorder',
      ShowLastOrder: '/showlastorder',
      SavedItems: '/saveditems',
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
      AllPayment: '/allpayment',
      ListUnAvailable: '/listunavailable',
      GetProposal: '/getproposal',
      Address: '/address',
      QuitsForSeller: '/quitsforseller',
      TableCategory: '/tablecategory',
      CreateCategory: '/createcategory',
      TableChildItems: '/tablechildItems',
      EditCategory: '/editcategory',
      EditChildItem: '/editchilditem',
      SetOffer: '/setoffer',
      CreateChildItem: '/createchilditem/:id',
      ShowLatLngOnMap: '/showlatlngonmap',
      SendPostPrice: '/sendpostprice',
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



