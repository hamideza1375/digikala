import React from 'react'
import { Badge, Column, Container, FlatList, M_icon, P, Press, Py, Span } from '../../other/Components/Html'
import { truncate } from '../../other/utils/truncate'


const TicketBox = (p) => {
  p._user.ticketBox()
  const deleteTicket = (ticketId) => p._user.deleteTicket(ticketId)

  return (
    <Container>
      <FlatList
        data={p.userTicketBox}
        renderItem={({ item, index }) => (
          <Column mv={8} mh={6} maxw={500} bgcolor='#ddd' border={[1, '#ddd']} br={4} p={8} >
            <Py onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={11} >{item.title}</Py>
            <P onClick={() => { p.navigation.navigate('GetTicket', { id: item._id }) }} ta='right' fs={10} color={'#777'} >{truncate(item.message, 40, false)}</P>
            <M_icon onClick={() => { deleteTicket(item._id) }} name='delete' size={30} color='#e52222' style={{ position: 'absolute', left: 1, top: 15, zIndex:10 }} />
            {!item.userSeen && <Badge bgcolor={'#0e2'} left={-3} />}
          </Column>
        )}
      />
    </Container>
  )
}

export default TicketBox