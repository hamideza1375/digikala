import React from 'react';
import { Table } from '../../../../other/Components/Html';

const ChildItemTableComponent = () => {
  return (
    <Table
      color={['#555', '#656565', 'white']}
      border={[1, '#353535']}
      header={['موجودیت', 'ویرایش', 'حذف', ' قیمت', 'عنوان']}
      body={['title', 'ویرایش', ' حذف', 'price', 'title']}
      btn3={'#d33'}
      btn3onClick={() => { p.setshowModal(true); p.setid(p.route.params.id); p.setid2(p.current[p.$food[1]]._id) }}
      btn2={'#2b3'}
      btn2onClick={() => { p.navigation.navigate("EditChildFood", { id: p.route.params.id, id2: p.current[p.$food[1]]._id, title: p.current[p.$food[1]].title }) }}
      btn1={'#59f'}
      btn1onClick={() => { p.setshow(true); p.setid2(p.current[p.$food[1]]._id) }}
      btn1Opacity
      object={p.current}
      setobject={p.set$food}
    />)
}

export default ChildItemTableComponent