import React from 'react';
import { ContainerNavigation, Form } from '../../other/Components/Html'

export default function AddAdmin(p) {
  const setAdmin = () => p._admin.setAdmin()
  return (
    <ContainerNavigation>
      <Form phore webStyle={{ height: 'calc(100vh - 68px)' }} {...p} onClick={() => setAdmin()} />
    </ContainerNavigation>
  )
}