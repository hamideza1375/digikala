import React from 'react'
import { Column, ContainerNavigation, Form } from '../../other/Components/Html'

const SendPostPrice = (p) => {

  p._admin.getPostPrice() 

  return (
    <ContainerNavigation>
      <Column fg={1} >
        <Form pr {...p} onClick={() => { p._admin.sendPostPrice() }} />
      </Column>
    </ContainerNavigation>
  )
}

export default SendPostPrice