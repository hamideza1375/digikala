import React from 'react'
import { View } from 'react-native';
import { Container, Input, FlatList } from '../../other/Components/Html';
import CardAddress from './components/Address/CardAddress';

const addressMap = new Map()

const Address = (p) => {
  p._admin.getAllAddress()

  return (
    <Container>
      <FlatList
        data={p.allAddress}
        contentContainerStyle={{ paddingBottom: 55, }}
        renderItem={({ item, index }) => (
          item.deleteForUser !== p.tokenValue.userId &&
          <View
            key={item._id} style={{
              alignSelf: 'center',
              borderWidth: .3,
              borderColor: '#888',
              width: '90%',
              marginVertical: 15,
              padding: 15,
              backgroundColor: '#f5f5f5',
              borderRadius: 4
            }}>
            <CardAddress {...p} addressMap={addressMap} item={item} />
          </View>
        )} />
    </Container>
  )
}

export default Address