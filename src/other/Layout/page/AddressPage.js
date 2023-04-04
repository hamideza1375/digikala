import React, { useState } from 'react'
import _useEffect from '../../../controllers/_initial'
import { SearchBar } from '../../Components/Html'

const AddressPage = (p) => {

  const [show, setshow] = useState(false)

  return (
    <>
      <SearchBar address newSearchArray={p.newSearchAddressArray} show={show} setshow={setshow} bgcolor='#aaa' icon={p.navigation.canGoBack() ? 'arrow-left' : false}
        iconPress={() => { p.navigation.goBack() }} array={p.allAddress} setarray={p.setallAddress} />
      {p.children}
    </>
  )
}

export default AddressPage