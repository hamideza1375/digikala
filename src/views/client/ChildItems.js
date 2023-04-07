import React from 'react'
import { Container, Container2, ContainerTab, Icon, M_icon, P, Scroll, SearchBar, Span } from '../../other/Components/Html'
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