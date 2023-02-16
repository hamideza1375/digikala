import React from 'react';
import { Table } from '../../../../other/Components/Html';


const GroupItemsTableComponent = (p) => {
  return (
    <Table
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['ویرایش', ' نمایش محصولات', 'عنوان']}
      body={['ویرایش', 'نمایش', 'title']}
      btn1={'#0c4'}
      btn1onClick={() => { alert('p.currentGroupItemTable[p.sellerTable[1]].title') }}
      btn2={'#09f'}
      btn2onClick={() => { p.navigation.navigate('TableChildItems', { title: p.groupItemTable[0].title, id:p.groupItemTable[0]._id }) }}
      object={p.currentGroupItemTable}
      setobject={p.setGroupItemTable}
    />
  )
}

export default GroupItemsTableComponent