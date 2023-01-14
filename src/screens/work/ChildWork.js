import React from 'react'
import { Platform, View } from 'react-native'
import { A_icon, Badge, Br, Button, Card, Card2, Div, FlatList, Icon, Img, M_icon, P, Press, Scroll, ScrollSlider, SearchBar, Span } from '../../Components/Html'
import Chat from './components/Chat'
import Obligations from './components/Obligations'
import Description from './components/Description'
import ImageDisplay from './components/ImageDisplay'
import Popular from './components/Popular'
import ShowComment from './components/ShowComment'
import Specifications from './components/Specifications'
import Footer from './components/Footer'

const ChildWork = (p) => {
  // p.useEffect(() => {
  //   p.navigation.setOptions({
  //     header: () =>
  //       <SearchBar Register={p.width > 395 ? true : false} icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'} logoPress={() => p.navigation.navigate('Home')} row={
  //         <Span fd='row' mt={19} >
  //           <P fs={10} mh={7} >موبایل تبلت</P>
  //           <P fs={10} mh={7} >هدفون هنزفیری</P>
  //           <P fs={10} mh={7} >لوازم جانبی</P>
  //         </Span>} src={require('../../assets/images/logo.png')} />
  //   });
  // }, [])
  return (
      <Span style={{ maxHeight: Platform.OS === 'web' ? 'calc(100vh - 64px)' : '100%' }}>
      <Span fd='row-reverse' w='100%' f={1}>
       {/* <p style={{flexDirection:'column'}} ></p> */}
        <Span f={5} >
          <FlatList
            colomn={1} colomn1={1} colomn2={2} colomn3={2} 
            colomn4={3} colomn5={4} colomn6={4}
            data={p.childMobile}
            renderItem={({ item, index }) => (
              <Span minw={155}
                col={{ marginHorizontal:3 }} col1={{ marginHorizontal:3 }}
                //  col2={{ width: '30%' }} col3={{ width: '20%' }} col4={{ width: '20%' }}
                //   col5={{ width: '20%' }} col6={{ width: '10%' }}
                fg={1} mh={7} h={260} >
                <Card2 h={240} w={'100%'} bgcolor={'#fff'} sh={{ r: 10, o: 2, of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={item.image}
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
                  coulumn4={<Span fd='row' jc='space-around' w={'100%'}></Span>}
                />
              </Span>)}
          />

        </Span>

        <Span f={1} fg={1} minw={150} border={[1]} ></Span>


        <Chat {...p} />
      </Span>
      </Span>

  )
}

export default ChildWork


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
