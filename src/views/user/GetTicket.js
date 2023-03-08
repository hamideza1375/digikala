import React from 'react';
import { TextInput } from 'react-native';
import { Icon, Input, Container, P, FlatList, Press, Img, Column, Row, M_icon } from '../../other/Components/Html';
import { localhost } from '../../other/utils/axios/axios';
import { imagePicker } from '../../other/utils/imagePicer';


const PvTicket = (p) => {
  p._user.singleTicket()

  const sendTicketAnswer = () => p._user.ticketAnswer()

  const _imagePicker = () => {
    imagePicker().then(async (res) => {
      p.setimageUrl(res)
      sendTicketAnswer()
    })
  }

  let a = p.singleTicket.answer
  return (
    <Container style={{}} >
      {p.singleTicket.answer &&
        <FlatList
          data={[{ _id: '1', ...p.singleTicket }, ...p.singleTicket.answer]}
          renderItem={({ item, index }) => (
            item.userId === p.tokenValue.userId ? <Column mv={8} mh={5} w={'80%'} maxw={600} bgcolor='#fff' border={[1, '#f5f5f5']} br={8} p={8} as='flex-start'>
              <Row w='100%' jc='space-between' >
                <P ta='right' fs={9} color='#999' >شما</P>
                <Row >
                  <M_icon name='delete' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                  <M_icon name='edit' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                </Row>
              </Row>
              <Column>
                <P ta='right' fs={12} >{item.message}</P>
                {item.imageUrl ? <Img br={5} w={'100%'} h={280} src={require(`${localhost}/upload/image/${item.imageUrl}`)} /> : <></>}
              </Column>
            </Column>
              :
              <Column mv={8} mh={5} w={'80%'} maxw={600} bgcolor='#fff' border={[1, '#f5f5f5']} br={8} p={8} as='flex-end'>
                <Row w='100%' jc='space-between' >
                  <P ta='right' fs={9} color='#999' ></P>
                  <Row >
                    <M_icon name='delete' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                    <M_icon name='edit' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                  </Row>
                </Row>
                <Column>
                  <P ta='right' fs={12} >{item.message}</P>
                  {item.imageUrl ? <Img br={5} w={'100%'} h={280} src={require(`${localhost}/upload/image/${item.imageUrl}`)} /> : <></>}
                </Column>
              </Column>
          )}
        />}

      <Column style={{ marginTop: 'auto', paddingTop: 10, borderRadius: 5, minWidth: '100%', height: '20%', minHeight: 80, maxHeight: 80, alignSelf: 'center', backgroundColor: '#aac', }}>
        <Column style={{ borderRadius: 5, width: '91%', alignSelf: 'center' }}>
          <Column style={{ minWidth: '100%' }} >
            <Column col1={{ left: 75 }} style={{ position: 'absolute', top: 14, left: 90, zIndex: 111, }}>
              <Icon name={'paperclip'} size={20} color={'#aaa'} onClick={_imagePicker} />
            </Column>
            <Input maxLength={1000} style={{ minHeight: 50 }} iconSize={24}
              onSubmitEditing={sendTicketAnswer}
              iconPress={sendTicketAnswer}
              icon="paper-plane"
              iconColor="#38a"
              color="#25a"
              value={p.message} p="ارسال پیام"
              onChangeText={(text) => p.setmessage(text)}
            />
            {/* <TextInput onChangeText={} /> */}
          </Column>
        </Column>
      </Column>

    </Container>
  )
}
export default PvTicket
