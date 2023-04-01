import React from 'react'
import { Container, Scroll, Span, P, Row, Card2, Column, Icon, M_icon, A_icon, Py } from '../../other/Components/Html'
import { localhost } from '../../other/utils/axios/axios'
const Profile = (p) => {
  p._user.getTicketSeen()
  p._user.getImageProfile()
  p._user.getUserSpecification()
  const sendImageProfile = () => p._user.sendImageProfile()

  return (
    <Container ai='center'>
      <Column w={290} h={300}>
        <Span pv={11} mt={10} ><Py>مشخصات حساب کاربری شما</Py></Span>
        <Card2 onClick={sendImageProfile} src={p.imageProfile ? `${localhost}/upload/profile/${p.imageProfile}` : require('../../other/assets/images/logo.png')}
          coulumn1={
            <Column f={1} w='100%'>
              <Row mt={7} pr={12} f={1} ai='center'>
                <Icon name='user-alt' size={13} />
                <P> :</P>
                <Py mt={3} maxw='85%' >{p.fullname}</Py>
              </Row>
            </Column>
          }
          coulumn2={
            <Column f={1} w='100%'>
              {
                p.phoneOrEmail.includes('@') ?
                  <Row pr={12} mt={-7} f={1} ai='center'>
                    <M_icon name='email' size={14} />
                    <P> :</P>
                    <Py mt={3} maxw='85%'>{p.phoneOrEmail}</Py>
                  </Row>
                  :
                  <Row pr={12} mt={-7} f={1} ai='center'>
                    <Icon name='phone' size={13} />
                    <P> :</P>
                    <Py mt={3} maxw='85%'>{p.phoneOrEmail}</Py>
                  </Row>
              }
            </Column>
          }
        />
      </Column>
    </Container >
  )
}

export default Profile