import React from 'react'
import { Container2, Form, Span } from '../../other/Components/Html'

const createComment = (p) => {
  return (
    <Container2>
      <Form s m onClick={()=>{p._client.createComment()}} />
    </Container2>
  )
}

export default createComment