import React from 'react'
import { ContainerNavigation, Form } from '../../other/Components/Html'

const AddSeller = (p) => {

  return (
    <ContainerNavigation>
      <Form ph in2 /*brand*/ onClick={()=>p._admin.createSeller()} />
    </ContainerNavigation>
  )
}

export default AddSeller