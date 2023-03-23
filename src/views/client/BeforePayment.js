import React from 'react'
import { Container, ContainerNavigation, Scroll, Span } from '../../other/Components/Html'
import BottomTabBeforePayment from './components/beforePayment/BottomTabBeforePayment'
import BeforePaymentFlatlist from './components/beforePayment/BeforePaymentFlatlist'


const BeforePayment = (p) => {

  return (
    <ContainerNavigation >
      <Scroll ccStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 71, backgroundColor: 'silver', flex:1 }} >

        <BeforePaymentFlatlist {...p} />

      </Scroll>
      <BottomTabBeforePayment {...p} />
    </ContainerNavigation>
  )
}

export default BeforePayment