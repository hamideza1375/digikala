import React from 'react'
import { Input, Button, Span, P, Column, Container2, Form } from '../../other/Components/Html'

const ForgetPass = (p) => {
  const getCodeForgetPass = () => p._user.getCodeForgetPass()

  return (
    <Container2 style={{ backgroundColor: "#fff" }}>
        <Form w='85%' phore onClick={getCodeForgetPass} />
    </Container2>
  )
}
export default ForgetPass