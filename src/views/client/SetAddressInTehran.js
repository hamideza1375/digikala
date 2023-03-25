import React from 'react';
import _useEffect from '../../controllers/_initial';
import Map from './Map';
import { Column, Container, ContainerNavigation, Form, Icon, M_icon, Press, Py, Row } from '../../other/Components/Html';
import { getAddress } from '../../services/clientService';


function SetAddressInTehran(p) {
  const confirmPayment = () => p._client.confirmPayment()

  _useEffect(() => {
    p.tokenValue.phone && p.setphone(p.tokenValue.phone)
  }, [])

  _useEffect(() => {
    getAddress().then(({ data }) => {
      console.log(data);
      data && p.setaddress(data)
    })

    return () => p.setaddress('')

  }, [])



  return (
    <Container>
      <Form ph $plaque $unit $address flexDirection={'row'} onClick={confirmPayment} />
    </Container>
  )
}
export default SetAddressInTehran;
