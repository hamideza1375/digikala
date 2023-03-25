import React from 'react';
import _useEffect from '../../controllers/_initial';
import { ContainerNavigation, Form } from '../../other/Components/Html';

function Payment(p) {
  const confirmPayment = () => p._client.confirmPayment()

  _useEffect(() => {
    p.tokenValue.phone && p.setphone(p.tokenValue.phone)
  }, [])



  return (
    <ContainerNavigation >
      <Form city ph postal $plaque $unit $address flexDirection={'row'} onClick={confirmPayment} />
    </ContainerNavigation>
  )
}
export default Payment;
