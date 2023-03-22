import React from 'react'
import { Card, Column, FlatList, M_icon, Span } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import spacePrice from '../../other/utils/spacePrice'


const SavedItems = (p) => {

  p._user.getSavedItem()
  const removeSavedItem = (itemId) => p._user.removeSavedItem(itemId)

  return (
    <Span>
      <FlatList
        data={p.savedItems}
        renderItem={({ item, index }) => (
          <Column m={5} >
          <Card
            bgcolor={'white'}
            dr='ltr'
            header={item.title}
            bodyRow={<M_icon color='#d00' name='delete' size={22} onClick={() => { removeSavedItem(item.itemId) }} />}
            img={`${localhost}/upload/childItem/${item.imageUrl}`}
            footer={spacePrice(String(item.price).padEnd(4)) + 'ت'}
            />
            </Column>
        )}
      />
    </Span>
  )
}

export default SavedItems