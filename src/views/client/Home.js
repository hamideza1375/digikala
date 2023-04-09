import React, { lazy, Suspense, useEffect } from 'react'
import { Span, Slider, Scroll, Div, ContainerTab, Loading, Column } from '../../other/Components/Html'
import Chat from './components/home/Chat'
import Category from './components/home/Category';
import _useEffect from '../../controllers/_initial';
import { allProduct } from '../../services/clientService';
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
  p._client.backHandler()


useEffect(() => {allProduct().then(({data})=>{p.setallProduct(data.value);p.setnewSearchHomeArray(data.value)})}, [])




  return (
    <Column h='100%' >

      <Scroll>
        <Column>
          <Slider data={p.slider} {...p} onClick={() => { p.navigation.navigate('ChildOffers') }} />
        </Column>

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
      {/* <Chat {...p} /> */}
    </Column>
  )
}

export default Home

