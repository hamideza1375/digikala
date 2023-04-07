import React from 'react';
import { Column, ContainerNavigation, Div, Form, P, Span } from '../../other/Components/Html'
import { ScrollView, Text, View } from 'react-native';

export default function DeleteAdmin(p) {
  const sendDeleteAdmin = () => p._admin.deleteAdmin()
  p._admin.getAllAdmin()


  return (
    <ContainerNavigation>
      <Form phore onClick={() => sendDeleteAdmin()} />
      {p.allAdmin.length ?
        <Column style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 15, width: 220, height: 80, backgroundColor: 'silver', borderRadius: 4 }} >
          {p.allAdmin.map((adm, i) => (
            <Column key={i} >
              <P style={{ marginVertical: 5 }}>name: {adm.fullname}</P>
              <Column style={{ flexDirection: 'row-reverse' }} ><P style={{ marginVertical: 5 }}>phoneOrEmail: </P><Text style={{ marginVertical: 5 }}  >{adm.phoneOrEmail}</Text></Column>
            </Column>
          ))}
        </Column>:
      <></>
        }
    </ContainerNavigation>
  )
}