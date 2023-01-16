import React from 'react'
import { Span, Slider, Scroll, Div } from '../../Components/Html'
import Chat from './components/home/Chat'
import Group from './components/home/Group'
import SliderOffers from './components/home/SliderOffers'
import SliderPopulars from './components/home/SliderPopulars'
import Banner from './components/home/Banner'
import Footer from './components/home/Footer'
import s from './style/client.module.scss'

function Home(p) {
  return (
    <Span f={1} >
      <Scroll >
        <Div>
          <Slider data={p.slider} {...p} onClick={() => { alert(8) }} />
        </Div>

        <Span>
          <Group {...p} />
        </Span>

        <Span>
          <SliderOffers {...p} />
        </Span>

        <Div>
          <Banner {...p} />
        </Div>

        <Div>
          <SliderPopulars {...p} />
        </Div>

        <Span>
          <Footer {...p}/>
        </Span>

      </Scroll>
      <Chat />
    </Span>
  )
}

export default Home

