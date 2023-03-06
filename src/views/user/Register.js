import React, { useState } from 'react'
import { ContainerTab, Form, Modal, P, Span } from '../../other/Components/Html'

const Register = (p) => {
  const [show, setshow] = useState(false)
  const getCodeForRegister = () => p._user.getCodeForRegister()

  return (
    <ContainerTab ai='center' jc='center' bgcolor='#fafafa'>
      <Span w='90%' f={.98} border={[1, 'silver']} p={8} sh={{ r: 7, o: .3, c: '#aaa' }}>
        <Span w='100%' f={1} border={[1, 'silver']} sh={{ r: 5, o: .2, c: '#aaa' }} >
          <Form autoComplete={false} phore p bgcolor='#fff' ch onClick={getCodeForRegister} {...p} />
        </Span>
      </Span>
      <Modal show={show} setshow={setshow} >
        <P>
          قوانین
        </P>
      </Modal>
    </ContainerTab>
  )
}

export default Register