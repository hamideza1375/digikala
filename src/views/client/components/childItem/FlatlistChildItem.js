import React from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistChild = (p) => {
  p._client.getChildItems()
  return (
    <FlatList
     column1={1} column2={2} column3={2} column4={3}
      column5={4} column6={5}
      data={p.childItem}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={165} fg={1} h={260} col2={{ marginHorizontal: 2 }} col1={{ marginHorizontal: 1 }}>
          <CardItem item={item} spacePrice={spacePrice} onClick={() => { p.navigation.navigate('SingleItem', { id: item._id }) }} />
        </Span>)}
    />
  )
}

export default FlatlistChild