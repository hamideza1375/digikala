import React from 'react'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import Drawer from '../../Components/tabNavigation/Drawer'

const ProfilePage = (p) => {

  return (
      <Drawer
        drawer={false}
        drawer2={<ProfileDrawer {...p} />}
        Header={({ show, setshow }) => (
          <SearchBar
            title='پنل کاربری'
            show={show} setshow={setshow} bgcolor='#fffe' Register={p.width > 470 ? true : false} icon={'filter'} src={p.logoUrl}
            iconPress={() => { setshow(!show) }} array={p.array} setarray={p.setarray} />)
        }
        name={'Home'} group={p.bottom} bgcolor='#ccc' color='#000' activeColor='#3bf' style={{ boxShadow: '1px 1px 8px #a80' }} >
        {p.children}
      </Drawer>
  )
}

export default ProfilePage