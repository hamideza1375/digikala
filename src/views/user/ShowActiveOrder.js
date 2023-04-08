import React from 'react'
import { A_icon, Card, Card2, Column, FlatList, M_icon, P, Press, Row, Span } from '../../other/Components/Html'
import spacePrice from '../../other/utils/spacePrice'
import convertColor from '../../other/utils/convertColor'

const ShowActiveOrder = (p) => {

  return (

    <FlatList
      column1={1} column2={1} column3={1} column4={2}
      column5={2} column6={3}
      keyExtractor={(data, index) => index.toString()}
      data={Object.entries(p.productBasket)}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} ai='center' col2={{ marginHorizontal: 3 }} col1={{ marginHorizontal: 3 }}>

          <Card
            imgClick={() => p.navigation.navigate('SingleItem', { id: item[0] })}
            style={{ maxWidth: 550 }}
            dr='ltr'
            bgcolor='white'
            img={`${localhost}/upload/childItem/${p.item[1].imageUrl1}`}
            headerRow={
              <Span minh='100%' >
                <P onClick={() => p.navigation.navigate('SingleItem', { id: item[0] })} >{item[1].title}</P>
              </Span>}
            bodyRow={
              <Span minh='100%' >
                <Row ai='center' ><P fs={13} mv={4}>رنگ: </P><P fs={11} >{convertColor(item[1].color)}</P></Row>
                <Row ai='center' ><P fs={13} mv={4}>قیمت: </P><P fs={11} >{spacePrice(item[1].price)}</P></Row>
                <Row ai='center' ><P fs={13} mv={4}>گارانتی: </P><P fs={11} >{item[1].warranty}ماه</P></Row>
                <Row ai='center' w='100%' jc='space-between'>
                  <Row ai='center' ><P fs={13} mv={4}>تعداد: </P><P fs={11} >{item[1].number} عدد</P></Row>
                </Row>
                <Row btw={1} pt={9} mb={-7} ai='center' ><P fs={13} >قیمت کل: </P><P fs={11} color='#0c8'>{spacePrice(item[1].price * item[1].number)}</P></Row>
              </Span>}

          />
        </Span>)
      }
    />
  )
}

export default ShowActiveOrder