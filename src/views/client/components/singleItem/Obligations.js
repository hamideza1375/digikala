import React from 'react'
import { Card2, Img, P, Span } from '../../../../other/Components/Html'

const Obligations = (p) => {
  return (

    <Span minw={280} mt={p.mt} w='100%' fd='row' ai='center' jc='center' >
    <Span f={1} h={60} ai='center' jc='flex-start' >
      <Card2 w='100%' h={'auto'} border={[0]}
        coulumn1={
          <Span h={'100%'} w={'100%'} jc='center' ai='center' >
            <Img br={2} bgcolor='white' w={40} h={30} src={require('../../../../other/assets/images/payPostMethod.png')} size={30} />
          </Span>
        }
        coulumn2={
          <Span w='100%' h={30} >
            <P ta='center' mt={5} fs={9}>پرداخت در محل</P>
          </Span>
        }
      />
    </Span>

    <Span f={1} mh={6} h={60} ai='center' jc='flex-start' >
      <Card2 h={'auto'} border={[0]}
        coulumn1={
          <Span h={'100%'} w={'100%'} jc='center' ai='center' >
            <Img br={2} bgcolor='white' w={40} h={30} src={require('../../../../other/assets/images/guaranteeIcon.png')} size={30} />
          </Span>
        }
        coulumn2={
          <Span w='100%' h={30} >
            <P ta='center' mt={4} fs={9} >تمام محصولات گارانتی شده</P>
          </Span>
        }
      />
    </Span>

    <Span f={1} mh={6} h={60} ai='center' jc='flex-start' >
      <Card2 h={'auto'} border={[0]}
        coulumn1={
          <Span h={'100%'} w={'100%'} jc='center' ai='center' >
            <Img br={2} bgcolor='white' w={40} h={30} src={require('../../../../other/assets/images/originalPostMethod.png')} size={30} />
          </Span>
        }
        coulumn2={
          <Span w='100%' h={30} >

            <P ta='center' mt={4} fs={9} >ضمانت اصالت کالا</P>
          </Span>
        }
      />
    </Span>
    <Span f={1} mh={6} h={60} ai='center' jc='flex-start' >
      <Card2 h={'auto'} border={[0]}
        coulumn1={
          <Span h={'100%'} w={'100%'} jc='center' ai='center' >
            <Img br={2} bgcolor='white' w={40} h={30} src={require('../../../../other/assets/images/7dayPostMethod.png')} size={30} />
          </Span>
        }
        coulumn2={
          <Span w='100%' h={30} >
            <P ta='center' mt={4} fs={9} >هفت روز فرصت بازگشت کالا</P>
          </Span>
        }
      />
    </Span>
  </Span>
)
}

export default Obligations