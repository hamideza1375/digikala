import React from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const ChildItemPage = (p) => {

  return (
    <Drawer
      drawer2={<FilterList {...p}/>}
      Header={({ show, setshow }) => (
        <SearchBar show={show} setshow={setshow} bgcolor='#f9f' Register={p.width > 470 ? true : false} icon={'filter'} src={p.logoUrl}
          iconPress={() => { setshow(!show) }} array={p.array} setarray={p.setarray} />)
      }

      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      {p.children}
    </Drawer>
  )
}

export default ChildItemPage