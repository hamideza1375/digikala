import React from 'react'
import { Container2, Form } from '../../other/Components/Html'

const CreateSlider = (p) => {

  return (
    <Container2>
      <Form slider onClick={()=>p._admin.createSlider()} />
    </Container2>
  )
}

export default CreateSlider