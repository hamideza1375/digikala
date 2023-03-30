import React from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistChild = (p) => {
  p._client.getChildItems()
  return (
    <FlatList
      colomn={1} colomn1={2} colomn2={2} colomn3={3}
      colomn4={3} colomn5={3} colomn6={4}
      data={p.childItem}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={165} fg={1} h={260} col2={{ marginHorizontal: 2 }} col1={{ marginHorizontal: 1 }}>
          <CardItem item={item} spacePrice={spacePrice} onClick={() => { p.navigation.navigate('SingleItem', { id: item._id }) }} />
        </Span>)}
    />
  )
}

export default FlatlistChild