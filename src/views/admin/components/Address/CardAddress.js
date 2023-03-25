import moment from 'moment-jalaali';
import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native';
import { Button } from '../../../../other/Components/Html';
import spacePrice from '../../../../other/utils/spacePrice';

const CardAddress = (p) => {
  const postedOrder = (_id) => p._admin.postedOrder(_id)
  const postQueue = (_id) => p._admin.postQueue(_id)

  const lineStyle = { textDecorationLine: p.item.queueSend ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.item.queueSend ? '#aaa' : 'black' }
  const lineStyle2 = { textDecorationLine: p.item.queueSend ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.item.queueSend ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }
  const containerColumn = {borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }


  return (
    <>
      <View style={[containerColumn,{paddingVertical: 0,paddingBottom: 20}]} >
        <Text style={lineStyle}><Text style={[{fontWeight: 'bold',textAlign: 'left'}]} >نام: </Text>{p.item.fullname}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={lineStyle2} >شماره تلفن: </Text><Text style={lineStyle} >{p.item.phone}</Text></View>
      </View>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={lineStyle}  ><Text style={lineStyle2} >آدرس: </Text >{p.item.address}</Text>
      </View>
      <View style={containerColumn} >
        <Text style={lineStyle} ><Text style={{ fontWeight: 'bold' }} >پلاک: </Text>{p.item.plaque}</Text>
        <Text style={lineStyle} ><Text style={{ fontWeight: 'bold' }} >طبقه: </Text>{p.item.unit}</Text>
        <Text style={lineStyle} ><Text style={{ fontWeight: 'bold' }} >کد پستی: </Text>{p.item.postalCode}</Text>
        {/* <Text style={lineStyle} ><Text style={{ fontWeight: 'bold' }} >شماره: </Text>{p.item.id}</Text> */}
      </View>

      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={lineStyle}  ><Text style={lineStyle2} >اسامی سفارش: </Text >{p.item.titles}</Text>
      </View>

      {p.item.description && <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={lineStyle}  ><Text style={lineStyle2} >توضیحات سفارش: </Text >{p.item.description}</Text>
      </View>}

      <View style={containerColumn} >
        <Text style={lineStyle} ><Text style={{ fontWeight: 'bold' }} >قیمت: </Text>{spacePrice(p.item.price)} تومان</Text>
        <Text style={{ color: '#ababab', }}>{moment(p.item.date).format('jM/jD hh:mm')}</Text>
        {/* <Text style={{ color: '#ababab', }}>{p.item.createdAt.split(" ")[4]}</Text> */}
      </View>
      <View style={{ paddingTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-around', }} >
        <Button outline bgcolor={!p.item.queueSend ? 'blue' : 'orange'} style={{ backgroundColor: '#f7f7f7', height: 30 }} onPress={() => { postQueue(p.item._id); }} > {!p.item.queueSend ? 'در صف ارسال ' : 'خروج از صف'}</Button>
        <Button outline bgcolor='green' style={{ backgroundColor: '#f7f7f7', height: 30 }} onPress={() => { postedOrder(p.item._id) }} >ارسال شد</Button>
      </View>
    </>
  )
}

export default CardAddress