import React from 'react'
import { Container, Scroll, Span, P, Row, Card2, Column } from '../../other/Components/Html'
const Profile = (p) => {
  return (
    <Container>
      <Column ai='center' >
        <Column maxw={700}>
        <Span p={11} mt={10} ><P>مشخصات حساب کاربری شما</P></Span>
          <Card2
            src={require('../../other/assets/images/logo.png')}
            coulumn1={
              <Row f={1} fw='wrap' p={8} ai='center'>
                <Span f={1} fd='row' ph={14} minw='50%'><P>نام: </P><P>احمیم رضا عطار</P></Span>
                <Span f={1} fd='row' ph={14} minw='50%'><P>موبایل: </P><P>09353545665</P></Span>
              </Row>
            }
            coulumn2={
              <Row f={1} fw='wrap' p={8} ai='center'>
                <Span f={1} fd='row' ph={14} minw='50%'><P>ایمیل: </P><P>reza.1375@gmail.com</P></Span>
                <Span f={1} fd='row' ph={14} minw='50%'><P>اکانت اعضای ویژه: </P><P>شما عضو اعضای ویژه نیستسن</P></Span>
              </Row>
            }
          />
        </Column>
      </Column>
    </Container >
  )
}

export default Profile