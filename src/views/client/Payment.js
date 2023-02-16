import React from 'react';
import { Container } from '../../other/Components/Html';
import Frame from '../../other/Components/other/Frame';

function Payment(p) {
  // p._user.getLastPayment()

  return (
    <Container >
      <Frame source={{ uri: p.route.params.url }} />
    </Container>
  )
}
export default Payment;
