import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5'
import { A_icon, Card2, M_icon, P, Pfa, Row, Span } from '../../../../other/Components/Html'
import { localhost } from '../../../../other/utils/axios/axios'
import seconder from '../../../../other/utils/seconder'

let interval
const CardItem = ({ onClick, item, spacePrice, h = 240, w , style, sh = { r: 6, o: .4, of: { width: 0, height: 2 } } }) => {

  const [dt, setdt] = useState()

  useEffect(() => {
    if (item.offerTime?.exp > new Date().getTime()) {
      seconder(item.offerTime?.exp, ({ days, hours, minutes, seconds }) => (
        setdt(days + '/' + hours + ':' + minutes + ':' + seconds)
      ))
    }
  }, [])

  return (
    <Card2
      onClick={onClick}
      bgcolor={'#fff'} sh={sh}
      style={[{ minWidth: 161, maxWidth: 500, width: w, borderColor: 'silver',  flexGrow: 1, marginVertical: 15, height: h }, style]}
       src={item.imageUrl && `${localhost}/upload/childItem/${item.imageUrl}`}
      coulumn1={<Span mt={8} w={'100%'}><P fs={11} ta='center' as='center' >{item.title}</P></Span>}
      coulumn2={<Span bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
        <Span ai='center' w={'25%'} h={35} border={[0, 'silver']} pt={1} >
          <M_icon name='memory' size={16} />
          <P fs={8} mt={1} ta='center' >{item.cpuCore} هسته</P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
          <Icon name='hdd' size={16} color='#000' />
          <P fs={8} mt={1} ta='center' >{item.storage} گیگ </P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <Icon name='memory' size={16} />
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
        {item.offerTime?.exp > new Date().getTime() ?
          <Row>
            <Pfa fs={15} >{spacePrice(parseInt(item.price - ((item.price / 100) * item.offerValue)))} تومان</Pfa>
            <Pfa fs={13} style={{ textDecorationLine: 'line-through', color: 'red' }} >{spacePrice(item.price)} ت </Pfa>

          </Row>
          :
          <Span>
            <Pfa fs={15}>{spacePrice(item.price)} تومان</Pfa>
          </Span>}

      </Span>}
      c4={item.offerTime?.exp > new Date().getTime() ? 1 : .1} coulumn4={item.offerTime?.exp > new Date().getTime() ? <Span fd='row' jc='space-between' w={'100%'} bgcolor='red' h='100%' p={7}><P color='white' >{dt}</P><P color='white' >{item.offerValue}%</P></Span> : <></>}
    />
  )
}

export default CardItem