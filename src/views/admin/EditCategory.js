import React from 'react'
import { ContainerNavigation, Form } from '../../other/Components/Html';
import Title from '../../other/utils/setTitle';

const EditCategory = (p) => {
  Title()
  p._admin.getSinleCategory()
  const editCategory = (id) => p._admin.editCategory(id)

  return (
    <ContainerNavigation>
      <Form t im edit onClick={() => { editCategory(); }} />
    </ContainerNavigation>
  )
}
export default EditCategory
