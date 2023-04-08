import React from 'react'
import { Column, FlatList, Py, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import BeforePaymentCatd from '../beforePayment/BeforePaymentCatd'

const BeforePaymentFlatlist = (p) => {

  return (
    <Span f={2} border={[1, 'red']} >
      {Object.entries(p.productBasket).length ?
        <FlatList
          column1={1} column2={1} column3={1} column4={2}
          column5={2} column6={3}
          keyExtractor={(data, index) => index.toString()}
          data={Object.entries(p.productBasket)}
          renderItem={({ item, index }) => (
            <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} ai='center' col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>
              <BeforePaymentCatd item={item} {...p} />
            </Span>)}
        />
        :
        <Column w='100%' ai='center' pt={50} >
          <Py>سبد خرید شما خالی هست</Py>
        </Column>
      }
    </Span>)
}

export default BeforePaymentFlatlist