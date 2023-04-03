import React, { useEffect } from 'react'
import { Platform } from 'react-native'
import { Container, Container2, ContainerTab, Icon, M_icon, P, Scroll, SearchBar, Span } from '../../other/Components/Html'
import Chat from './components/home/Chat'
import FilterList from './components/childItem/FilterList'
import FlatlistChild from './components/childItem/FlatlistChildItem'

const ChildItems = (p) => {

  return (
    <ContainerTab>
      <Span fd='row-reverse' w='100%' f={1} mt={8} >
        <Span f={5} >
          <FlatlistChild {...p} />
        </Span>
        {/* <Chat {...p} /> */}
      </Span>
    </ContainerTab>
  )
}

export default ChildItems

// هرکس که نظر میده بتونه لایک کنه و اگه لایک کرده بود بزن این کاربر این کالارا پیشنهاد میکند و ستاره رو فقط افرادی که دانلود کردن بتونن بدن
