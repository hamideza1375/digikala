import React from 'react'
import {Container2, Form} from '../../other/Components/Html';

const SetOffer = (p) => {
  p._admin.getSingleItem()
  const setOffer = () => p._admin.setOffer()

  return (
    <Container2>
      <Form flexDirection={'row'} offer onClick={setOffer} />
    </Container2>
  )
}
export default SetOffer
