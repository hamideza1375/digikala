import React from 'react'
import { ContainerNavigation, Pfa, Scroll } from '../../other/Components/Html'
import BottomTabBeforePayment from './components/beforePayment/BottomTabBeforePayment'
import BeforePaymentFlatlist from './components/beforePayment/BeforePaymentFlatlist'
import _useEffect from '../../controllers/_initial';


const BeforePayment = (p) => {

  p._admin.getPostPrice() 
  _useEffect(() => {
    p.navigation.setOptions({ headerTitleStyle: { color: 'black'  }, title: <Pfa fw='100' fs={17} >هزینه ی ارسال به سراسر ایران فقط {p.price} تومان</Pfa> })
  }, [])
  

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