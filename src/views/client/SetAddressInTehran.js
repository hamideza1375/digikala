import React from 'react';
import _useEffect from '../../controllers/_initial';
import Map from './Map';
import { Column, Container, ContainerNavigation, Form, Icon, M_icon, Press, Py, Row } from '../../other/Components/Html';
import { getAddress } from '../../services/clientService';


function SetAddressInTehran(p) {
  const confirmPayment = () => p._client.confirmPayment()

  _useEffect(() => {
    if (p.tokenValue.fullname) p.setfullname(p.tokenValue.fullname)



  }, [])

  _useEffect(() => {
    getAddress().then(({ data }) => {
      if (data.phone) { p.setphone(data.phone) }
      else if (p.tokenValue.phone) { p.setphone(p.tokenValue.phone) }
      else if (p.tokenValue.phoneOrEmail) {
        if (Number(p.tokenValue.phoneOrEmail) && (!p.tokenValue.phoneOrEmail.includes('@')))
          p.setphone(p.tokenValue.phoneOrEmail)
      }
      data.address && p.setaddress(data.address)
      data.latlng && p.setlatlng(data.latlng)
    })
    p.setCity('تهران')
    return () => {p.setaddress(''); p.setCity('') }
  }, [])



  return (
    <Container>
      <Form f ph $plaque $unit $address flexDirection='row' onClick={confirmPayment} />
    </Container>
  )
}
export default SetAddressInTehran;
