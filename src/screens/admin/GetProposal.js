import React from 'react'
import { FlatList } from '../../other/Components/Html'
import GetProposalCard from './components/getProposal/GetProposalCard'
import GetProposalNavbar from './components/getProposal/GetProposalNavbar'

const GetProposal = (p) => {
  // p._admin.getProposal()
  const _delete = () => p._admin.deleteMultiProposal()
  return (
    <>

      <GetProposalNavbar {...p} />

      <FlatList
        data={p.proposal}
        bgcolor='#fff'
        webStyle={{ height: 'calc(100vh - 100px)' }}
        nativeStyle={{ height: '100%' }}
        ccStyle={{ width: '100%', minWidth: '60%', alignSelf: 'center', paddingBottom: 15 }}
        renderItem={({ item, index }) => (
            <GetProposalCard {...p} />
        )}
      />
    </>
  )
}

export default GetProposal