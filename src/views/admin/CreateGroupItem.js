import React from 'react'
import {Form} from '../../other/Components/Html';

const CreateGroupItem = (p) => {
  const sendCreateTitleFood = () => p._admin.createTitleFood()
  return <Form t im {...p} onClick={() => { sendCreateTitleFood() }} />
}
export default CreateGroupItem