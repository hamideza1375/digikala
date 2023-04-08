import React from 'react'
import { Container, Container2, Scroll, Span } from '../../other/Components/Html'
import FlatlistOffers from './components/childItem/FlatlistOffers'

const ChildOffers = (p) => {


  return (
    <Container2>
      <Span fd='row-reverse' w='100%' f={1} mt={8} >
        <Span f={5} >
          <FlatlistOffers {...p} />
        </Span>
      </Span>
    </Container2>

  )
}

export default ChildOffers
