import React from 'react'
import { Badge, Column, FlatList, M_icon, P, Press, Py, Span } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const TicketBox = (p) => {
  p._user.ticketBox()

  return (
    <Span>
      <FlatList
        data={p.userTicketBox}
        renderItem={({ item, index }) => (
          <Press mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} onClick={() => { p.navigation.navigate('GetTicket',{id: item._id}) }} >
            <Py ta='right' fs={11} >{item.title}</Py>
            <P ta='right' fs={10} color={'#777'} >{truncate(item.message, 30, false)}</P>
            <M_icon name='delete' size={30} color='#e52222' style={{position:'absolute', left:1, top:15}} />
            {item.newMessage === true && <Badge bgcolor={'#0e2'} left={-3} />}
          </Press>
        )}
      />
    </Span>
  )
}

export default TicketBox