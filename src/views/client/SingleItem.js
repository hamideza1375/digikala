import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { lazy, Suspense, useState } from 'react'
import { Platform } from 'react-native'
import _useEffect from '../../controllers/_initial';
import { Br, Button, Container2, ContainerTab, Div, Icon, Loading, M_icon, P, Row, Scroll, Span } from '../../other/Components/Html'
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
  p._client.getSingleSavedItems()
  const savedItem = () => p._client.savedItem()

  return (
    <ContainerTab>
      <Scroll >
        <Row bgcolor='#fff' w='100%' h={50} jc='space-between' >
          <P pr={10} mt={14} fw='bold'>{p.singleItem.title}</P>
          <Row pr={10} mt={14} jc='space-around' w={100} >
            {p.bookmark ?
              <M_icon color='#ccc' size={17} name='bookmark' onClick={() => savedItem()} />
              :
              <M_icon color='#ccc' size={17} name='bookmark-border' onClick={() => savedItem()} />
            }
            <Icon color='#ccc' name='share-alt' size={17} onClick={async () => { share(`http://localhost:3000/singleitem/${p.route.params.id}`, 'دیجیکالا') }} />
            {p.navigation.canGoBack()?<Icon color='#ccc' name='arrow-left' size={17} onClick={ () => { p.navigation.goBack() }} />:<></>}
          </Row>
        </Row>
        <Br />
        <Span>
          <Span fd='row-reverse' fw={'wrap'} w='100%' jc='space-between' bgcolor='#fff' pb={25} >

            <Span fg={1} mt={20}>
              <Span w='98.5%'>
                <Suspense>
                  <Description {...p} />
                </Suspense>
              </Span>
            </Span>

            <Span fg={1} mt={20}>
              <Span w='98.5%'>
                <Suspense>
                  <ImageDisplay {...p} />
                </Suspense>
              </Span>
            </Span>

            <Span ai='center' fg={1} mt={20}>
              <Span ai='center' w='98%' as='center'>
                <Suspense>
                  <Specifications {...p} />
                </Suspense>

                <Suspense style={{ backgroundColor: 'red' }} fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
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
      {/* <Chat {...p} /> */}
    </ContainerTab>
  )
}

export default SingleItem


