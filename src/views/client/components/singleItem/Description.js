import React, { useState } from 'react'
import { Badge, Button, Card2, Div, P, Pfa, Press, Py, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'

const Description = (p) => {
  const [color, setcolor] = useState()
  return (

    <Span minw={290} w={'100%'} ai='center' jc='center'>
      {p.singleItem?.price ? <Card2 h={400} w={'100%'} style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span w={'100%'} f={1} >

            <Span fd='row' f={1} w={'100%'} ai='center' >
              <Span bbw={2} w='20%' fg={1} mh={7} t={7} />
              <P mt={14}>ارسال سریع</P>
              <Span bbw={2} w='20%' fg={1} mh={7} t={7} />
            </Span>


            <Span f={2} ph={12} jc='space-between' fd='row' ai='center'>
              <P fs={12} >قیمت: </P>
              <Pfa color='#0be' fs={15} mt={-1}>{spacePrice(p.singleItem.price)} تومان </Pfa>
            </Span >

          </Span>
        }
        c2={3} coulumn2={
          <Span w={'100%'} f={1}>

            <Span fg={1} fd='row' pr={12} ai='center'>
              <P mb={-6}>گارانتی: </P>
              <P fs={11} mb={-6}>{p.singleItem.warranty} ماه شرکتی</P>
            </Span >

            <Span fg={1} fd='row' pr={12} ai='center' >
              <P mb={-6}>موجود در انبار: </P>
              <P fs={10} color={p.singleItem.availableCount > 10 ? '#0ce' : '#f44c'} mb={-6}>{p.singleItem.availableCount < 10 ? `تنها ${p.singleItem.availableCount} عدد در انبار موجود هست` : 'موجود هست'}</P>
            </Span >

            <Span fg={1} pr={12}>
              <Span t={20} >
                <P >انتخاب رنگ: </P>
              </Span>
              <Div fg={1} fd='row' pr={12} pb={0} ai='center'>

                {p.singleItem.color?.map((item, index) => (
                  <Span key={index} br={4} border={[1, '#ddd']} w={57} h={57} ai='center' mh={3} >
                    <Press onLayout={() => setcolor(p.singleItem.color[0])} onClick={() => { setcolor(item) }} ai='center' h={30} mt={6}>
                      <Badge bgcolor={color !== item ? '#fff' : item} border={[2, item]} w={30} h={30} /></Press>
                    <Span><P fs={10} >{item}</P></Span>
                  </Span>
                ))}

              </Div >

            </Span >

            <Span fg={1} mb={10} >
              <Button w='70%' bgcolor='#909' style={{ alignSelf: 'center', position: 'absolute', bottom: 5 }} >افزودن به سبد خرید</Button>
            </Span >

          </Span>}
      />
        :
        <></>
      }
    </Span>
  )
}

export default Description