import React from 'react'
import { Column, ContainerTab, Form, P } from '../../other/Components/Html'

const Login = (p) => {
  const login = () => p._user.login()
  return (
    <ContainerTab ai='center' jc='center' bgcolor='#fafafa'>
      <Column w='90%' f={.98} border={[1, 'silver']} p={8} sh={{ r: 7, o: .3, c: '#aaa' }}>
        <Column w='100%' f={1} border={[1, 'silver']} sh={{ r: 5, o: .2, c: '#aaa' }} >
          <Form timer p c ch phore checkText="مرا بخاطر بسپار" onClick={!p.showActivity ? login : () => { }} {...p}>
            <P mt={'auto'} pr={13} color='#09e' onClick={() => p.navigation.navigate('ForgetPass')} >فراموشی رمز عبور</P>
          </Form>
        </Column>
      </Column>
    </ContainerTab>
  )
}

export default Login