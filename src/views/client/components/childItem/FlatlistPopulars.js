import React from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistPopulars = (p) => {

  return (
    <FlatList
      colomn={1} colomn1={2} colomn2={2} colomn3={2}
      colomn4={3} colomn5={4} colomn6={5}
      data={p.populars}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
          <CardItem item={item} spacePrice={spacePrice} />
        </Span>
      )}
    />
  )
}

export default FlatlistPopulars