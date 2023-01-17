import React from 'react'
import { Modal as _Modal } from '../Components/Html'

const Modal = (p) => {
  return (
    <_Modal show={p.showModal} setshow={p.setshowModal} {...p}>
      {p.children}
    </_Modal>
  )
}

export default Modal