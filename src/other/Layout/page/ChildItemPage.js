import React, { memo } from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import Drawer from '../../Components/tabNavigation/Drawer'



const Search =(p) => (
  <SearchBar
   sort show={p.show} setshow={p.setshow} bgcolor='#f9f' icon={'filter'} src={p.logoUrl}
    iconPress={() => { p.setshow(!p.show) }} array={p.childItem} setarray={p.setchildItem} />)


const ChildItemPage = (p) => {

  return (
    <Drawer
      drawer={false}
      drawer2={<FilterList {...p} />}
      Header={({ show, setshow })=> <Search {...p} show={show} setshow={setshow} />}

      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      <BottomTab socketIoSeen={p.socketIoSeen} name={'ChildItems'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
      </BottomTab>
    </Drawer>
  )
}

export default memo(ChildItemPage)