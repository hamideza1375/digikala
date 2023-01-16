import React from 'react'
import { Button, Card2, P, Span } from '../../../../Components/Html'

const Description= (p) => {
  return (

    <Span minw={300} w={'100%'} ai='center' jc='center'>
    <Card2 h={400} w={'100%'} style={{ borderColor: 'silver', backgroundColor: 'white' }}
      coulumn1={
        <Span w={'100%'} f={1} >

          <Span fd='row' f={1} w={'100%'}>
            <Span bbw={2} w='20%' fg={1} mh={4} />
            <P mt={14}>ارسال سریع</P>
            <Span bbw={2} w='20%' fg={1} mh={4} />
          </Span>


          <Span f={2} pr={12} mt={20} >
            <P >تحویل حد اکثر یکساعت بعد از خرید</P>
          </Span >

        </Span>
      }
      c2={3} coulumn2={
        <Span w={'100%'} f={1}>


          <Span fg={1} fd='row' pr={12}>
            <P mb={-6}>گارانتی: </P>
            <P mb={-6}>گارانتی</P>
          </Span >

          <Span fg={1} fd='row' pr={12}>
            <P mb={-6}>موجود در انبار: </P>
            <P mb={-6}>موجود در انبار</P>
          </Span >

          <Span fg={1} fd='row' pr={12}>
            <P mb={-6}>انتخاب رنگ: </P>
            <P mb={-6}>انتخاب رنگ</P>
          </Span >

          <Span fg={1} mb={10} >
            <Button w='70%' bgcolor='#909' style={{ alignSelf: 'center', position: 'absolute', bottom: 5 }} >افزودن به سبد خرید</Button>
          </Span >


        </Span>}
    />
  </Span>
    )
}

export default Description