import React from 'react'
import { Form } from '../../other/Components/Html'

const CreateSlider = (p) => {

  return (
    <>
      <Form slider onClick={()=>p._admin.createSlider()} />
    </>
  )
}

export default CreateSlider