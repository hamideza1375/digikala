import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { A_icon, Card2, Icon, P, Span } from '../../../../Components/Html'
import seconder from '../../../../utils/seconder'

const CardItem = ({ item, spacePrice }) => {

  const [dt, setdt] = useState()

  useFocusEffect(useCallback(() => {
    setTimeout(() => {
      seconder("2023-03-13 22:3:0", ({ days, hours, minutes, seconds }) => (
        setdt(hours + ':' + minutes + ':' + seconds)
      ))
    }, 1000);
  }, []))

  return (
    <Card2 h={240} w={200} bgcolor={'#fff'} sh={{ r: 10, o: 2, of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={item.image}
      coulumn1={<Span mt={8} w={'100%'}><P fs={11} ta='center' as='center' >{item.title}</P></Span>}
      coulumn2={<Span bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <Icon name='microchip' size={16} style={{ transform: [{ scaleY: .6 }] }} />
          <P fs={9} ta='center' >{item.cpuCore} هسته</P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
          <A_icon name='hdd' size={16} />
          <P fs={9} ta='center' >{item.sdCard} گیگ </P>
        </Span>
        <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
          <P >Ram</P>
          <P fs={9} ta='center' >{item.ram} گیگ</P>
        </Span>
        <Span ai='center' w={'25%'} h={35} pt={1} >
          <A_icon name='camera' size={16} />
          <P fs={9} ta='center' >{item.camera} پیکسل</P>
        </Span>
      </Span>
      }
      coulumn3={<Span mt={8} fd='row' jc='space-evenly' w={'100%'}><P>{spacePrice(item.price)} تومان</P></Span>}
      coulumn4={<Span fd='row' jc='space-between' w={'100%'} bgcolor='red' h='100%' p={7}><P color='white' >{dt}</P><P color='white' >12%</P></Span>}
    />
  )
}

export default CardItem