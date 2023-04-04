import React, { useEffect, useState } from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import _useEffect from '../../../controllers/_initial'

const HomePage = (p) => {

  const [show, setshow] = useState(false)



  return (
    <>
        <SearchBar home newSearchArray={p.newSearchHomeArray}
          bgcolor='#f9f' login={(!p.tokenValue.userId) ? (p.width > 470 ? true : false) : (false)} profile={p.tokenValue.userId ? true : false} src={p.logoUrl}
          iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />
      <BottomTab socketIoSeen={p.socketIoSeen} name={'Home'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
      </BottomTab>
    </>
  )
}

export default HomePage