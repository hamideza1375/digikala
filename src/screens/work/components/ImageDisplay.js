import React from 'react'
import { Card2, Img, Press, Span } from '../../../Components/Html'

const ImageDisplay = (p) => {
  return (
    <Span minw={250} w='100%' ai='center' jc='center'>
    <Card2 h={400} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white', borderRadius: 8 }}

      c1={4} coulumn1={
        <Span f={1} >
          <Span f={1} >
            <Img id='img' f={1} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} src={require('../../../assets/images/a1.jpg')} />
          </Span>
        </Span>
      }
      c2={1} coulumn2={
        <Span f={1} fd='row' jc='center' >
          <Press onClick={() => { p.$.id('img').$({ src: require('../../../assets/images/a1.jpg') }) }} f={1}  >
            <Img f={1} m={4} br={4} src={require('../../../assets/images/a1.jpg')} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: require('../../../assets/images/a2.jpg') }) }} f={1}  >
            <Img f={1} m={4} br={4} src={require('../../../assets/images/a2.jpg')} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: require('../../../assets/images/a3.jpg') }) }} f={1}  >
            <Img f={1} m={4} br={4} src={require('../../../assets/images/a3.jpg')} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: require('../../../assets/images/a7.jpg') }) }} f={1}  >
            <Img f={1} m={4} br={4} src={require('../../../assets/images/a7.jpg')} />
          </Press>

        </Span>
      }
    >
    </Card2>
  </Span>
)
}

export default ImageDisplay