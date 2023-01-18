import React from 'react'
import { View, FlatList } from 'react-native';
import { Input } from '../../Components/Html';
import CardAddress from './components/Address/CardAddress';

const Address = (p) => {
  // p._admin.getAllAddress()

  return (
    <View style={{ flexGrow: 1, width: '100%', backgroundColor: '#eee' }} >
      <Input border={[1, '#888']} w={'90%'} mt={10} alignSelf={'center'} value={p.textSearch} onChangeText={(text) => { p.settextSearch(text); const fd = p._address.filter(f => f.fullname.includes(text) || f.phone == text); p.setallAddress(fd) }} p="جستجو" icon={'search'} />
      {
        p.allAddress?.length ?
          <FlatList
            initialNumToRender={3}
            data={p.allAddress}
            contentContainerStyle={{ paddingBottom: 55, }}
            renderItem={({ item, index }) => (
              item.del !== p.tokenValue.userId &&
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
                <CardAddress {...p}/>
              </View>
            )} />
          :
          <></>
      }
    </View>
  )
}

export default Address