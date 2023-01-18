import React from 'react'
import { Input, Button, Span, P } from '../../Components/Html'

const ForgetPass = (p) => {
  // p._user.setreplaceInput()
  const handlePhone = () => p._user.smsAction()
  const handleCode = () => p._user.codeAction()

  return (
    <Span style={{ flex: 1, margin: 14, backgroundColor: "#fff" }}>
      <Span br={4} border={[1,'silver']} p={12} f={1}>
        <Span jc='space-between' h={210} pv={15}>
          {!p.replaceInput ?
            <Span mh='37%' w='85%' jc='center' as='center' ai='center'>
              <P as='center' mb={5} >شماره تلفن خودرا وارد کنید</P>
              <Input value={p.myPhone} onChangeText={(text) => p.setmyPhone(text)} w='100%' p="شماره تلفن" />
              <Button outline w={165} mt={20} onClick={handlePhone} >ارسال</Button>
            </Span>
            :
            <Span mh='37%' w='85%' jc='center' as='center' ai='center'>
              <P as='center' mb={5}>کد ارسال شده را وارد کنید</P>
              <Input value={p.myCode} onChangeText={(text) => p.setmyCode(text)} w='100%' p="ارسال کد" />
              <Button outline w={165} mt={20} onClick={handleCode} >ارسال</Button>
            </Span>
          }
        </Span>
      </Span>
    </Span>
  )
}
export default ForgetPass