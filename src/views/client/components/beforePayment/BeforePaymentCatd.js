import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { A_icon, Card, Card2, Column, M_icon, P, Press, Row, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'

const BeforePaymentCatd = (p) => {

  return (
    <Card
      style={{ maxWidth: 550 }}
      dr='ltr'
      bgcolor='white'
      img={require('../../../../other/assets/images/a1.jpg')}
      headerRow={
        <Span minh='100%' >
          <P>{p.item[1].title}</P>
          <P mt={4} mr={3} color={'#88aa'} fs={9} >آیفون 12 پرومکس 64 گیگ </P>
        </Span>}
      bodyRow={
        <Span minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >سفید</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(p.item[1].price)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >{p.item[1].warranty}ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد</P></Row>



            <Column h={'100%'} jc='center' >
              <Column style={{ height: 20, width: 20 }} >
                <Icon name='plus' color='#0ad' size={20} onClick={() => {



                  p.setproductBasket(addNumber => {
                    const obj = { ...addNumber }
                    obj[p.item[0]].number = obj[p.item[0]].number + 1
                    return obj
                  })

                }
                } />
              </Column>

              <Column style={{ height: 17, width: 20 }} >
                <P mt={3} ta='center' >{p.productBasket[p.item[0]]?.number}</P>
              </Column>

              <Column style={{ height: 20, width: 20 }} >
                <Icon name='minus' color='#e11' size={20} onClick={() =>
                  p.productBasket[p.item[0]]?.number &&
                  p.setproductBasket(addNumber => {
                    const obj = { ...addNumber }
                    obj[p.item[0]].number = obj[p.item[0]].number - 1
                    return obj
                  })
                } />
              </Column>
            </Column>




            {/* <Row fd='row-reverse' >
              <Icon name='plus' size={16} color='#0c0' style={{ padding: 3 }} />
              <P p={3} >{item[1].number}</P>
              <Icon name='minus' size={16} color='red' style={{ padding: 3 }} />
            </Row> */}
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>{spacePrice(p.item[1].price)}</P></Row>
        </Span>}

      footerRow={<Press onClick={() => {

        p.setproductBasket(addNumber => {
          const obj = { ...addNumber }
          delete obj[p.item[0]]
          return obj
        })

      }} h='100%' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Press>}

    />
  )
}

export default BeforePaymentCatd