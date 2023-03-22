import React, { lazy, Suspense } from 'react'
import { Platform } from 'react-native'
import _useEffect from '../../controllers/_initial';
import { Br, Button, Container2, Div, Icon, Loading, P, Row, Scroll, Span } from '../../other/Components/Html'
import share from '../../other/utils/share';
import Chat from './components/home/Chat'

const Obligations = lazy(() => import('./components/singleItem/Obligations'));
const Description = lazy(() => import('./components/singleItem/Description'));
const ImageDisplay = lazy(() => import('./components/singleItem/ImageDisplay'));
const SliderSimilars = lazy(() => import('./components/singleItem/SliderSimilars'));
const ShowComment = lazy(() => import('./components/singleItem/ShowComment'));
const Specifications = lazy(() => import('./components/singleItem/Specifications'));
const Footer = lazy(() => import('./components/home/Footer'));



const SingleItem = (p) => {
  p._client.getSingleItem()
  p._client.getChildItemComments()
  p._client.getSimilars()
  const savedItem = () => p._user.savedItem()

  return (
    <Container2>
      <Scroll >
        <Row bgcolor='#fff' w='100%' h={50} jc='space-between' >
          <P pr={10} mt={14} fw='bold'>{p.singleItem.title}</P>
          <Row pr={10} mt={14} jc='space-around' w={100} >
            <Icon color='#ccc' size={17} name='bookmark' onClick={savedItem} />
            <Icon color='#ccc' name='share-alt' size={17} onClick={async () => { share(`http://localhost:3000/singleitem/${p.route.params.id}`, 'دیجیکالا') }} />
          </Row>
        </Row>
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

export default SingleItem


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
