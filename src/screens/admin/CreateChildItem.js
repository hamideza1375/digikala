import React from 'react'
import {Form} from '../../Components/Html';

const CreateChildItem = (p) => {
  const sendCreateChildFood = () => p._admin.createChild()
  return <Form t pr i im {...p} onClick={sendCreateChildFood}/>
}
export default CreateChildItem