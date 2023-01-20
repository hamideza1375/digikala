import React from 'react';
import { ScrollView } from 'react-native';
import ListAvailableModal from './components/listUnAvailable/ListAvailableModal';
import ListUnAvailableTable from './components/listUnAvailable/ListUnAvailableTable';

export default function ListUnAvailable(p) {
  //  p._admin.listAvailable()
  return (
    <ScrollView style={{ width: '98%', alignSelf: 'center', marginTop: 15 }} >

      {p.list && <ListUnAvailableTable {...p} />}

      <ListAvailableModal {...p} />

    </ScrollView>
  )
}