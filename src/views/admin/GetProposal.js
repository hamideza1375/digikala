import React from 'react'
import { Container, FlatList } from '../../other/Components/Html'
import GetProposalCard from './components/getProposal/GetProposalCard'
import GetProposalNavbar from './components/getProposal/GetProposalNavbar'

const mapId = new Map()

const GetProposal = (p) => {
  p._admin.getProposal()
  return (
    <Container >
      <GetProposalNavbar {...p} mapId={mapId} />
      <FlatList
        data={p.proposal}
        bgcolor='#fff'
        ccStyle={{ width: '100%', minWidth: '60%', alignSelf: 'center', paddingBottom: 15 }}
        renderItem={({ item, index }) => (
          <GetProposalCard {...p} item={item} mapId={mapId} />
        )}
      />
    </Container>
  )
}

export default GetProposal