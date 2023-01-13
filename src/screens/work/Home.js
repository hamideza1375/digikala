import React from 'react'
import { Span, Slider, Press, ScrollSlider, Icon, M_icon, Scroll, B_icon, Img, P, Card2, Div, A_icon } from '../../Components/Html'
import Chat from './components/Chat'
import Offers from './components/Offers'
import Popular from './components/Popular'
import s from './work.module.scss'

function Home(p) {
  return (
    <Span f={1} >
      <Scroll id='containScroll' >

        <Div>
          <Slider id='slider' data={p.slider} {...p} onClick={() => { alert(8) }} />
        </Div>

        <Div>
          <Offers {...p} />
        </Div>


        <Div>
          <Popular {...p} />
        </Div>



      </Scroll>
      <Chat />
    </Span>

  )
}

export default Home

