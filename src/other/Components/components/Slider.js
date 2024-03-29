import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, ScrollView, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import { localhost } from '../../utils/axios/axios';
import { Img, Span, M_icon, Press, Badge, Row } from '../Html'

var count = 0,
  _width,
  plus = true,
  minus,
  interval

function Slider({ width, style, onClick, data }) {

  const [badgeActive, setbadgeActive] = useState(0)
  const [showOpacity, setshowOpacity] = useState(false)

  const ref = useRef()


  const open = () => {
    if (ref.current) { ref.current.scrollTo({ x: width * count, y: 0, animated: true }); setbadgeActive(count) }
    if (count === 0) { plus = true; minus = false }
    if (count === 5) { minus = true; plus = false }
    if (minus) { count = count - 1 }
    if (plus) { count += 1 }

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




  useFocusEffect(useCallback(() => {

    _width = width
    interval = setInterval(sum, 5000);
    function sum() {
      open()
    }

    return () => {
      count = 1
      _width = 0
      plus = true;
      minus = false
      setbadgeActive(0)
      clearInterval(interval)
    }
  }, []))




  useEffect(() => {
    setTimeout(() => {
      setshowOpacity(true)
    }, 1000);
  }, [])




  return (

    <Span style={style} >

      <Row w='80%' h='100%' pos='absolute' as='center' jc='space-between' z={100000} >
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
        <Press w='10%' h='100%' onClick={onClick} />
      </Row>

      <ScrollView 
          showsHorizontalScrollIndicator={false}
      dir='ltr' horizontal ref={ref}
        contentContainerStyle={{ overflow: 'hidden', }}
        style={{ height: 260, width: width - 2, alignSelf: 'center', borderRadius: 5, overflow: 'hidden', flexWrap: 'wrap' }} >
        {data.map((image, index) => (
          ((image) && (badgeActive === index)) ? <View key={index} style={{ width }} ><AnimationImage image={image} width={width} style={!showOpacity ? { opacity: 1 } : {}} /></View> : <View key={index} />
        ))
        }
      </ScrollView>
      <Press pl={6} pb={1} opc={.7} style={{ backgroundColor: '#fafafa', borderRadius: 50, justifyContent: 'center', width: 35, height: 35, position: 'absolute', zIndex: 10, alignItems: 'center', left: 10, top: 130, }} >
        <M_icon onClick={right} size={20} name="arrow-back-ios" style={{ color: '#222' }} />
      </Press>
      <Press pl={2} pb={1} opc={.7} style={{ backgroundColor: '#fafafa', borderRadius: 50, justifyContent: 'center', width: 35, height: 35, position: 'absolute', zIndex: 10, alignItems: 'center', right: 10, top: 130, }} >
        <M_icon onClick={left} size={20} name="arrow-forward-ios" style={{ color: '#222' }} />
      </Press>

      <Row fd='row-reverse' pos='absolute' b={15} w='100%' jc='center' >
        {data.map((image, index) => (
          data.length - 1 !== index ? <Span key={index} w={18} ><Badge h={7} w={12} bgcolor={badgeActive === index ? '#0cf' : '#fff8'} /></Span> : <View key={index} />
        ))
        }
      </Row>

    </Span>
  )
}



function AnimationImage({ image, width, style }) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(useCallback(() => {
    return () => {
      fadeAnim.setValue(0)
    }
  }, []))

  const setOpacity = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  return (
    <Animated.View onLayout={() => setOpacity()} style={[{ width, opacity: fadeAnim }, style]}  ><View style={{ width }} ><Img w='100%' style={{ resizeMode: 'stretch' }} h={300} src={`${localhost}/upload/slider/${image}`} /></View></Animated.View>
  )
}



export default Slider

