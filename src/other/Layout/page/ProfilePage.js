import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'
import { SearchBar } from '../../Components/Html'
import BottomTab from '../../Components/tabNavigation/BottomTab'
import Drawer from '../../Components/tabNavigation/Drawer'

const ProfilePage = (p) => {


  const [show, setshow] = useState(false)



  return (
    <>
      <SearchBar
        title='پنل کاربری'
        show={show} setshow={setshow} bgcolor='#fffe' icon={'filter'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} />
      {p.children}
    </>

  )
}

export default ProfilePage