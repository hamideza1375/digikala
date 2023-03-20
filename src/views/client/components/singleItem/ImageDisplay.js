import React from 'react'
import { Card2, Img, Press, Span } from '../../../../other/Components/Html'
import { localhost } from '../../../../other/utils/axios/axios'

const ImageDisplay = (p) => {
  return (
    <Span minw={250} w='100%' ai='center' jc='center'>
    <Card2 h={400} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white', borderRadius: 8 }}

      c1={4} coulumn1={
        <Span f={1} >
          <Span f={1} >
            <Img id='img' f={1} style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }} src={`${localhost}/upload/childItem/${p.singleItem.imageUrl1}`} />
          </Span>
        </Span>
      }
      c2={1} coulumn2={
        <Span f={1} fd='row' jc='center' >
          <Press onClick={() => { p.$.id('img').$({ src: `${localhost}/upload/childItem/${p.singleItem.imageUrl1}` }) }} f={1}  >
            <Img f={1} m={4} br={4} src={`${localhost}/upload/childItem/${p.singleItem.imageUrl1}`} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: `${localhost}/upload/childItem/${p.singleItem.imageUrl2}` }) }} f={1}  >
            <Img f={1} m={4} br={4} src={`${localhost}/upload/childItem/${p.singleItem.imageUrl2}`} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: `${localhost}/upload/childItem/${p.singleItem.imageUrl3}` }) }} f={1}  >
            <Img f={1} m={4} br={4} src={`${localhost}/upload/childItem/${p.singleItem.imageUrl3}`} />
          </Press>
          <Press onClick={() => { p.$.id('img').$({ src: `${localhost}/upload/childItem/${p.singleItem.imageUrl4}` }) }} f={1}  >
            <Img f={1} m={4} br={4} src={`${localhost}/upload/childItem/${p.singleItem.imageUrl4}`} />
          </Press>

        </Span>
      }
    >
    </Card2>
  </Span>
)
}

export default ImageDisplay