import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { Icon, Input, Container, P, FlatList, Press, Img, Column, Row, M_icon, Dropdown, A_icon, Modal, Card2, Button, Form } from '../../other/Components/Html';
import _Alert from '../../other/utils/alert';
import { localhost } from '../../other/utils/axios/axios';
import { imagePicker } from '../../other/utils/imagePicer';
import { truncate } from '../../other/utils/truncate';


const PvTicket = (p) => {
  const [showModalEditTicket, setshowModalEditTicket] = useState(false)
  const [itemId, setitemId] = useState('')
  p._user.ticketSeen()

  p._user.getAnswersTicket()
  const getSingleAnswerTicket = (itemId) => p._user.getSingleAnswerTicket(itemId)
  const sendAnswer = () => {
    if (p.imageUrl.name || p.message) p._user.sendTicketAnswer(() => { setTimeout(() => { p.$.id('ticketFlatlist').scrollToEnd() }, 1000); });
    else p.toast.error('خطا', 'هنوز چیزی تایپ نکردین')
  }
  const deleteAnswer = (ticketId) => _Alert.alert("مطمئنید حذف شود؟", "", [{ text: "Cancel", onPress: () => { } }, { text: "OK", onPress: () => { p._user.deleteAnswerTicket(ticketId) } },])
  const editAnswer = (ticketId) => { p._user.editAnswerTicket(ticketId, () => setshowModalEditTicket(false)) }
  const _imagePicker = () => imagePicker().then(async (res) => { p.setimageUrl(res) })

  return (
    <Container style={{}} >
      {p.answersTicket.length &&
        <FlatList
          id='ticketFlatlist'
          keyExtractor={(data) => data._id}
          data={p.answersTicket}
          renderItem={({ item, index }) => (
            item.userId === p.tokenValue.userId ? <Column mv={8} mh={5} w={'80%'} maxw={600} bgcolor='#fff' border={[1, '#f5f5f5']} br={8} p={8} as='flex-start'>
              <Row onLayout={() => { console.log(); }} w='100%' jc='space-between' >
                <P ta='right' fs={9} color='#999' >شما</P>
                <Row >
                  {index !== 0 &&
                    <>
                      <M_icon name='delete' size={18} onClick={() => { deleteAnswer(item._id) }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                      <M_icon name='edit' size={18} onClick={() => { setshowModalEditTicket(true); getSingleAnswerTicket(item._id); setitemId(item._id) }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                    </>
                  }
                </Row>
              </Row>
              <Column>
                <P ta='right' fs={12} pb={3} >{item.message}</P>
                {item.imageUrl ? <Img br={5} w={'100%'} h={280} src={`${localhost}/upload/ticket/${item.imageUrl}`} /> : <></>}
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
                  {item.imageUrl ? <Img br={5} w={'100%'} h={280} src={`${localhost}/upload/ticket/${item.imageUrl}`} /> : <></>}
                </Column>
              </Column>
          )}
        />}

      <Column style={{ marginTop: 'auto', paddingTop: 10, borderRadius: 5, minWidth: '100%', height: '20%', minHeight: 80, maxHeight: 80, alignSelf: 'center', backgroundColor: '#aac', }}>
        <Column style={{ borderRadius: 5, width: '91%', alignSelf: 'center' }}>
          <Column style={{ minWidth: '100%' }} >
            <Column col1={{ left: 75 }} style={{ position: 'absolute', top: 14, left: 90, zIndex: 111, }}>

              {p.imageUrl.name &&
                <Row bgcolor='white' pos='absolute' t={-22} l={'9%'} w={165} br={3} jc='space-around'>
                  <Column w={14} ><A_icon name='close' size={15} color='red' onClick={() => { p.setimageUrl({}) }} style={{ position: 'absolute', top: 2, right: 2 }} /></Column>
                  <P ph={4} pv={2} fs={10} >تصویر افزوده شد  </P>
                  <P p={2} pl={4} fs={10}>{truncate(p.imageUrl.name, 10, false)}</P>
                </Row>}

              <Icon name={'paperclip'} size={20} color={'#aaa'} onClick={_imagePicker} />
            </Column>
            <Input maxLength={1000} min={99} style={{ minHeight: 50 }} iconSize={24}
              onSubmitEditing={sendAnswer}
              iconPress={sendAnswer}
              icon="paper-plane"
              iconColor="#38a"
              color="#25a"
              value={p.message} p="ارسال پیام"
              onChangeText={(text) => p.setmessage(text)}
            />
          </Column>
        </Column>
      </Column>

      <Modal show={showModalEditTicket} setshow={setshowModalEditTicket} onHidden={() => { p.setimageUrl({}); p.setmessage('') }} >
        <Form m im edit onClick={() => editAnswer(itemId)} />
      </Modal>

    </Container>
  )
}
export default PvTicket
