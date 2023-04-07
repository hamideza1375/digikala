import React from 'react';
import { Container2, ContainerNavigation, ContainerTab, Form } from '../../other/Components/Html'

export default function ChangeAdmin(p) {
  const sendChangeAdmin = () => p._admin.changeMainAdmin()
  return (
    <ContainerNavigation>
      <Form ph in1 {...p} onClick={() => sendChangeAdmin()} />
    </ContainerNavigation>
  )
}