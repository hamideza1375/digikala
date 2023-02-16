import React from 'react'
import { ContainerTab, Form, Span } from '../../other/Components/Html'

const Login = () => {
  return (
    <ContainerTab ai='center' jc='center' bgcolor='#fafafa'>
      <Span w='90%' f={.98} border={[1, 'silver']} p={8} sh={{ r: 7, o: .3, c: '#aaa' }}>
        <Span w='100%' f={1} border={[1, 'silver']} sh={{ r: 5, o: .2, c: '#aaa' }} >
          <Form ph p bgcolor='#fff' ch {...p} />
        </Span>
      </Span>
    </ContainerTab>
  )
}

export default Login