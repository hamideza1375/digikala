import React from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistPopulars = (p) => {
  return (
    <FlatList
      column1={1} column2={2} column3={2} column4={2}
      column5={3} column6={4}
      data={p.populars}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
          <CardItem item={item} spacePrice={spacePrice} onClick={() => { p.navigation.navigate('SingleItem', { id: item._id }) }}/>
        </Span>
      )}
    />
  )
}

export default FlatlistPopulars