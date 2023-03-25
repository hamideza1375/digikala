import React from 'react'
import { Container2 } from '../../other/Components/Html'
import Frame from '../../other/Components/other/Frame'

const FramePayment = (p) => {

//  p.navigation.setOptions({ header: () => <Button outline onClick={() => p.navigation.navigate('Home')} >click</Button> })
  
  return (
    <Container2>
      <Frame source={{ uri: p.route.params.url }} />
    </Container2>
  )
}

export default FramePayment