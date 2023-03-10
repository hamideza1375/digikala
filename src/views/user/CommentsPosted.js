import React from 'react'
import { FlatList, M_icon, P, Press, Span } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const CommentPosted = (p) => {

  return (
    <Span>
      <FlatList
        data={p.userTicketBox}
        renderItem={({ item, index }) => (
          <Press mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} onClick={() => { p.navigation.navigate('GetTicket') }} >
            <P fs={12} >{item.title}</P>
            <P fs={10} color={'#777'} >{truncate(item.message, 30, false)}</P>
            <M_icon name='delete' size={30} color='#e52222' style={{position:'absolute', left:1, top:15}} />
          </Press>
        )}
      />
    </Span>
  )
}

export default CommentPosted