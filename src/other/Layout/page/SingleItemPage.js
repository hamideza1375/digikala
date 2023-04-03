import React from 'react'
import FilterList from '../../../views/client/components/childItem/FilterList'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import Drawer from '../../Components/tabNavigation/Drawer'

const SingleItemPage = (p) => {
  return (
    <BottomTab productBasket={p.productBasket} socketIoSeen={p.socketIoSeen} name={'SingleItem'} title={'پروفایل'} group={p.bottom} bgcolor='#ee4499fa' color='white' activeColor='#a05' style={{ overflow: 'hidden', boxShadow: '1px -2px 8px #1188', borderTopWidth: 1, borderColor: 'red' }} >
        {p.children}
    </BottomTab>
  )
}

export default SingleItemPage