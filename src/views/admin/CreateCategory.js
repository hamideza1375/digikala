import React from 'react'
import {Form} from '../../other/Components/Html';

const CreateCategory = (p) => {

  return <Form t im onClick={() => { p._admin.createCategory() }} />
}
export default CreateCategory