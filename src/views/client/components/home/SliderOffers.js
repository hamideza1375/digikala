import React, { useState } from 'react'
import { Platform } from 'react-native'
import { A_icon, Card2, Div, Icon, Img, P, ScrollSlider, Span } from '../../../../other/Components/Html'
import LinearGradient from '../../../../other/Components/other/LinearGradient'
import seconder from '../../../../other/utils/seconder'
import s from '../../style/client.module.scss'
import CardItem from '../_layoutComponents/CardItem'


const SliderOffers = (p) => {
  const [dt, setdt] = useState()

  p.useEffect(() => {
    setTimeout(() => {
      seconder("2023-03-13 22:3:0", ({ days, hours, minutes, seconds }) => (
        setdt(hours + ':' + minutes + ':' + seconds)
      ))
    }, 1000);
  }, [])


  return (
    <>
      <Span h={330} >
        <Img class={s.o_img} style={{ position: 'absolute', top: 20, left: 2, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 25, left: 50, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 235, right: 55, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 231, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 240, left: 15, zIndex: -1, width: 88, height: 88 }} src={require('../../../../other/assets/images/glass12.png')} />
        <Span f={1} >
          <Span class={s.o_offerGlass2} t={0}></Span>
          <Span class={s.o_offerGlass} t={0}></Span>
          <Span fd='row' ai='center' mt={7} >
            <P mr={15} fs={15} color='#444' > %تخفیف ها</P>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginHorizontal: 25 }} ></LinearGradient>
          </Span>

          <ScrollSlider
            {...p}
            style={[{ height: 300, minHeight: 300 }, Platform.OS !== 'web' ? { paddingRight: 290, height: 220 } : { paddingRight: 10, height: 220 }]}
            ccStyle={{ height: 300, minHeight: 300, justifyContent: 'center' }}
            data={p.offers}
            renderItem={({ item, index }) => (
              <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
                <CardItem item={item} spacePrice={p.spacePrice} offers w={170} />
              </Span>
            )}
          />

        </Span>
      </Span>
    </>
  )
}

export default SliderOffers