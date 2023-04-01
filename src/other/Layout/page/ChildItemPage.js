import React from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const ChildItemPage = (p) => {

  return (
    <Drawer
    drawer={false}
      drawer2={<FilterList {...p}/>}
      Header={({ show, setshow }) => (
        <SearchBar sort show={show} setshow={setshow} bgcolor='#f9f' icon={'filter'} src={p.logoUrl}
          iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />)
      }

      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default ChildItemPage