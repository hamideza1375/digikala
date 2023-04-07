import React from 'react'
import { Column, Container, ContainerNavigation, FlatList, P, Span } from '../../other/Components/Html'
import moment from 'moment-jalaali';
import { Text, View } from 'react-native';
import spacePrice from '../../other/utils/spacePrice';

const CartAllPayment = (p) => {

  const containerColumn = { borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }

  return (
    p.item?.fullname ?
      <>
        <View style={[containerColumn, { paddingVertical: 0, paddingBottom: 20 }]} >
          <Text ><Text style={[{ fontWeight: 'bold', textAlign: 'left' }]} >نام: </Text>{p.item.fullname}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text >شماره تلفن: </Text><Text  >{p.item.phone}</Text></View>
        </View>
        <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
          <Text   ><Text >آدرس: </Text >{p.item.formattedAddress}</Text>
        </View>
        <View style={containerColumn} >
          <Text  ><Text style={{ fontWeight: 'bold' }} >پلاک: </Text>{p.item.plaque}</Text>
          <Text  ><Text style={{ fontWeight: 'bold' }} >طبقه: </Text>{p.item.unit}</Text>
          <Text  ><Text style={{ fontWeight: 'bold' }} >شماره: </Text>{p.item.id}</Text>
        </View>

        <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
          <Text   ><Text >اسامی سفارش: </Text >{p.item.titles}</Text>
        </View>

        <View style={containerColumn} >
          <Text  ><Text style={{ fontWeight: 'bold' }} >قیمت: </Text>{spacePrice(p.item.price)} تومان</Text>
          <Text style={{ color: '#ababab', }}>{moment(p.item.date).format('jYYYY/jM/jD hh:mm')}</Text>
          {/* <Text style={{ color: '#ababab', }}>{new Date().toString().split(" ")[4]}</Text> */}
        </View>
      </>
      :
      <></>
  )
}





const ShowLastOrder = (p) => {

  p._user.getLastPayment()

  return (
    <ContainerNavigation>
      <FlatList
        data={p.lastPayment}
        renderItem={({ item, index }) => (
          <View key={item._id} style={{
            alignSelf: 'center',
            borderWidth: .3,
            borderColor: '#888',
            width: '90%',
            marginVertical: 15,
            padding: 15,
            backgroundColor: '#f5f5f5',
            borderRadius: 4
          }}>
            <CartAllPayment {...p} item={item} />
          </View>
        )}
      />
    </ContainerNavigation>
  )
}

export default ShowLastOrder