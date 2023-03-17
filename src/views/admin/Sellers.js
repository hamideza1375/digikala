import React, { useState } from 'react'
import { Button, Column, Container2, Table } from '../../other/Components/Html'

const Sellers = (p) => {

  const [sellerTable, setsellerTable] = useState([])
  p._admin.getAllSellers()
  const deleteSeller = (id) => p._admin.deleteSeller(id)
  const setSellerAvailable = (id) => p._admin.setSellerAvailable(id)

  return (
    <Container2>
      <Button onClick={() => p.navigation.navigate('AddSeller')} >اضاف کردن فروشنده</Button>
      <Column f='1' >
        <Table
          color={['#fff', '#eee', 'black']}
          border={[1, '#ccc']}
          header={['حدف', 'غیر فعال', ' نمایش محصولات', 'تلفن', 'نام تجاری']}
          body={['حدف', 'فعال', 'نمایش', 'phone', 'brand']}
          btn1={'#f55'}
          btn1onClick={() => { deleteSeller(sellerTable[0]._id) }}
          btn2={'#1e1'}
          btn2onClick={() => { setSellerAvailable(sellerTable[0]._id) }}
          btn3={'#09f'}
          btn3onClick={() => { p.navigation.navigate('TableCategory', { title: sellerTable[0].title, id: sellerTable[0]._id }) }}
          btn2Opacity
          object={p.currentSellerTable}
          setobject={setsellerTable}
        />
      </Column>
    </Container2>
  )
}

export default Sellers