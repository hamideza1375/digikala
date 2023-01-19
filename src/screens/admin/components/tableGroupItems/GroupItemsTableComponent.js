import React from 'react';
import { Table } from '../../../../other/Components/Html';


const GroupItemsTableComponent = (p) => {
  return (
    <Table
      color={['#555', '#656565', 'white']}
      border={[1, '#353535']}
      header={['نمایش', 'ویرایش', 'حذف', 'عنوان']}
      body={['نمایش', 'ویرایش', 'حذف', 'title']}
      btn3={'#d33'}
      btn3onClick={() => { p.setshowModal(true); p.setid(p.foods[p.$food[1]]._id) }}
      btn2={'#2b3'}
      btn2onClick={() => { p.navigation.navigate("EditTitleAllFood", { id: p.foods[p.$food[1]]._id, title: p.foods[p.$food[1]].title, show: p.showModal }) }}
      btn1={'#07d'}
      btn1onClick={() => { p.navigation.navigate("AdminChildTable", { id: p.foods[p.$food[1]]._id, title: p.foods[p.$food[1]].title }) }}
      fontSize={16}
      object={p.foods}
      setobject={p.set$food}
      mt={10}
    />)
}

export default GroupItemsTableComponent