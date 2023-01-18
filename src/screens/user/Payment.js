import React from 'react';
import { Container } from '../../Components/Html';
import Frame from '../../Components/other/Frame';

function Payment(p) {
  // p._user.getLastPayment()

  return (
    <Container >
      <Frame source={{ uri: p.route.params.url }} />
    </Container>
  )
}
export default Payment;
