import React, { useState } from 'react'
import { Platform } from 'react-native'
import { A_icon, Card2, Div, Icon, Img, P, ScrollSlider, Span } from '../../../Components/Html'
import LinearGradient from '../../../Components/other/LinearGradient'
import seconder from '../../../utils/seconder'
import s from '../work.module.scss'


const Offers = (p) => {
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
      <Div>
        <Img class={s.o_img} style={{ position: 'absolute', top: 20, left: 2, zIndex: -1, width: 88, height: 88 }} src={require('../../../assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 25, left: 50, zIndex: -1, width: 88, height: 88 }} src={require('../../../assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 255, right: 55, zIndex: -1, width: 88, height: 88 }} src={require('../../../assets/images/glass1.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 251, zIndex: -1, width: 88, height: 88 }} src={require('../../../assets/images/glass2.png')} />
        <Img class={s.o_img} style={{ position: 'absolute', top: 265, left: 15, zIndex: -1, width: 88, height: 88 }} src={require('../../../assets/images/glass12.png')} />
        <Div>
          <Div class={s.o_offerGlass2} t={0}></Div>
          <Div class={s.o_offerGlass} t={0}></Div>
          <Span fd='row' ai='center' mt={7} >
            <P mr={15} fs={15} color='#444' > %تخفیف ها</P>
            <LinearGradient nativeStart={{ x: 1.5, y: 1.5 }} webStart={{ x: 7 }} colors={['#f5f', '#505']} style={{ width: '50%', height: 1, flexGrow: 1, marginHorizontal: 25 }} ></LinearGradient>
          </Span>

            <ScrollSlider
              {...p}
              style={[{ height: 300, minHeight: 300 }, Platform.OS !== 'web' ? { paddingRight: 290, height: 220 } : { paddingRight: 10, height: 220 }]}
              ccStyle={{ height: 300, minHeight: 300,justifyContent:'center', alignItems: 'center' }}
              data={p.childMobile}
              renderItem={({ item, index }) => (
                <Span h={260} w={230} ai='center'  >
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
                    coulumn3={<Span mt={8} fd='row' jc='space-evenly' w={'100%'}><P>{p.spacePrice(item.price)} تومان</P></Span>}
                    coulumn4={<Span fd='row' jc='space-between' w={'100%'} bgcolor='red' h='100%' p={7}><P color='white' >{dt}</P><P color='white' >12%</P></Span>}
                  />
                </Span>
              )}
            />

        </Div>
      </Div>
    </>
  )
}

export default Offers