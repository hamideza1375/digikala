import React from 'react';
import {Form} from '../../other/Components/Html';

export default function SendProposal (p) {
  return <Form mAutoFocus m c {...p} onClick={() => p._user.sendProposal()} />
};

