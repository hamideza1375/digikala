import React from 'react';
import { Table } from '../../../../other/Components/Html';

const ChildItemTableComponent = (p) => {
  
  return (
    <Table
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['حذف','موجودیت', 'ویرایش', 'عنوان']}
      body={['حذف','title', 'ویرایش', 'title']}
      btn1={'#e33'}
      btn1onClick={() => { alert('p.currentGroupItemTable[p.sellerTable[1]].title') }}
      btn2={'#9f9f9f'}
      btn2onClick={() => { alert('p.currentGroupItemTable[p.sellerTable[1]].title') }}
      btn3={'#0c4'}
      btn3onClick={() => { alert('p.currentGroupItemTable[p.sellerTable[1]].title') }}
      btn2Opacity
      titleClick={() => { p.navigation.navigate('SingleItems') }}
      object={p.currentChildItemsTable}
      setobject={p.setChildItemsTable}
    />)
}

export default ChildItemTableComponent