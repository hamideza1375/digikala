import React from 'react'
import { Container2, Form } from '../../other/Components/Html'

const EditComment = (p) => {

  p._client.getSingleComment()

  return (
    <Container2>
      <Form mAutoFocus s m onClick={() => { p._client.editComment() }} />
    </Container2>
  )
}

export default EditComment