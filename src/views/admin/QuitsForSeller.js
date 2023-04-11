import React from 'react'
import { Text, View } from 'react-native';
import { Button, Column, FlatList, P, Py, Row, Scroll } from '../../other/Components/Html';
import spacePrice from '../../other/utils/spacePrice';

const addressMap = new Map()

const QuitsForSeller = (p) => {
  p._admin.getQuitsForSeller()

  return (
    <Column f={1} >
      <FlatList
        data={p.allAddress}
        contentContainerStyle={{ paddingBottom: 55, }}
        renderItem={({ item, index }) => (
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
            <Card {...p} addressMap={addressMap} item={item} />
          </View>
        )} />
    </Column>
  )
}

export default QuitsForSeller
function Card(p) {
  return (
    <>
      <Scroll ccStyle={[{ flexDirection:'row', flexWrap:'wrap' }]} >

        <Row jc='center' ai='center' minw={150} h={55} f={1} >
          <Py >برند : </Py><P >{p.item.brand}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} h={55} f={1} >
          <Py >محصول : </Py><P>{p.item.titles}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} h={55} f={1} >
          <Py >شماره تلفن: </Py><P >{p.item.phone}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} h={55} f={1} >
          <Py >قیمت : </Py><P >{spacePrice(p.item.price)}</P>
        </Row>

        <Row jc='center' ai='center' minw={150} h={55} f={1} >
          <Button h={30} fs={11} >پرداخت</Button>
        </Row>
      </Scroll>

    </>
  )
}

