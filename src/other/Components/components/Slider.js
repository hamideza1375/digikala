import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useState } from 'react'
import { ScrollView } from 'react-native';
import { localhost } from '../../utils/axios/axios';
import { Img, Span, M_icon, Press, Badge, Row } from '../Html'

var count = 0,
  _width,
  plus = true,
  minus

function Slider({width, style, onClick, data}) {

  const [badgeActive, setbadgeActive] = useState(0)

  const ref = useRef()

  const [interval, setinterval] = useState(true)

  const open = () => {
    if(ref.current) {ref.current.scrollTo({ x: width * count, y: 0, animated: true }); setbadgeActive(count) }
    if (count === 0) { plus = true; minus = false }
    if (count === 5) { minus = true; plus = false }
    if (minus) { count = count - 1}
    if (plus) { count += 1}
    
  };

  const right = () => {
    if (count !== 0) count = count - 1
    ref.current && ref.current.scrollTo({ x: width * count, y: 0, animated: true });
    setbadgeActive(count)
  };

  const left = () => {
    if (count !== 5) count += 1
    ref.current && ref.current.scrollTo({ x: width * count, y: 0, animated: true });
    setbadgeActive(count)
  };


  if (_width !== width) {
    ref.current && ref.current.scrollTo({ x: 0, y: 0, animated: true });
    count = 1
    interval && clearInterval(interval)
  }

  useFocusEffect(useCallback(() => {
    return () => (
      clearInterval(interval)
    )
  }, []))


  return (

    <Span style={style} >
      <ScrollView dir='ltr' horizontal ref={ref} onLayout={() => {
        _width = width
        let int = setInterval(sum, 6000);
        function sum() {
          open()
        }
        setinterval(int)
      }} 
      style={{ height: 260, width: width - 2, alignSelf: 'center', borderRadius: 5, overflow: 'hidden', flexWrap: 'wrap' }} >
        {data.map((image , index) => (
          image && <Press key={index} onClick={onClick} w={width} ><Img w='100%' h={300} src={`${localhost}/upload/slider/${image}`} /></Press>
        ))
        }
      </ScrollView>
      <M_icon onClick={right} size={30} name="arrow-back-ios" style={{ paddingVertical: 5, position: 'absolute', zIndex: 10, left: 10, top: 130, color: '#222' }} />
      <M_icon onClick={left} size={30} name="arrow-forward-ios" style={{ paddingVertical: 5, position: 'absolute', zIndex: 10, right: 10, top: 130, color: '#222' }} />

      <Row pos='absolute' b={15} w='100%' jc='center' >
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 5?'#0cf':'#fff8'}/></Span>
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 4?'#0cf':'#fff8'}/></Span>
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 3?'#0cf':'#fff8'}/></Span>
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 2?'#0cf':'#fff8'}/></Span>
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 1?'#0cf':'#fff8'}/></Span>
        <Span w={18} ><Badge h={7} w={12} bgcolor={badgeActive === 0?'#0cf':'#fff8'}/></Span>
      </Row>

    </Span>
  )
}

export default Slider

