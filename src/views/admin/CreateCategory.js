import React from 'react'
import { ContainerNavigation, Form } from '../../other/Components/Html';

const CreateCategory = (p) => {

  return (
    <ContainerNavigation>
      <Form t im onClick={() => { p._admin.createCategory() }} />
    </ContainerNavigation>
  )
}
export default CreateCategory