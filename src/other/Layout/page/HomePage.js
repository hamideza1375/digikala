import React, { useEffect } from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'
import BottomTab from '../../Components/tabNavigation/BottomTab'

const HomePage = (p) => {

  return (
    <Drawer
      Header={({ show, setshow }) =>
        <SearchBar
          bgcolor='#f9f' login={(!p.tokenValue.userId) ? (p.width > 470 ? true : false) : (false)} profile={p.tokenValue.userId ? true : false} src={p.logoUrl}
          iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />}
      name={'Home'} group={p.bottom} bgcolor='#f9f' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
      <BottomTab socketIoSeen={p.socketIoSeen} name={'Home'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
      </BottomTab>
    </Drawer>
  )
}

export default HomePage