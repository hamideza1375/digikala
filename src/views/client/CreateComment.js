import React, { useState } from 'react'
import { Container2, Form, Span } from '../../other/Components/Html'

const createComment = (p) => {
  return (
    <Container2>
      <Form mAutoFocus s={!p.route.params.commentId ? true : false} m onClick={!p.route.params.commentId ? p._client.createComment : p._client.createCommentAnswer} />
    </Container2>
  )
}

export default createComment