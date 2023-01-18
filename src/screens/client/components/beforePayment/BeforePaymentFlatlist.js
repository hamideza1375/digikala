import React from 'react'
import { FlatList, Span } from '../../../../Components/Html'
import CardItem from '../_layoutComponents/CardItem'

const BeforePaymentFlatlist = (p) => {
  return (
    <Span f={2} border={[1, 'red']} >
      <FlatList
        colomn={1} colomn1={1} colomn2={2} colomn3={2}
        colomn4={3} colomn5={3} colomn6={4}
        data={p.childItem}
        renderItem={({ item, index }) => (
          <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>
            <CardItem item={item} spacePrice={p.spacePrice} />
          </Span>)}
      />
    </Span>)
}

export default BeforePaymentFlatlist