import React from 'react'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const SellerPage = (p) => {
  return (
    <Drawer
      drawer={false}
      Header={({ show, setshow }) => (
        <SearchBar brand show={show} setshow={setshow} bgcolor='#aaa' icon={p.navigation.canGoBack() ? 'arrow-left' : false}
          iconPress={() => { p.navigation.goBack() }} array={p.sellerTable} setarray={p.setsellerTable} />)
      }
      bgcolor='#aaa' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default SellerPage