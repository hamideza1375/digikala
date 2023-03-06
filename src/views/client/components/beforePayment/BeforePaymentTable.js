import React from 'react'
import { P, Span, Table } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'

const BeforePaymentTable = (p) => {
  return (
    <Span f={1} border={[1]} >
      <Table
        color={['#f5f5f5', '#fff', 'black']}
        border={[1, '#eee']}
        header={['قیمت', 'عنوان']}
        body={['price', 'title']}
        object={p.currentTable}
        setobject={p.set$food}
      >
        <Span h={35} ai='center' jc='center' ><P ta='center' color='#0ae' >هزینه ی پیک {spacePrice(p.sendPrice)} تومان</P></Span>
      </Table>
    </Span>)
}

export default BeforePaymentTable