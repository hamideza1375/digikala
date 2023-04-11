import React from 'react'
import { Card, Column, FlatList, M_icon, Py } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
import spacePrice from '../../other/utils/spacePrice'


const SavedItems = (p) => {

  p._user.getSavedItem()
  const removeSavedItem = (itemId) => p._user.removeSavedItem(itemId)

  return (
    <Column f={1}>
      <FlatList
        data={p.savedItems}
        renderItem={({ item, index }) => (
          <Card 
          imgClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}}
           style={{minHeight:135, margin:5}}
            headerRow={<Py onClick={()=>{p.navigation.navigate('SingleItem',{id:item.itemId})}} fs={15}>{item.title}</Py>}
            bodyRow={<M_icon color='#d00' name='delete' size={22} style={{ width:20, textAlign:'center'}} onClick={() => { removeSavedItem(item.itemId) }} />}
            img={`${localhost}/upload/childItem/${item.imageUrl}`}
            footer={spacePrice(String(item.price).padEnd(4)) + ' تومان'}
            />
        )}
      />
    </Column>
  )
}

export default SavedItems