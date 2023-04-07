import React from 'react';
import { ContainerNavigation, Form } from '../../other/Components/Html';

export default function SendProposal(p) {
  return (
    <ContainerNavigation>
      <Form mAutoFocus m c {...p} onClick={() => p._user.sendProposal()} />
    </ContainerNavigation>
  )
};

