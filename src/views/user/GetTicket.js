import React from 'react';
import { Icon, Input, Container, P, FlatList, Press, Img, Column, Row, M_icon } from '../../other/Components/Html';


const PvTicket = (p) => {





  const _imagePicker = () => {
    //   imagePicker().then(async(res) => {
    //     let uriParts = res.name.split('.');
    //     let fileType = uriParts[uriParts.length - 1];
    //     const imageName =  `${(new Date().getTime() + Math.random() * 10000).toString()}.${fileType}`;
    //     await p.imagechat({uri:res,imageName })
    //     sendMessage('image', imageName);
    //     handleFalse()
    // })
  }
  

  return (
    <Container style={{}} >

      <FlatList
        data={p.userTicketBox}
        renderItem={({ item, index }) => (
          <Column mv={8} mh={5} w={'80%'} maxw={600} bgcolor='#fff' border={[1, '#f5f5f5']} br={8} p={8} >

            <Row w='100%' jc='space-between' >
              <P fs={9} color='#999' >شما</P>

              <Row >
                <M_icon name='delete' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
                <M_icon name='edit' size={18} onClick={() => { }} color='#999' style={{ paddingHorizontal: 4, marginHorizontal: 4 }} />
              </Row>

            </Row>

            <Column>
              {!item.image ?
                <P fs={12} >{item.title}</P> :
                <Img br={5} w={'100%'} h={280} src={require('../../other/assets/images/a1.jpg')} />
              }
            </Column>

          </Column>
        )}
      />



      <Column style={{ marginTop: 'auto', paddingTop: 10, borderRadius: 5, minWidth: '100%', height: '20%', minHeight: 80, maxHeight: 80, alignSelf: 'center', backgroundColor: '#aac', }}>
        <Column style={{ borderRadius: 5, width: '91%', alignSelf: 'center' }}>
          <Column style={{ minWidth: '100%' }} >
            <Column col1={{ left: 75 }} style={{ position: 'absolute', top: 14, left: 90, zIndex: 111, }}>
              <Icon name={'paperclip'} size={20} color={'#aaa'} onClick={_imagePicker} />
            </Column>
            <Input maxLength={1000} style={{ minHeight: 50 }} iconSize={24}
              onSubmitEditing={() => { }}
              iconPress={{}}
              icon="paper-plane"
              iconColor="#38a"
              color="#25a"
              value={p.newMessage} p="ارسال پیام"
            />

          </Column>
        </Column>
      </Column>

    </Container>
  )
}
export default PvTicket
