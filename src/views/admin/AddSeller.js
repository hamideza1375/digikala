import React from 'react'
import { Form } from '../../other/Components/Html'

const AddSeller = (p) => {

  return (
    <>
      <Form ph in2 /*brand*/ onClick={()=>p._admin.createSeller()} />
    </>
  )
}

export default AddSeller