import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import PanelAdminDrawer from '../../../views/user/components/PanelAdminDrawer'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const PanelAdminPage = (p) => {

  const [show, setshow] = useState(false)


  return (
    <>
      <SearchBar
        title='پنل ادمین'
        show={show} setshow={setshow} bgcolor='#fffe' icon={'filter'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} />
      {p.children}
    </>
  )
}

export default PanelAdminPage