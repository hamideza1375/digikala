import React, { useState } from 'react'
import _useEffect from '../../../../controllers/_initial'
import { Button, Column, Icon, P, Press, Row, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'

const BottomTabBeforePayment = (p) => {

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
    <Row style={{ position: 'absolute' }} b={0} w='100%' h={70} border={[1]} bgcolor='#ccc' z={3} ph={8} jc='space-between' fg={1} >
      <Span jc='center' ai='flex-start' >
        <P fs={13} mt={3} mr={3} color='#222'>قیمت کل: </P>
        <P fs={13} mt={3} mr={8} color='#0ac'>{spacePrice(totalPrice + p.postPrice )} تومان</P>
      </Span>
      <Column h='100%' fg={1} maxw={'50%'} mh={7} jc='center' >
        <Button onClick={() => Object.values(p.productBasket).length ? p.navigation.navigate('Location') : p.toast.warning('خطا', 'هنوز محصولی انتخاب نکرده اید')} >پرداخت</Button>
      </Column>

      {p.navigation.canGoBack() ? <Press onClick={() => { p.navigation.goBack() }} jc='center' ai='center' w={70} h={60} as='center' sh={{ r: 5, o: .4 }} br={3} p={3} bgcolor='#eee'>
        <Icon style={{ marginTop: 1 }} name='cart-plus' size={22} />
        <P fs={10} mt={3} ta={'center'} color='#0ac' >بازگشت به ادامه ی خرید</P>
      </Press>
        :
        <></>
      }
    </Row>)
}

export default BottomTabBeforePayment