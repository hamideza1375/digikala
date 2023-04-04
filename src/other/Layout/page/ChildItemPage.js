import React, { memo, useEffect, useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import Drawer from '../../Components/tabNavigation/Drawer'





const ChildItemPage = (p) => {

  const [show, setshow] = useState(false)

  return (
    <>
      <SearchBar product newSearchArray={p.newSearchArray}
        sort show={show} setshow={setshow} bgcolor='#f9f' icon={'filter'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />
      <BottomTab socketIoSeen={p.socketIoSeen} name={'ChildItems'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
      </BottomTab>
    </>
  )
}

export default memo(ChildItemPage)