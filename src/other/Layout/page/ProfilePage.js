import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'
import ProfileDrawer from '../../../views/user/components/ProfileDrawer'


const ProfilePage = (p) => {

  const [show, setshow] = useState(true)

  return (
    <>
      <SearchBar
      drawer={<ProfileDrawer {...p} />}
        title='پنل کاربری'
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} >
        {p.children}
      </SearchBar>
    </>

  )
}

export default ProfilePage