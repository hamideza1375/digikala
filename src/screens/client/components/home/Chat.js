import React from 'react'
import { Platform } from 'react-native'
import { M_icon, Span } from '../../../../other/Components/Html'

const Chat = (p) => {
  return (
    <Span sh={{ r: 6, o: .5 }} jc='center' ai='center' br={70} bgcolor='#909' h={50} w={50} pos={Platform.OS === 'web' ? 'fixed' : 'absolute'} b={30} l={40} >
      <M_icon color='#fff' name='chat' size={30} />
    </Span>
  )
}

export default Chat