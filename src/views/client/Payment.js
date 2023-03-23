import React from 'react';
import {  ContainerNavigation, Form } from '../../other/Components/Html';

function Payment(p) {
    const confirmPayment =()=> p._client.confirmPayment()


  return (
    <ContainerNavigation >
      <Form city postal $plaque $unit $address flexDirection={'row'} onClick={confirmPayment} />
    </ContainerNavigation>
  )
}
export default Payment;
