import React, { useState } from 'react';
import { Table } from '../../../../other/Components/Html';

const ListUnAvailableTable = (p) => {

  const [listUnAvailabeTable,setlistUnAvailabeTable] = useState([])
  const listUnAvailable = p._admin.listUnAvailable()
  const changeAvailable =(id)=> p._admin.changeAvailable(id)

  return (
    <Table
      color={['#555', '#656565', 'white']}
      header={['موجودیت', 'عنوان']}
      body={['فعال', 'title']}
      btn1='#999'
      btn1onClick={() => changeAvailable(listUnAvailabeTable[0]._id)}
      btn1Opacity
      object={p.listUnAvailabe}
      setobject={setlistUnAvailabeTable}
      h={50}
    />)
}

export default ListUnAvailableTable