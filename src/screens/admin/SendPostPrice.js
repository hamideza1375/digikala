import React from 'react'
import { Form } from '../../other/Components/Html'

const SendPostPrice = (p) => {
  return (
    <Form pr {...p} onClick={()=>{p._food.SendPrice()}} />
  )
}

export default SendPostPrice