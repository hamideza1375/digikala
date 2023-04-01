import React, { useEffect } from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const HomePage = (p) => {


  return (
    <Drawer
      drawer2={<FilterList {...p} />}
      Header={({ show, setshow }) =>
        <SearchBar
          bgcolor='#f9f' login={(!p.tokenValue.userId) ? (p.width > 470 ? true : false) : (false)} profile={p.tokenValue.userId ? true : false} a_icon={'bars'} src={p.logoUrl}
          iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />}
      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default HomePage