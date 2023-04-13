import React, { useEffect, useState } from 'react'
import { FlatList, Column, Scroll, Button, Icon, P, Press, Py, Row, Card } from '../../other/Components/Html'
import _useEffect from '../../controllers/_initial'
import spacePrice from '../../other/utils/spacePrice'
import convertColor from '../../other/utils/convertColor'
import _Alert from '../../other/utils/alert'
import { localhost } from '../../other/utils/axios/axios'


const BeforePayment = (p) => {
  return (
    <Column f={1} >
      <Scroll fg={1} ccStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 71, backgroundColor: 'silver', flexGrow: 1 }} >
        <BeforePaymentFlatlist {...p} />
      </Scroll>
      <BottomTabBeforePayment {...p} />
    </Column>
  )
}
export default BeforePayment



const BeforePaymentFlatlist = (p) => {
  return (
    <Column fg={1} h='100%' border={[1, 'red']} >
      {Object.entries(p.productBasket).length ?
        <FlatList
          column1={1} column2={1} column3={1} column4={2}
          column5={2} column6={3}
          keyExtractor={(data, index) => index.toString()}
          data={Object.entries(p.productBasket)}
          renderItem={({ item, index }) => (
            <Column /* mh='auto' */ mh={6} minw={155} fg={1} h={260} ai='center' col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>
              <BeforePaymentCatd item={item} {...p} />
            </Column>)}
        />
        :
        <Column w='100%' ai='center' pt={50} >
          <Py>سبد خرید شما خالی هست</Py>
        </Column>
      }
    </Column>)
}



function BeforePaymentCatd(p) {
  const deleteProduct = () => p._client.deleteProduct(p.item[0])

  useEffect(() => {
  console.log(`${localhost}/upload/childItem/${p.item[1].imageUrl1}`);
  }, [])
  

  return (
    <Card
      imgClick={() => p.navigation.navigate('SingleItem', { id: p.item[0] })}
      style={{ maxWidth: 550, width: '90%', marginRight: -3 }}
      dr='ltr'
      bgcolor='white'
      img={`${localhost}/upload/childItem/${p.item[1].imageUrl1}`}
      // img={require('../../other/assets/images/a1.jpg')}
      imageStyle={{marginRight:-20, height:78,width:78}}
      headerRow={
        <Column minh='100%' h={25} ai='flex-start' >
          <P onClick={() => p.navigation.navigate('SingleItem', { id: p.item[0] })} >{p.item[1].title}</P>
        </Column>}
      bodyRow={
        <Column minh='100%' >
          <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >{convertColor(p.item[1].color)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(p.item[1].price)}</P></Row>
          <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >{p.item[1].warranty} ماه</P></Row>
          <Row ai='center' w='100%' jc='space-between'>
            <Row ai='center' ><P fs={13} mv={4}>تعداد: </P><P fs={11} >{p.item[1].number} عدد</P></Row>
          </Row>
          <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>{spacePrice(p.item[1].price * p.item[1].number)}</P></Row>
        </Column>}
      footerRow={<Press onClick={() => { deleteProduct() }} h='100%' ai='center' jc='flex-end' pb={15}><P color='#c00'>حذف</P></Press>}
    />
  )
}






function BottomTabBeforePayment(p) {
  const [totalPrice, settotalPrice] = useState(0)
  _useEffect(() => {
    var totalPrice = 0
    Object.values(p.productBasket).length ?
      Object.entries(p.productBasket).forEach(async (item, index) => {
        totalPrice += item[1].number * item[1].price
        settotalPrice(totalPrice)
      })
      :
      settotalPrice(0)
  }, [p.productBasket])
  return (
    <Row style={{ position: 'absolute' }} b={0} w='100%' h={70} bgcolor='#ccc' z={3} ph={8} jc='space-between' fg={1} >
      <Column jc='center' ai='flex-start' >
        <P fs={13} mt={3} mr={3} color='#222'>قیمت کل: </P>
        <P fs={13} mt={3} mr={8} color='#09b'>{spacePrice(totalPrice + p.postPrice)} تومان</P>
      </Column>
      <Column h='100%' fg={1} maxw={'50%'} mh={7} jc='center' >
        <Button onClick={() => Object.values(p.productBasket).length ? p.navigation.navigate('SetAddressForm') : p.toast.warning('خطا', 'هنوز محصولی انتخاب نکرده اید')} >پرداخت</Button>
      </Column>
      {p.navigation.canGoBack() && !p.route.params.profile ? <Press onClick={() => { p.navigation.goBack() }} jc='center' ai='center' w={70} h={60} as='center' sh={{ r: 5, o: .4 }} br={3} p={3} bgcolor='#eee'>
        <Icon style={{ marginTop: 1 }} name='cart-plus' size={22} />
        <Py fs={11} mt={5} ta={'center'} color='#09b' >ادامه ی خرید</Py>
      </Press>
        :
        <></>
      }
    </Row>)
}
