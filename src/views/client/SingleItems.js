import React, { lazy, Suspense } from 'react'
import { Platform } from 'react-native'
import { Br, Container2, Div, Loading, P, Scroll, Span } from '../../other/Components/Html'
import Chat from './components/home/Chat'

const Obligations = lazy(() => import('./components/singleItem/Obligations'));
const Description = lazy(() => import('./components/singleItem/Description'));
const ImageDisplay = lazy(() => import('./components/singleItem/ImageDisplay'));
const SliderSimilars = lazy(() => import('./components/singleItem/SliderSimilars'));
const ShowComment = lazy(() => import('./components/singleItem/ShowComment'));
const Specifications = lazy(() => import('./components/singleItem/Specifications'));
const Footer = lazy(() => import('./components/home/Footer'));



const SingleItems = (p) => {
  p.useEffect(() => {
    // p.navigation.setOptions({
    //   header: () =>
    //     <SearchBar Register={p.width > 395 ? true : false} icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'} logoPress={() => p.navigation.navigate('Home')} row={
    //       <Span fd='row' mt={19} >
    //         <P fs={10} mh={7} >موبایل تبلت</P>
    //         <P fs={10} mh={7} >هدفون هنزفیری</P>
    //         <P fs={10} mh={7} >لوازم جانبی</P>
    //       </Span>} src={require('../../other/assets/images/logo.png')} />
    // });
  }, [])
  return (
    <Container2>
      <Scroll >
        <Span bgcolor='#fff' w='100%' h={50} >
          <P pr={10} mt={14} fw='bold'>گوشی موبایل شیایومی مدل 12</P>
        </Span>
        <Br />
        <Span>
          <Span fd='row-reverse' fw={'wrap'} w='100%' jc='space-between' bgcolor='#fff' ph={8} pb={25} >

            <Span fg={1} mh={5} mt={20}>
              <Span w='95%'>
                <Suspense>
                  <Description {...p} />
                </Suspense>
              </Span>
            </Span>

            <Span fg={1} mh={5} mt={20}>
              <Span w='95%'>
                <Suspense>
                  <ImageDisplay {...p} />
                </Suspense>
              </Span>
            </Span>

            <Span ai='center' fg={1} mh={5} mt={20}>
              <Span ai='center' w='95%'>
                <Suspense>
                  <Specifications {...p} />
                </Suspense>

                <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
                  <Obligations mt={15} {...p} />
                </Suspense>
              </Span>
            </Span>

          </Span>
        </Span>
        <Br />
        <Span>
          <Suspense>
            <SliderSimilars {...p} />
          </Suspense>
        </Span>
        <Div>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <ShowComment {...p} />
          </Suspense>
        </Div>
        <Span>
          <Suspense>
            <Footer {...p} />
          </Suspense>
        </Span>
      </Scroll>
      <Chat {...p} />
    </Container2>
  )
}

export default SingleItems


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
