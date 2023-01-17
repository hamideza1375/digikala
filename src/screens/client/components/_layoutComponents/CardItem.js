import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Text } from 'react-native'
import { A_icon, Card2, Icon, M_icon, P, Row, Span } from '../../../../Components/Html'
import seconder from '../../../../utils/seconder'

const CardItem = ({ item, spacePrice, offers, h = 240, w = 200, style, sh = { r: 6, o: .4, of: { width: 0, height: 2 } } }) => {

  const [dt, setdt] = useState()

  useFocusEffect(useCallback(() => {
    setTimeout(() => {
      seconder("2023-03-13 22:3:0", ({ days, hours, minutes, seconds }) => (
        setdt(hours + ':' + minutes + ':' + seconds)
      ))
    }, 1000);
  }, []))

  return (
    <Card2
      bgcolor={'#fff'} sh={sh}
      style={[{ minWidth: 161, maxWidth: 300, borderColor: 'silver', width: '100%', flexGrow: 1, marginVertical: 15, height: h }, style]}
      src={item.image}
      coulumn1={<Span mt={8} w={'100%'}><P fs={11} ta='center' as='center' >{item.title}</P></Span>}
      coulumn2={<Span bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
        <Span ai='center' w={'25%'} h={35} border={[0, 'silver']} pt={1} >
          {/* <Icon name='microchip' size={16} style={{ transform: [{ scaleY: .6 }] }} /> */}
          <M_icon name='memory' size={16} />
          <P fs={8} mt={1} ta='center' >{item.cpuCore} هسته</P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
          <A_icon name='hdd' size={16} />
          <P fs={8} mt={1} ta='center' >{item.sdCard} گیگ </P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <M_icon name='sd-card' size={16} style={{ transform: [{ rotate: '90deg' }] }} />
          <P fs={8} mt={1} ta='center' >{item.ram} گیگ</P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <A_icon name='camera' size={15} />
          <P fs={8} mt={1} ta='center' >{item.camera} پیکسل</P>
        </Span>
      </Span>
      }
      // textDecorationLine:'underline line-through'
      coulumn3={<Span mt={8} fd='row' jc='space-evenly' w={'100%'}>
        {offers ? 
        <Row>
          <P fs={11.5} >{spacePrice(item.price)} تومان</P>
          <P style={{ textDecorationLine: 'line-through', color: 'red', fontSize: 9.5 }} >{spacePrice(item.price)} ت </P>

        </Row>
          :
          <Span>
            <P fs={11.5}>{spacePrice(item.price)} تومان</P>
          </Span>}

      </Span>}
      coulumn4={offers && <Span fd='row' jc='space-between' w={'100%'} bgcolor='red' h='100%' p={7}><P color='white' >{dt}</P><P color='white' >12%</P></Span>}
    />
  )
}

export default CardItem