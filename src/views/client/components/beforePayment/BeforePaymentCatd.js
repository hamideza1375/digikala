import React from 'react'
import { Card, P, Press, Row, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import convertColor from '../../../../other/utils/convertColor'
import _Alert from '../../../../other/utils/alert'

const BeforePaymentCatd = (p) => {

  return (
    <Card
      imgClick={() => p.navigation.navigate('SingleItem', { id: p.item[0] })}
      style={{ maxWidth: 550 }}
      dr='ltr'
      bgcolor='white'
      img={require('../../../../other/assets/images/a1.jpg')}
      headerRow={
        <Span minh='100%' >
          <P onClick={() => p.navigation.navigate('SingleItem', { id: p.item[0] })} >{p.item[1].title}</P>
        </Span>}
      bodyRow={
        <Span minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >{convertColor(p.item[1].color)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(p.item[1].price)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >{p.item[1].warranty} ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد: </P><P fs={11} >{p.item[1].number} عدد</P></Row>
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>{spacePrice(p.item[1].price * p.item[1].number)}</P></Row>
        </Span>}

      footerRow={<Press onClick={() => {
        _Alert.alert(
          "از حذف مطمئنید",
          "",
          [
            { text: 'Cancel', onPress: () => { } },
            {
              text: 'OK', onPress: () => {
                p.setproductBasket(addNumber => {
                  const obj = { ...addNumber }
                  delete obj[p.item[0]]
                  return obj
                })
              }
            }
          ]
        )
      }} h='100%' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Press>}

    />
  )
}

export default BeforePaymentCatd