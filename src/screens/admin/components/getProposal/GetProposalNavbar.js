import React, { useState } from 'react'
import { Icon, M_icon, Span } from '../../../../Components/Html'

const GetProposalNavbar = (p) => {
  const [mapId] = useState(new Map())
  const [show, setshow] = useState(true)
  const _delete = () => p._admin.deleteMultiProposal()

  return (
    <Span fd='row-reverse' mv={4} >
      <Icon name='trash' size={22} style={{ marginHorizontal: 14 }} onClick={_delete} />
      <M_icon name='select-all' size={22} style={{ marginHorizontal: 14 }}
        onClick={() => {
          for (let item of p.proposal) {
            setshow(!show)
            mapId.set(item._id, show)
            p.$.id(item._id).$({ backgroundColor: show ? '#1d6' : '#ddd' })
            if (show) p.setproposalId(proposalId => proposalId.concat(item._id))
            else p.setproposalId(proposalId => proposalId.filter((ps) => ps !== item._id))
          }
        }} />
    </Span>)
}

export default GetProposalNavbar