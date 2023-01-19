import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { A_icon, Card, Card2, M_icon, P, Row, Span } from '../../../../other/Components/Html'

const BeforePaymentCatd = (p) => {

  return (
    <Card
      style={{ maxWidth: 550 }}
      dr='ltr'
      bgcolor='white'
      img={require('../../../../other/assets/images/a1.jpg')}
      headerRow={
        <Span minh='100%' >
          <P>iphone 12 proMax 64 g </P>
          <P mt={4} mr={3} color={'#88aa'} fs={9} >آیفون 12 پرومکس 64 گیگ </P>
        </Span>}
      bodyRow={
        <Span minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >سفید</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >18ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد</P></Row>
            <Row fd='row-reverse' ><Icon name='plus' size={16} color='#0c0' style={{padding:3}} /><P p={3} >2</P><Icon name='minus' size={16} color='red' style={{padding:3}} /></Row>
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>23000000</P></Row>
        </Span>}

      footerRow={<Span h='100%' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Span>}

    />
  )
}

export default BeforePaymentCatd