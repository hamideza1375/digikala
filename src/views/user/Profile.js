import React from 'react'
import { Container, Scroll, Span, P, Row, Card2, Column } from '../../other/Components/Html'
const Profile = (p) => {
  p._user.getTicketSeen()

  return (
    <Container ai='center'>
        <Column w='100%' maxw={700}>
        <Span p={11} mt={10} ><P>مشخصات حساب کاربری شما</P></Span>
          <Card2
          imageWidth={285}
          w='90%'
          h={340}
            src={require('../../other/assets/images/logo.png')}
            coulumn1={
              <Row f={1} w='100%' ai='center' jc='space-between'>
                <Span jc='center' f={1} fd='row' ph={8}><P>نام: </P><P>احمیم رضا عطار</P></Span>
                <Span jc='center' f={1} fd='row' ph={8}><P>موبایل: </P><P>09353545665</P></Span>
              </Row>
            }
            coulumn2={
              <Column f={1} ai='center' jc='center' w='100%'>
                <Span f={1} fd='row'><P>ایمیل: </P><P>reza.1375@gmail.com</P></Span>
              </Column>
            }
          />
        </Column>
    </Container >
  )
}

export default Profile