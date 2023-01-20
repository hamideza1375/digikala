import React from 'react'
import share from '../../../../other/utils/share'
import { Icon, Img, P, Span } from '../../../../other/Components/Html'

const Footer = () => {
  return (
    <Span fd='row' p={10} bgcolor='#0d1e2d' fw='wrap'>
{/* <div style={{flexWrap:'nowrap'}}></div> */}
      <Span fg={7} w='70%' minw={180} >
        <Span >
          <Span border={[0, 'white']} bbw={1} mr={9} pb={5} w={'50%'} as='flex-start' >
            <P color='white' >مجوز های ما</P>
          </Span>
          <Span w={70} h={70} mr={7} mt={12} border={[1, 'white']} >
            <Img f={1} src={require('../../../../other/assets/images/etemadElectronic.png')} />
          </Span>
        </Span>
        <Span border={[0, 'white']} mt={10} btw={1} w={'60%'} pb={4} pt={8} mr={9} >
          <P color='#09f' >درباره ی ما</P>
        </Span>
      </Span>

      <Span fg={3} minw={150} fd='row' jc='flex-end' w='30%' >
        <Span p={10} ai='center'>
          <Icon name='instagram' color='#a22' size={30} />
        </Span>
        <Span p={10} ai='center'>
          <Icon name='telegram' color='#55a' size={30} />
        </Span>
        <Span p={10} ai='center'>
        <Icon color='#bbb' name='share-alt' size={30} onClick={async () => { share('http://localhost:3000', 'فسفود کاکتوس') }} />
        </Span>
      </Span>

    </Span>
  )
}

export default Footer