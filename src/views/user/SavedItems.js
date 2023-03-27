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
          <Card 
          imgClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}}
           style={{minHeight:135, margin:5}}
            header={item.title}
            bodyRow={<M_icon color='#d00' name='delete' size={22} style={{ width:20, textAlign:'center'}} onClick={() => { removeSavedItem(item.itemId) }} />}
            img={`${localhost}/upload/childItem/${item.imageUrl}`}
            footer={spacePrice(String(item.price).padEnd(4)) + ' تومان'}
            />
        )}
      />
    </Span>
  )
}

export default SavedItems