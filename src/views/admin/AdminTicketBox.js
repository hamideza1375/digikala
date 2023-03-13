import React from 'react'
import { Badge, Column, FlatList, M_icon, P, Press, Span } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const AdminTicketBox = (p) => {
  p._admin.adminTicketBox()
  const deleteTicket = (ticketId) => p._user.deleteTicket(ticketId)

  return (
    <Span>
      <FlatList
        data={p.adminTicketBox}
        renderItem={({ item, index }) => (
          <Column mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} >
            <P  onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={12} >{item.title}</P>
            <P  onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={10} color={'#777'} >{truncate(item.message, 30, false)}</P>
            <M_icon onClick={() => { deleteTicket(item._id) }} name='delete' size={30} color='#e52222' style={{ position: 'absolute', left: 1, top: 15 }} />
            {!item.adminSeen && <Badge bgcolor={'#0e2'} left={-3} />}
          </Column>
        )}
      />
    </Span>
  )
}

export default AdminTicketBox