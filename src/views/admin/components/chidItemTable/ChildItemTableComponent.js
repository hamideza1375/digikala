import React, { useEffect, useState } from 'react';
import { Table } from '../../../../other/Components/Html';
import seconder from '../../../../other/utils/seconder';

const ChildItemTableComponent = (p) => {
  const [childItemsTable, setchildItemsTable] = useState([])

  const deleteChildItem = (id) => p._admin.deleteChildItem(id)
  const changeAvailable = (id) => p._admin.changeAvailable(id)

  const [current, setcurrent] = useState([])
  const [pageLimit] = useState(15)


  return (
    <Table
      pageLimit={pageLimit} current={current} setcurrent={setcurrent}
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['تخفیف', 'حذف', 'موجودیت', 'ویرایش', 'قیمت', 'عنوان']}
      body={['off', '❌', 'موجودیت', '📝', 'price', 'title']}
      btn1={'#e63'}
      btn1onClick={() => { p.navigation.navigate('SetOffer', { id: childItemsTable[0]._id }) }}
      btn2={'#e33'}
      btn2onClick={() => { deleteChildItem(childItemsTable[0]._id) }}
      btn3={'#0c4'}
      btn3onClick={() => { changeAvailable(childItemsTable[0]._id) }}
      btn4={'#09d'}
      btn4onClick={() => { p.navigation.navigate('EditChildItem', { id: childItemsTable[0]._id }) }}
      btn3Opacity
      titleClick={() => { p.navigation.navigate('SingleItem', { id: childItemsTable[0]._id }) }}
      object={p.childItem}
      setobject={setchildItemsTable}
    />)
}

export default ChildItemTableComponent