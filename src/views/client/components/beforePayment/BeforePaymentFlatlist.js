import React from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import BeforePaymentCatd from '../beforePayment/BeforePaymentCatd'

const BeforePaymentFlatlist = (p) => {
  return (
    <Span f={2} border={[1, 'red']} >
      <FlatList
        colomn={1} colomn1={1} colomn2={1} colomn3={2}
        colomn4={2} colomn5={3} colomn6={3}
        data={p.childItem}
        renderItem={({ item, index }) => (
          <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} ai='center' col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>
            <BeforePaymentCatd item={item} spacePrice={p.spacePrice} />
          </Span>)}
      />
    </Span>)
}

export default BeforePaymentFlatlist