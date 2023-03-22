import React from 'react'
import {Container2, Form} from '../../other/Components/Html';

const EditChildItem = (p) => {
  p._admin.getSingleItem()
  const editChildItem = () => p._admin.editChildItem()

  return (
    <Container2>
      <Form flexDirection={'row'} fourImage t pr i in3 in4 in5 in6 in7 in8 in9 in10 onClick={editChildItem} />
    </Container2>
  )
}
export default EditChildItem
