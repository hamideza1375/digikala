import React from 'react'
import { ContainerTab, Form, Span } from '../../other/Components/Html'

const Register = (p) => {
  const getCodeForRegister = () => p._user.getCodeForRegister()

  return (
    <ContainerTab ai='center' jc='center' bgcolor='#fafafa'>
      <Span w='90%' f={.98} border={[1, 'silver']} p={8} sh={{ r: 7, o: .3, c: '#aaa' }}>
        <Span w='100%' f={1} border={[1, 'silver']} sh={{ r: 5, o: .2, c: '#aaa' }} >
          <Form f phore p ch autoComplete={false} bgcolor='#fff' onClick={!p.showActivity ? getCodeForRegister : () => { }} {...p} />
        </Span>
      </Span>
    </ContainerTab>
  )
}

export default Register