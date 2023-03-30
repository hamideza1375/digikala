import React, { useState } from 'react';
import { Table } from '../../../../other/Components/Html';


const GroupItemsTableComponent = (p) => {

  const [categoryTable, setcategoryTable] = useState([])
  const deleteCategory = (id) => p._admin.deleteCategory(id)

  return (
    <Table
      color={['#fff', '#eee', 'black']}
      border={[1, '#ccc']}
      header={['حذف', 'ویرایش', ' نمایش محصولات', 'عنوان']}
      body={['حذف', 'ویرایش', 'نمایش', 'title']}
      btn1={'#d00'}
      btn1onClick={() => { deleteCategory(categoryTable[0]._id) }}
      btn2={'orange'}
      btn2onClick={() => { p.navigation.navigate('EditCategory', { title: categoryTable[0].title, id: categoryTable[0]._id }) }}
      btn3={'#09f'}
      btn3onClick={() => { p.navigation.navigate('Sellers', { title: categoryTable[0].title, id: categoryTable[0]._id }) }}
      object={p.category}
      setobject={setcategoryTable}
    />
  )
}

export default GroupItemsTableComponent