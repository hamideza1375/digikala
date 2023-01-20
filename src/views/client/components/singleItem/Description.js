import React from 'react'
import { Badge, Button, Card2, Div, P, Press, Span } from '../../../../other/Components/Html'

const Description = (p) => {
  const [color, setcolor] = p.useState()
  return (

    <Span minw={290} w={'100%'} ai='center' jc='center'>
      <Card2 h={400} w={'100%'} style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span w={'100%'} f={1} >

            <Span fd='row' f={1} w={'100%'} ai='center' >
              <Span bbw={2} w='20%' fg={1} mh={7} t={7}/>
              <P mt={14}>ارسال سریع</P>
              <Span bbw={2} w='20%' fg={1} mh={7} t={7}/>
            </Span>


            <Span f={2} ph={12} jc='space-between' fd='row' ai='center'>
              <P >تحویل حد اکثر یکساعت بعد از خرید</P>
              <P color='#0ad' fs={14}>{p.spacePrice(p.singlePrice)} تومان </P>
            </Span >

          </Span>
        }
        c2={3} coulumn2={
          <Span w={'100%'} f={1}>

            <Span fg={1} fd='row' pr={12} ai='center'>
              <P mb={-6}>گارانتی: </P>
              <P fs={11} mb={-6}>{p.guarantee}</P>
            </Span >

            <Span fg={1} fd='row' pr={12} ai='center' >
              <P mb={-6}>موجود در انبار: </P>
              <P fs={11} color={p.evailableNumber > 10 ? '#0ce' : '#f22'} mb={-6}>{p.evailableNumber < 10 ? `تنها ${p.evailableNumber} در انبار موجود هست` : 'موجود هست'}</P>
            </Span >

            <Span fg={1} pr={12}>
              <Span t={20} >
                <P >انتخاب رنگ: </P>
              </Span>
              <Div fg={1} fd='row' pr={12} pb={0} ai='center'>

                {p.colorItem.map((item,index) => (
                  <Span key={index} br={4} border={[1, '#ddd']} w={57} h={57} ai='center' mh={3} >
                    <Press onLayout={()=>setcolor(p.colorItem[0].color)} onClick={() => { setcolor(item.color) }} ai='center' h={30} mt={6}>
                      <Badge bgcolor={color !== item.color ? '#fff' : item.color} border={[2, item.color]} w={30} h={30} /></Press>
                    <Span><P fs={10} >{item.colorFa}</P></Span>
                  </Span>
                ))}

              </Div >

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