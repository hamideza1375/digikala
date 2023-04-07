import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import PanelAdminDrawer from '../../../views/user/components/PanelAdminDrawer'
import { SearchBar } from '../../Components/Html'

const PanelAdminPage = (p) => {

  const [show, setshow] = useState(true)


  return (
    <>
      <SearchBar drawer={<PanelAdminDrawer {...p} />}
        title='پنل ادمین'
        showDrawer={show} setshowDrawer={setshow} bgcolor='#fffe' icon={'bars'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} >
        {p.children}
      </SearchBar>
    </>
  )
}

export default PanelAdminPage