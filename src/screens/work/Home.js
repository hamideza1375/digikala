import React from 'react'
import { Platform } from 'react-native'
import { Span, Slider, Press, ScrollSlider, Icon, M_icon, Scroll, B_icon, Img, P, Card2, Div, A_icon } from '../../Components/Html'
import LinearGradient from '../../Components/other/LinearGradient'
import Chat from './components/Chat'
import Group from './components/Group'
import Offers from './components/Offers'
import Popular from './components/Popular'
import Banner from './components/Banner'
import s from './work.module.scss'
import Footer from './components/Footer'

function Home(p) {
  return (
    <Span f={1} >
      <Scroll >
        <Div>
          <Slider id='slider' data={p.slider} {...p} onClick={() => { alert(8) }} />
        </Div>

        <Span>
          <Group {...p} />
        </Span>

        <Span>
          <Offers {...p} />
        </Span>

        <Div>
          <Banner {...p} />
        </Div>

        <Div>
          <Popular {...p} />
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

