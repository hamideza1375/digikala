import React, { useState } from 'react'
import { Br, List as _list, P, Span } from '../../../Components/Html'

const List = (p) => {
  const [hidden, sethidden] = useState(true)

  return (
    <>
      <_list
        h={35}
        br={5}
        sh={{ r: 5, o: .1 }}
        color='black'
        bgcolor='#ddd'
        hidden={hidden} sethidden={sethidden}
        fontSize={12}
        iconSize={20}
        m_icon='arrow-left'
        header="توضیحات"
        bodyRow={
          <Span >
            <P>salam</P>
            <P>salam</P>
            <P>salam</P>
          </Span>
        }
      />
      <_list
        h={35}
        br={5}
        sh={{ r: 5, o: .1 }}
        color='black'
        bgcolor='#ddd'
        hidden={hidden} sethidden={sethidden}
        fontSize={12}
        iconSize={20}
        m_icon='arrow-left'
        header="توضیحات"
        bodyRow={
          <Span >
            <P>salam</P>
            <P>salam</P>
            <P>salam</P>
          </Span>
        }
      />
    </>
  )
}

export default List