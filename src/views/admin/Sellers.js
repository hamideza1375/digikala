import React from 'react'
import { Table } from '../../other/Components/Html'

const Sellers = (p) => {

  return (
    <>
      <Table
        color={['#fff', '#eee', 'black']}
        border={[1, '#ccc']}
        header={['حدف', 'غیر فعال', ' نمایش محصولات', 'فروشندگان']}
        body={['حدف','title', 'نمایش', 'title']}
        btn1={'#f55'}
        btn1onClick={() => { alert(p.sellerTable[0].title) }}
        btn2={'#999'}
        btn2onClick={() => { alert(p.currentSellerTable[p.sellerTable[1]].title) }}
        btn3={'#09f'}
        btn3onClick={() => { p.navigation.navigate('TableGroupItems',{title:p.sellerTable[0].title, id:p.sellerTable[0]._id}) }}
        // h={55}
        // fontSize={9}
        btn2Opacity
        object={p.currentSellerTable}
        setobject={p.setsellerTable}
      />
    </>
  )
}

export default Sellers