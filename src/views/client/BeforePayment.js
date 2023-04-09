import React, { useEffect } from 'react'
import { ContainerNavigation, Pfa, Scroll } from '../../other/Components/Html'
import BottomTabBeforePayment from './components/beforePayment/BottomTabBeforePayment'
import BeforePaymentFlatlist from './components/beforePayment/BeforePaymentFlatlist'
import spacePrice from '../../other/utils/spacePrice'
import _useEffect from '../../controllers/_initial'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getSendStatus } from '../../services/clientService'


const BeforePayment = (p) => {

  _useEffect(() => {
    getSendStatus().then(async ({ data }) => {
      if (data.checkSend === 1) {
        await AsyncStorage.removeItem('productBasket');
        p.setproductBasket([])
      }
    })
  }, [])


  return (
    <ContainerNavigation >
      <Scroll ccStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 71, backgroundColor: 'silver', flexGrow: 1 }} >

        <BeforePaymentFlatlist {...p} />

      </Scroll>
      <BottomTabBeforePayment {...p} />
    </ContainerNavigation>
  )
}

export default BeforePayment