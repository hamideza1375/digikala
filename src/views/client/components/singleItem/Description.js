import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Badge, Button, Card2, Column, Div, Icon, P, Pfa, Press, Py, Row, Span } from '../../../../other/Components/Html'
import spacePrice from '../../../../other/utils/spacePrice'

const Description = (p) => {
  const [color, setcolor] = useState()

  const addBuyBasket = (number) => p._client.addBuyBasket(number)


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


              {p.singleItem.offerTime.exp > new Date().getTime() ?
                <Row >
                  <Pfa color='#0be' fs={15} mt={-1}>{spacePrice(parseInt(p.singleItem.price - ((p.singleItem.price / 100) * p.singleItem.offerValue)))} تومان </Pfa>
                  <Pfa color='#e33' fs={12} mt={-1} style={{ textDecorationLine: 'line-through' }} >{spacePrice(p.singleItem.price)} ت </Pfa>
                </Row>
                :
                <Pfa color='#0be' fs={15} mt={-1}>{spacePrice(p.singleItem.price)} تومان </Pfa>}
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

            <Row fg={1} mb={10} jc='space-around' ai='center'>

              <Column w='70%' h={'100%'} jc='center' >
                <Button disable={p.addNumber[p.route.params.id]?.number} onClick={() =>


                  p.setaddNumber(addNumber => {
                    const obj = { ...addNumber }
                    obj[p.route.params.id] = { number: 1, price: p.singleItem.price }
                    addBuyBasket(obj)
                    return obj
                  })


                } w='100%' bgcolor='#909' style={{ alignSelf: 'center' }} >افزودن به سبد خرید</Button>
              </Column>

              {p.addNumber[p.route.params.id]?.number ? <Column h={'100%'} jc='center' >
                <Column style={{ height: 20, width: 20 }} >
                  <Icon name='plus' color='#0ad' size={20} onClick={() =>


                    p.setaddNumber(addNumber => {
                      const obj = { ...addNumber }
                      obj[p.route.params.id].number = obj[p.route.params.id].number + 1 
                      addBuyBasket(obj)
                      return obj
                    })


                  } />
                </Column>

                <Column style={{ height: 17, width: 20 }} >
                  <P mt={3} ta='center' >{p.addNumber[p.route.params.id]?.number}</P>
                </Column>

                <Column style={{ height: 20, width: 20 }} >
                  <Icon name='minus' color='#e11' size={20} onClick={() =>


                    p.addNumber[p.route.params.id]?.number &&
                    p.setaddNumber(addNumber => {
                      const obj = { ...addNumber }
                      obj[p.route.params.id].number = obj[p.route.params.id].number - 1
                      addBuyBasket(obj)
                      return obj
                    })


                  } />
                </Column>
              </Column>
                :
                <></>
              }

            </Row >

          </Span>}
      />
        :
        <></>
      }
    </Span>
  )
}

export default Description