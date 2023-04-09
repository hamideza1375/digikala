import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Platform, SafeAreaView, Pressable, View } from 'react-native';
import TopTab from '../Components/tabNavigation/TopTab';
import BottomTab from '../Components/tabNavigation/BottomTab';
import { Icon } from '../Components/Html';
import HomePage from './page/HomePage';
import ChildItemPage from './page/ChildItemPage';
import SingleItemPage from './page/SingleItemPage';
import TableChildItemsPage from './page/TableChildItemsPage';
import ProfilePage from './page/ProfilePage';
import PanelAdminPage from './page/PanelAdminPage';
import SellerPage from './page/SellersPage';
import SellerPanelPage from './page/SellerPanelPage';
import AddressPage from './page/AddressPage';
import ChildOffersPage from './page/ChildOffersPage';
import ChildPopulars from './page/ChildPopulars';


export const Layout = (p) => {

  const topUser = [{ name: 'Register', title: 'ثبت نام' }, { name: 'Login', title: 'ورود' }]

  let bottom
  bottom = p.tokenValue.fullname ?
    [
      { mainTitle: 'Home', title: ((p._key == '1') ? p.route.name : 'Home'), icon: 'home' },
      { title: 'Profile', icon: 'user-alt' },
      { title: 'BeforePayment', icon: 'shopping-cart' },
      { title: 'SocketIo', icon: 'comments' },
    ]
    :
    bottom = [
      { mainTitle: 'Home', title: ((p._key == '1') ? p.route.name : 'Home'), icon: 'home' },
      { title: 'Login', icon: 'user-alt' },
      { title: 'BeforePayment', icon: 'shopping-cart', navigate: 'Login', params: { payment: true } },
      { title: 'SocketIo', icon: 'comments' },
    ]

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
          p.route.name === 'ChildOffers' &&
          <ChildOffersPage {...p} bottom={bottom} />
          ||
          p.route.name === 'ChildPopulars' &&
          <ChildPopulars {...p} bottom={bottom} />
          ||
          p.route.name === 'TableChildItems' &&
          <TableChildItemsPage {...p} bottom={bottom} />
          ||
          p.route.name === 'SingleItem' &&
          <SingleItemPage {...p} bottom={bottom} />
          ||
          p.route.name === 'Profile' &&
          <ProfilePage {...p} bottom={bottom} />
          ||
          p.route.name === 'PanelAdmin' &&
          <PanelAdminPage {...p} bottom={bottom} />
          ||
          p.route.name === 'Sellers' &&
          <SellerPage {...p} bottom={bottom} />
          ||
          p.route.name === 'SellerPanel' &&
          <SellerPanelPage {...p} bottom={bottom} />
          ||
          p.route.name === 'Address' &&
          <AddressPage {...p} bottom={bottom} />
          ||
          <View flex={1} >{p.children}</View>
        }
      </View>
    </View>
  )
}
//! navigation.getState().routes[0].name

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
  //   if(navigation.getCurrentRoute() && navigation.getCurrentRoute().params && navigation.getCurrentRoute().params.key && (navigation.getCurrentRoute().params.key !== 'user')) _user = {}
// getCurrentRoute
