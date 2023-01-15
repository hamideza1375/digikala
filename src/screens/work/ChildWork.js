import React, { useState } from 'react'
import { Platform, View } from 'react-native'
import { FlatList, A_icon, Badge, Br, Button, Card, Card2, Div, Icon, Img, M_icon, P, Press, Scroll, ScrollSlider, SearchBar, Span } from '../../Components/Html'
import Chat from './components/Chat'
import Obligations from './components/Obligations'
import Description from './components/Description'
import ImageDisplay from './components/ImageDisplay'
import Popular from './components/Popular'
import ShowComment from './components/ShowComment'
import Specifications from './components/Specifications'
import Footer from './components/Footer'
import List from './components/List'
import FlatlistChild from './components/FlatlistChild'

const ChildWork = (p) => {

  // p.useEffect(() => {
  //   p.navigation.setOptions({
  //     header: () =>
  //       <SearchBar Register={p.width > 395 ? true : false} icon={'filter'} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} {...p} bgcolor={'#e7ed'} logoPress={() => p.navigation.navigate('Home')} row={
  //         <Span fd='row' mt={19} >
  //           <P fs={10} mh={7} >موبایل تبلت</P>
  //           <P fs={10} mh={7} >هدفون هنزفیری</P>
  //           <P fs={10} mh={7} >لوازم جانبی</P>
  //         </Span>} src={require('../../assets/images/logo.png')} />
  //   });
  // }, [])
  return (
    <Span style={{ maxHeight: Platform.OS === 'web' ? 'calc(100vh - 64px)' : '100%' }}>
      <Span fd='row-reverse' w='100%' f={1} mt={8} >
        <Span f={5} >
          <FlatlistChild {...p} />
        </Span>

        <Span f={1} minw={150} >
          <Scroll>
            <List {...p} />
          </Scroll>
        </Span>
        <Chat {...p} />
      </Span>

    </Span>

  )
}

export default ChildWork


// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
