import React, { useState } from 'react'
import { context } from '../../../context/_context'
import { Span, Scroll, M_icon } from '../../Components/Html'

const Drawer2 = ({children}) => {
  const [show, setshow] = useState(true)
  const {width} = context()

  return (
    <>
      {width < 480 && 
      <M_icon onClick={() => setshow(!show)} name={show ? 'arrow-back-ios' : 'arrow-forward-ios'} size={22}
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 30 }} />}

      <Span minw={150} h={'100%'} bgcolor='#fffe' f={1} z={10}
        col={show ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
        col1={show ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
      >
        <Scroll ccStyle={{ flexGrow: 1 }} >
          {children}
        </Scroll>
      </Span>
    </>
  )
}

export default Drawer2