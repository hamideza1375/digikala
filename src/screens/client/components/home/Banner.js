import React from 'react'
import { Img, Span } from '../../../../Components/Html'

const Banner = () => {
  return (
    <Span>
      <Span fd='row'  >
        <Span f={1} h={150} mh={4} br={5} sh={{o:1,r:6,c:'#aa9a'}} >
          <Img br={5}  style={{
              //  objectFit:'fill',
              flex: 1,
              // aspectRatio: 1.5, 
              resizeMode: 'stretch',
            }} source={require('../../../../assets/images/banner1.png')} />
        </Span>
        <Span f={1} h={150} mh={4} br={5} sh={{o:1,r:6,c:'#b77a'}} >
          <Img style={{resizeMode: 'stretch'}} br={5} f={1} src={require('../../../../assets/images/banner2.png')} />
        </Span>
      </Span>
      {/* <img style={{objectFit}} /> */}
    </Span>
  )
}

export default Banner

// fill | contain | cover | none | scale-down