import React from 'react'
import { Scroll, Span } from '../../Components/Html'
import BottomTabBeforePayment from './components/beforePayment/BottomTabBeforePayment'
import BeforePaymentFlatlist from './components/beforePayment/BeforePaymentFlatlist'
import BeforePaymentTable from './components/beforePayment/BeforePaymentTable'


const BeforePayment = (p) => {

  return (
    <Span webStyle={{ maxHeight: 'calc(100vh - 64px)', height: 'calc(100vh - 64px)' }} >
      <Scroll ccStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 71, backgroundColor: 'silver'}} >

        <BeforePaymentTable {...p} />

        <BeforePaymentFlatlist {...p} />

      </Scroll>
      <BottomTabBeforePayment {...p} />
    </Span>
  )
}

export default BeforePayment