import React from 'react';
import { Table } from '../../../../other/Components/Html';

const ListUnAvailableTable = (p) => {
  return (
    <Table
      color={['#555', '#656565', 'white']}
      header={['نمایش', 'عنوان']}
      body={['موجود شد', 'title']}
      btn1onClick={() => { p.setid2(p.list[p.$food[1]]._id); p.setshowModalAvailabe(true); p.setid(p.list[p.$food[1]].refId); p._setid(p.list[p.$food[1]]._id) }}
      object={p.list}
      setobject={p.set$food}
      h={50}
    />)
}

export default ListUnAvailableTable