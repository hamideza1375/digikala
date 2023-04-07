import React, { useState } from 'react';
import _useEffect from '../../controllers/_initial';
import { ContainerNavigation, Table } from '../../other/Components/Html';
import { getAllProductForSeller } from '../../services/userService';

const SellerPanel = (p) => {
  const [childItemsTable, setchildItemsTable] = useState([])

  _useEffect(() => {
    getAllProductForSeller().then(({ data }) => {
      p.setchildItem(data.value)
      p.setnewSearchArray(data.value)
      console.log(data.value);
    })
  }, [])



  return (
    <ContainerNavigation>
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
        titleClick={() => { p.navigation.navigate('SingleItem', { id: childItemsTable[0]._id }) }}
        object={p.childItem}
        setobject={setchildItemsTable}
      />
    </ContainerNavigation>
  )
}

export default SellerPanel