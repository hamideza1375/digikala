import React, { useState } from 'react'
import { context } from '../../../context/_context'
import { Span, Scroll, A_icon } from '../../Components/Html'

const Drawer2 = ({ children, show, setshow }) => {
  const [show2, setshow2] = useState(true)
  const { width } = context()

  const showDrawer = typeof show === 'boolean' ? show : show2

  return (
    <>
      {(width <= 768) && ((!showDrawer) || (typeof show !== 'boolean')) &&
        <A_icon onClick={() => { (typeof show === 'boolean') ? (setshow(!show)) : (setshow2(!show2)) }} name={showDrawer ? 'bars' : 'right'} size={22}
          style={{ position: 'absolute', top: 2, right: showDrawer ? 0 : 195, zIndex: 30 }} />}

      {((showDrawer) || ((width <= 768) && ((!showDrawer) || (typeof show !== 'boolean')))) &&
        <Span minw={220} maxw={220} h={'100%'} bgcolor='#fffe' f={1} z={10}
          col={showDrawer ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
          col1={showDrawer ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
          col2={showDrawer ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
          col3={showDrawer ? { right: -300, position: 'absolute' } : { position: 'absolute', right: 0 }}
        >
          <>
            {children}
          </>
        </Span>}
    </>
  )
}

export default Drawer2