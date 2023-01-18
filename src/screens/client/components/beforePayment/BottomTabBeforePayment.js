import React from 'react'
import { Button, Icon, P, Press, Row, Span } from '../../../../Components/Html'

const BottomTabBeforePayment = (p) => {
  return (
    <Row style={{ position: 'absolute' }} b={0} w='100%' h={70} border={[1]} bgcolor='#ccc' z={3} ph={8} jc='space-between' fg={1} >
      <Span jc='center' ai='flex-start' >
        <P fs={13} mt={3} mr={3} color='#222'>قیمت کل: </P>
        <P fs={13} mt={3} mr={8} color='#0ac'>{p.spacePrice(3450000)} تومان</P>
      </Span>
      <Button mt={15} fg={1} maxw={'50%'} mr={7} ml={10} >پرداخت</Button>
      <Press jc='center' ai='center' w={70} h={60} as='center' sh={{ r: 5, o: .4 }} br={3} p={3} bgcolor='#eee'>
        <Icon style={{ marginTop: 1 }} name='cart-plus' size={22} />
        <P fs={10} mt={3} ta={'center'} color='#0ac'>بازگشت به ادامه ی خرید</P>
      </Press>
    </Row>)
}

export default BottomTabBeforePayment