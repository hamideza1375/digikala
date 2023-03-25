import React from 'react';
import _useEffect from '../../controllers/_initial';
import Map from './Map';
import { Column, Container, ContainerNavigation, Form, Icon, M_icon, Press, Py, Row } from '../../other/Components/Html';
import { getAddress } from '../../services/clientService';


function Location(p) {
  const confirmPayment = () => p._client.confirmPayment()

  _useEffect(() => {
    p.tokenValue.phone && p.setphone(p.tokenValue.phone)
  }, [])



  return (
    <Container>
      {
        p.route.params.map === true ?
          <Map {...p} />
          :
          <>
            <Press onClick={() => p.navigation.setParams({ map: true })} fd='row' bgcolor='#fff' p={10} pt={12} >
              <M_icon name={'gps-fixed'} size={19} color='#0cd' />
              <Py pr={5} >انتخاب از روی نقشه</Py>
              <Py fs={11} pr={5} mt={1} color='red' >(فقط مخصوص سفارشات در تهران)</Py>
            </Press>

            <Column f={1} >
              <Form city ph postal $plaque $unit $address flexDirection={'row'} onClick={confirmPayment} />
            </Column>
          </>
      }
    </Container>
  )
}
export default Location;
