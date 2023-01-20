import React from 'react'
import { Text, View } from 'react-native';
// import { Button } from '../../../../other/Components/Html';

const CardDeleteAllAddress = (p) => {

  return (
    <>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', paddingBottom: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }} >
        <Text ><Text style={[{
          fontWeight: 'bold',
          textAlign: 'left',
        }]} >نام: </Text>{item.fullname}</Text>
        <View style={{ flexDirection: 'row' }}><Text style={{ fontWeight: 'bold', textAlign: 'left' }} >شماره تلفن: </Text><Text  >{item.phone}</Text></View>
      </View>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text  ><Text style={{ fontWeight: 'bold', textAlign: 'left' }} >آدرس: </Text>{item.formattedAddress}</Text>
      </View>
      <View style={{ borderBottomWidth: .2, borderColor: '#888', paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
        <Text  ><Text style={{ fontWeight: 'bold' }} >پلاک: </Text>{item.floor}</Text>
        <Text  ><Text style={{ fontWeight: 'bold' }} >طبقه: </Text>{item.plaque}</Text>
        <Text  ><Text style={{ fontWeight: 'bold' }} >شماره: </Text>{item.id}</Text>
      </View>

      <View style={{ borderBottomWidth: .2, borderColor: '#888', padding: 15, width: '100%' }} >
        <Text  ><Text style={{ fontWeight: 'bold', textAlign: 'left' }} >اسامی سفارش: </Text>{item.foodTitle}</Text>
      </View>

      <View style={{ paddingVertical: 15, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, }} >
        <Text  ><Text style={{ fontWeight: 'bold' }} >قیمت: </Text>{p.spacePrice(item.price)} تومان</Text>
        <Text style={{ color: '#ababab', }}>{p.moment(item.createdAt).format('jYYYY/jM/jD hh:mm:ss')}</Text>
      </View>
    </>
  )
}

export default CardDeleteAllAddress