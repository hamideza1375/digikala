import React from 'react'
import { Card, Column, FlatList, M_icon, Press, Span } from '../../other/Components/Html'
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
          <Press m={5} onClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}} >
          <Card
          style={{minHeight:135}}
            header={item.title}
            bodyRow={<M_icon color='#d00' name='delete' size={22} onClick={() => { removeSavedItem(item.itemId) }} />}
            img={`${localhost}/upload/childItem/${item.imageUrl}`}
            footer={spacePrice(String(item.price).padEnd(4)) + ' تومان'}
            />
            </Press>
        )}
      />
    </Span>
  )
}

export default SavedItems