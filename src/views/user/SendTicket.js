import React from 'react'
import { Column, Form, Icon, M_icon, P, Press, Row } from '../../other/Components/Html'

const SendTicket = (p) => {

  const sendNewTicket = () => p._user.sendNewTicket()

  return (
    <Column>

      <Column style={{ transform: [{ scaleY: .8 }] }} >
        <Form top={0} mt={0} pb={0} t m plackTextTop={false} btn={false} {...p} />
        <Row mt={-1} >

          <Column fg={1} >
            <Form edit top={0} mt={0} pt={0} im plackTextTop={false} onClick={sendNewTicket} {...p} />
          </Column>

          <Column bgcolor={'#eee'} w={90}  >
            <Press w={80} bgcolor='#f22' br={5} fd='row' h={40} ai='center' mt={40} onClick={() => { p.setImageUrl(''); p.toast.success('عکس حذف شد', '✔') }} >
              <M_icon name='delete' size={30} />
              <P fs={9}>حذف عکس</P>
            </Press>
          </Column>

        </Row>
      </Column>

    </Column>
  )
}

export default SendTicket