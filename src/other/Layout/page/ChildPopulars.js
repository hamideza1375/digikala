import React, { memo, useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'


const ChildPopularPage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar drawer={<FilterList setshowDrawer={setshow} {...p} array={p.newSearchPopularsArray} setarray={setpopulars} />} showDrawer={show} setshowDrawer={setshow}
       product newSearchArray={p.newSearchPopularsArray} sort bgcolor='#ee4499fa' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.populars} setarray={p.setpopulars} >

        <BottomTab socketIoSeen={p.socketIoSeen} name={'ChildItems'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
          {p.children}
        </BottomTab>

      </SearchBar>
    </>
  )
}

export default memo(ChildPopularPage)