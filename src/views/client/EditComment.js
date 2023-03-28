import React from 'react'
import { Container2, Form } from '../../other/Components/Html'

const EditComment = (p) => {

  // p._client.getSingleComment()

  return (
    <Container2>
      <Form mAutoFocus s={!p.route.params.commentId ? true : false} m onClick={()=>!p.route.params.commentId ? p._client.editComment() : p._client.editCommentAnswer()} />
    </Container2>
  )
}

export default EditComment