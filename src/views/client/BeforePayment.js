import React, { useEffect } from 'react'
import { ContainerNavigation, Pfa, Scroll } from '../../other/Components/Html'
import BottomTabBeforePayment from './components/beforePayment/BottomTabBeforePayment'
import BeforePaymentFlatlist from './components/beforePayment/BeforePaymentFlatlist'
import spacePrice from '../../other/utils/spacePrice'


const BeforePayment = (p) => {

  useEffect(() => { setTimeout(() => {p.navigation.setOptions({ headerTitleStyle: { color: 'black', fontFamily:'B Baran Regular', fontWeight:'bold' }, title: `هزینه ی ارسال به سراسر ایران فقط ${spacePrice(p.postPrice)} تومان`})}, 220);}, [])
  
  return (
    <ContainerNavigation >
      <Scroll ccStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 71, backgroundColor: 'silver', flexGrow:1 }} >

        <BeforePaymentFlatlist {...p} />

      </Scroll>
      <BottomTabBeforePayment {...p} />
    </ContainerNavigation>
  )
}

export default BeforePayment