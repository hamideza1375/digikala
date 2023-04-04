import React, { useState } from 'react'
import { SearchBar } from '../../Components/Html'
import Drawer from '../../Components/tabNavigation/Drawer'

const TableChildItemsPage = (p) => {
  const [show, setshow] = useState(false)

  return (
    <>
      <SearchBar product newSearchArray={p.newSearchArray}
        sort show={show} setshow={setshow} bgcolor='#f9f' icon={'filter'} src={p.logoUrl}
        iconPress={() => { setshow(!show) }} array={p.childItem} setarray={p.setchildItem} />
        {p.children}
    </>
  )
}

export default TableChildItemsPage