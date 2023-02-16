import React from 'react'
import { Modal as _Modal } from '../other/Components/Html'

const Modal = (p) => {
  return (
    <_Modal show={p.showModal} setshow={p.setshowModal}>
      {p.children}
    </_Modal>
  )
}

export default Modal