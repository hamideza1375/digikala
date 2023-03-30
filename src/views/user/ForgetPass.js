import React from 'react'
import { Input, Button, Span, P, Column, Container2 } from '../../other/Components/Html'

const ForgetPass = (p) => {
  const getCodeForgetPass = () => p._user.getCodeForgetPass()

  return (
    <Container2 style={{ backgroundColor: "#fff" }}>
      <Span br={4} border={[1,'silver']} p={12} f={1}>
        <Span jc='space-between' h={210} pv={15}>
            <Span mh='37%' w='85%' jc='center' as='center' ai='center'>
              <P as='center' mb={5} >دریافت کد</P>
              <Input value={p.phoneOrEmail} onChangeText={(text) => p.setphoneOrEmail(text)} w='100%' />
              <Button outline w={165} mt={20} onClick={!p.showActivity ? getCodeForgetPass : () => { }} >ارسال</Button>
            </Span>
        </Span>
      </Span>
    </Container2>
  )
}
export default ForgetPass