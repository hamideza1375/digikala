import React from 'react'
import { Container2, Form } from '../../other/Components/Html';

const CreateChildItem = (p) => {
  const createChildItem = () => p._admin.createChildItem()
  return (
    <Container2>
      <Form flexDirection={'row'} fourImage offer t pr i in3 in4 in5 in6 in7 in8 in9 in10 onClick={createChildItem} />
    </Container2>
  )
}
export default CreateChildItem
// in3 = ram
// in4 = cpuCore
// in5 = camera
// in6 = storage
// in7 = waranty
// in8 = color
// in9 = display
// in10 = availableCount