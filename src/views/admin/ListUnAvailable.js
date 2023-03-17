import React from 'react';
import { Container2 } from '../../other/Components/Html';
import ListUnAvailableTable from './components/listUnAvailable/ListUnAvailableTable';

export default function ListUnAvailable(p) {
  //  p._admin.listAvailable()
  return (
    <Container2 style={{ width: '98%', alignSelf: 'center', marginTop: 15 }} >

      {p.list && <ListUnAvailableTable {...p} />}

    </Container2>
  )
}