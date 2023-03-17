import React, {useState} from 'react';
import { Table } from '../../../../other/Components/Html';

const ChildItemTableComponent = (p) => {
  const [childItemsTable, setchildItemsTable] = useState([])
  
  const deleteChildItem =(id)=> p._admin.deleteChildItem(id)
  const changeAvailable =(id)=> p._admin.changeAvailable(id)

  return (
    <Table
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['حذف','موجودیت', 'ویرایش', 'قیمت', 'عنوان']}
      body={['حذف','title', 'ویرایش', 'price', 'title']}
      btn1={'#e33'}
      btn1onClick={() => { deleteChildItem(childItemsTable[0]._id) }}
      btn2={'#0c4'}
      btn2onClick={() => { changeAvailable(childItemsTable[0]._id) }}
      btn3={'orange'}
      btn3onClick={() => { p.navigation.navigate('EditChildItem',{id:childItemsTable[0]._id}) }}
      btn2Opacity
      titleClick={() => { p.navigation.navigate('SingleItems') }}
      object={p.childItem}
      setobject={setchildItemsTable}
    />)
}

export default ChildItemTableComponent