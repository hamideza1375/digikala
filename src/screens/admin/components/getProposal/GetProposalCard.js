import React from 'react'
import { Div, P, Span } from '../../../../Components/Html'

const GetProposalCard = (p) => {
  return (
    <Div p={9} bgcolor='#ddd' border={[1, 'silver']} br={2} mt={15} as='center' w={300} >
    <P w={14} h={14} mt={-7} mb={3} nativeStyle={{marginHorizontal:10}} border={[1, '#aaa']} id={item._id} onClick={() => {
      mapId.set(item._id, !mapId.get(item._id))
      p.$.id(item._id).$({ backgroundColor: mapId.get(item._id) ? '#1d6' : '#ddd' })
      if (mapId.get(item._id)) p.setproposalId(proposalId => proposalId.concat(item._id))
      else p.setproposalId(proposalId => proposalId.filter((ps) => ps !== item._id))
    }} />
    <Span p={12} nativeStyle={{marginHorizontal:10}} mb={7} bgcolor='#fff' ><P fs={12} fm='IRANSansWeb-light' >{item.message}</P></Span>
  </Div>  )
}

export default GetProposalCard