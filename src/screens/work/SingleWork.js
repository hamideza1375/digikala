import React from 'react'
import { Platform, View } from 'react-native'
import { A_icon, Badge, Br, Button, Card, Card2, Div, Icon, Img, M_icon, P, Press, Scroll, ScrollSlider, SearchBar, Span } from '../../Components/Html'
import Chat from './components/Chat'
import Obligations from './components/Obligations'
import Description from './components/Description'
import ImageDisplay from './components/ImageDisplay'
import Popular from './components/Popular'
import ShowComment from './components/ShowComment'
import Specifications from './components/Specifications'
import Footer from './components/Footer'

const SingleWork = (p) => {
  p.useEffect(() => {
    // p.navigation.setOptions({
    //   header: () =>
    //     <SearchBar Register={p.width > 395 ? true : false} icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'} logoPress={() => p.navigation.navigate('Home')} row={
    //       <Span fd='row' mt={19} >
    //         <P fs={10} mh={7} >موبایل تبلت</P>
    //         <P fs={10} mh={7} >هدفون هنزفیری</P>
    //         <P fs={10} mh={7} >لوازم جانبی</P>
    //       </Span>} src={require('../../assets/images/logo.png')} />
    // });
  }, [])
  return (
    <Span f={1} style={{ maxHeight: Platform.OS === 'web' ? 'calc(100vh - 65px)' : '100%' }} >
      <Scroll >
        <Span bgcolor='#fff' w='100%' h={50} >
          <P pr={10} mt={14} fw='bold'>گوشی موبایل شیایومی مدل 12</P>
        </Span>
        <Br />
        <Span>
          <Span fd='row-reverse' fw={'wrap'} w='100%' jc='space-between' bgcolor='#fff' ph={8} pb={25} >
           
          <Span fg={1} mh={5} mt={20}>
            <Span w='95%'>
              <Description {...p} />
            </Span>
            </Span>


            <Span fg={1} mh={5} mt={20}>
            <Span w='95%'>
              <ImageDisplay {...p} />
            </Span>
            </Span>

            
            <Span ai='center' fg={1} mh={5} mt={20}>
            <Span ai='center' w='95%'>
              <Specifications {...p} />
              <Obligations mt={15} {...p} />
            </Span>
            </Span>
            
          </Span>
        </Span>
        <Br />
        <Span>
          <Popular {...p} />
        </Span>
        <Div>
          <ShowComment {...p} />
        </Div>
        <Span>
          <Footer {...p} />
        </Span>
      </Scroll>
      <Chat {...p} />
    </Span>
  )
}

export default SingleWork


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
