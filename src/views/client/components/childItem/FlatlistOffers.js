import React, { useState } from 'react'
import { FlatList, Span } from '../../../../other/Components/Html'
import seconder from '../../../../other/utils/seconder'
import CardItem from '../_layoutComponents/CardItem'

const FlatlistOffers = (p) => {

  const [dt, setdt] = useState()

  p.useEffect(() => {
    setTimeout(() => {
      seconder("2023-03-13 22:3:0", ({ days, hours, minutes, seconds }) => (
        setdt(hours + ':' + minutes + ':' + seconds)
      ))
    }, 1000);
  }, [])

  return (
    <FlatList
      colomn={1} colomn1={2} colomn2={2} colomn3={2}
      colomn4={3} colomn5={4} colomn6={5}
      data={p.childItem}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
          <CardItem item={item} spacePrice={p.spacePrice} offers/>
        </Span>
      )}
    />
  )
}

export default FlatlistOffers