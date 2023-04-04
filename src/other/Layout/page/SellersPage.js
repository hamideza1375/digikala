import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'

const SellerPage = (p) => {

  const [show, setshow] = useState(false)


  return (
    <>
      <SearchBar newSearchArray={p.newSearchSellerArray} brand show={show} setshow={setshow} bgcolor='#aaa' icon={p.navigation.canGoBack() ? 'arrow-left' : false}
        iconPress={() => { p.navigation.goBack() }} array={p.sellerTable} setarray={p.setsellerTable} />
      {p.children}
    </>
  )
}

export default SellerPage