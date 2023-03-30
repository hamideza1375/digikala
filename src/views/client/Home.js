import React, { lazy, Suspense } from 'react'
import { Span, Slider, Scroll, Div, ContainerTab, Loading } from '../../other/Components/Html'
import Chat from './components/home/Chat'
import Category from './components/home/Category';
import _useEffect from '../../controllers/_initial';
const SliderOffers = lazy(() => import('./components/home/SliderOffers'));
const SliderPopulars = lazy(() => import('./components/home/SliderPopulars'));
const Banner = lazy(() => import('./components/home/Banner'));
const Footer = lazy(() => import('./components/home/Footer'));


function Home(p) {

  // const pr = states()

  p._client.getSlider()
  p._client.getCategory()
  p._client.getOffers()
  p._client.getPopulars()



  return (
    <ContainerTab >

      <Scroll>
        <Div>
          <Slider data={p.slider} {...p} onClick={() => { p.navigation.navigate('ChildOffers') }} />
        </Div>

        <Span>
          <Category {...p} />
        </Span>

        <Span>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <SliderOffers {...p} />
          </Suspense>
        </Span>

        <Span mt={9} >
          <Suspense>
            <Banner {...p} />
          </Suspense>
        </Span>

        <Div>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <SliderPopulars {...p} />
          </Suspense>
        </Div>

        <Span>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <Footer {...p} />
          </Suspense>
        </Span>

      </Scroll>
      <Chat {...p} />
    </ContainerTab>
  )
}

export default Home

