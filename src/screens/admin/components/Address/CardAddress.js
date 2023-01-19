import React from 'react'
import { Text, View } from 'react-native';
import { Button } from '../../../../other/Components/Html';

const CardAddress = (p) => {
  const deleteAddress = (_id) => p._admin.deleteAddress(_id)

  return (
    <>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', paddingBottom: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }}><Text style={[{
          fontWeight: 'bold',
          textAlign: 'left',
        }]} >نام: </Text>{item.fullname}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }} >شماره تلفن: </Text><Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }} >{item.phone}</Text></View>
      </View>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }}  ><Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }} >آدرس: </Text >{item.formattedAddress}</Text>
      </View>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }} ><Text style={{ fontWeight: 'bold' }} >پلاک: </Text>{item.floor}</Text>
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }} ><Text style={{ fontWeight: 'bold' }} >طبقه: </Text>{item.plaque}</Text>
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }} ><Text style={{ fontWeight: 'bold' }} >شماره: </Text>{item.id}</Text>
      </View>

      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }}  ><Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }} >اسامی سفارش: </Text >{item.foodTitle}</Text>
      </View>

      {item.description && <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }}  ><Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black', fontWeight: 'bold', textAlign: 'left' }} >توضیحات سفارش: </Text >{item.description}</Text>
      </View>}

      <View style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
        <Text style={{ textDecorationLine: p.addressMap.get(item._id) ? 'line-through' : 'none', textDecorationStyle: 'solid', color: p.addressMap.get(item._id) ? '#aaa' : 'black' }} ><Text style={{ fontWeight: 'bold' }} >قیمت: </Text>{p.spacePrice(item.price)} تومان</Text>
        <Text style={{ color: '#ababab', }}>{p.moment(item.createdAt).format('hh:mm')}</Text>
        {/* <Text style={{ color: '#ababab', }}>{item.createdAt.split("T")[1].split(".")[0]}</Text> */}
      </View>
      <View style={{ paddingTop: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-around', }} >
        <Button outline bgcolor='blue' style={{ backgroundColor: '#f7f7f7', height: 30 }}
          onPress={() => p.navigation.navigate('Location', { origin: item.origin })} >نمایش</Button>
        <Button outline bgcolor={!p.addressMap.get(item._id) ? 'green' : 'orange'} style={{ backgroundColor: '#f7f7f7', height: 30 }} onPress={() => { !p.addressMap.get(item._id) ? p.addressMap.set(item._id, item._id) : p.addressMap.delete(item._id); p.setchange(!p.change); }} > {!p.addressMap.get(item._id) ? 'خانده شده ' : 'خانده نشده'}</Button>
        <Button outline bgcolor='red' style={{ backgroundColor: '#f7f7f7', height: 30 }} onPress={() => { deleteAddress(item._id); p.setchange(!p.change) }} >حذف</Button>
      </View>
    </>
  )
}

export default CardAddress