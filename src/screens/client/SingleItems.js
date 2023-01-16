import React from 'react'
import { Platform } from 'react-native'
import { Br, Div, P, Scroll, Span } from '../../Components/Html'
import Chat from './components/home/Chat'
import Obligations from './components/singleItem/Obligations'
import Description from './components/singleItem/Description'
import ImageDisplay from './components/singleItem/ImageDisplay'
import SliderSimilars from './components/singleItem/SliderSimilars'
import ShowComment from './components/singleItem/ShowComment'
import Specifications from './components/singleItem/Specifications'
import Footer from './components/home/Footer'

const SingleItems = (p) => {
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
          <SliderSimilars {...p} />
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

export default SingleItems


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
