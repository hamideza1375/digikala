import React, { useState } from 'react';
import _useEffect from '../../controllers/_initial';
import { Column, Table } from '../../other/Components/Html';

const SellerPanel = (p) => {
  const [setsellerItemsTable, setsetsellerItemsTable] = useState([])

  p._user.getAllProductForSeller()


  return (
    <Column f={1}>
      <Table
        color={['#fff', '#eee', 'black']}
        border={[1, '#ccc']}
        header={['واریز شده', 'فروش شده', 'تخفیف', 'موجودیت', 'عنوان']}
        body={['quits', 'sold', 'off', 'موجودیت', 'title']}
        btn3={'#e63'}
        btn3onClick={() => { }}
        btn4={'#0d5'}
        btn4onClick={() => { }}
        btn4Opacity
        titleClick={() => { p.navigation.navigate('SingleItem', { id: setsellerItemsTable[0]._id }) }}
        object={p.sellerItems}
        setobject={setsetsellerItemsTable}
      />
    </Column>
  )
}

export default SellerPanel