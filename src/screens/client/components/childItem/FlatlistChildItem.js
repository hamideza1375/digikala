import React from 'react'
import { FlatList, Span } from '../../../../Components/Html'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistChild = (p) => {
  return (
    <FlatList
      colomn={1} colomn1={2} colomn2={2} colomn3={2}
      colomn4={3} colomn5={4} colomn6={5}
      data={p.childItem}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 2 }} col1={{ marginHorizontal: 1 }}>
          <CardItem item={item} spacePrice={p.spacePrice} />
        </Span>)}
    />
  )
}

export default FlatlistChild