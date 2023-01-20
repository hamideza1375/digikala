import React, { lazy, Suspense } from 'react'
import { Span, Slider, Scroll, Div, Container, Container2, ContainerTab, P, Loading } from '../../other/Components/Html'
import s from './style/client.module.scss'
import Chat from './components/home/Chat'
const Group = lazy(() => import('./components/home/Group'));
const SliderOffers = lazy(() => import('./components/home/SliderOffers'));
const SliderPopulars = lazy(() => import('./components/home/SliderPopulars'));
const Banner = lazy(() => import('./components/home/Banner'));
const Footer = lazy(() => import('./components/home/Footer'));


function Home(p) {
  return (
    <ContainerTab >
      <Scroll>
        <Div>
          <Slider data={p.slider} {...p} onClick={() => { alert(8) }} />
        </Div>

        <Span>
          <Group {...p} />
        </Span>

        <Span>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <SliderOffers {...p} />
          </Suspense>
        </Span>

        <Div>
          <Suspense>
            <Banner {...p} />
          </Suspense>
        </Div>

        <Div>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <SliderPopulars {...p} />
          </Suspense>
        </Div>

        <Div>
          <Suspense fallback={<Span w='100%' ai='center' ><Loading /></Span>}>
            <Footer {...p} />
          </Suspense>
        </Div>

      </Scroll>
      <Chat />
    </ContainerTab>
  )
}

export default Home

