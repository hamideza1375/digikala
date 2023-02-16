import React from 'react'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const HomePage = (p) => {
  return (
    <Drawer header={
      <SearchBar bgcolor='#f9f' Register={p.width > 395 ? true : false} icon={'filter'} src={p.width > 460 ? p.logoUrl : false} iconPress={() => { p.setshowFilterModal(true) }} array={p.array} setarray={p.setarray} />}
      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default HomePage