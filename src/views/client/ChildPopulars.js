import React from 'react'
import { Container2, Scroll, Span } from '../../other/Components/Html'
import FlatlistPopulars from './components/childItem/FlatlistPopulars'

const ChildPopulars = (p) => {

  return (
    <Container2>
      <Span fd='row-reverse' w='100%' f={1} mt={8} >
        <Span f={5} >
          <FlatlistPopulars {...p} />
        </Span>
      </Span>
    </Container2>

  )
}

export default ChildPopulars

