import React from 'react'
import {Form} from '../../other/Components/Html';
import  Title from '../../other/utils/setTitle';

const EditCategory = (p) => {
  Title()
  p._admin.getSinleCategory()
  const editCategory = (id) => p._admin.editCategory(id)

  return <Form t im edit {...p} onClick={() => { editCategory(); }}/>
}
export default EditCategory
