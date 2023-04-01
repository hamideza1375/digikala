import React from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const TableChildItemsPage = (p) => {
  return (
    <Drawer
    drawer={false}
      Header={({ show, setshow }) => (
        <SearchBar show={show} setshow={setshow} bgcolor='#aaa' icon={'arrow-left'} src={p.logoUrl}
          iconPress={() => { p.navigation.goBack(!show) }} array={p.childItem} setarray={p.setchildItem} />)
      }
      bgcolor='#aaa' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default TableChildItemsPage