import React from 'react'
import { FlatList, Span, Card2, Icon, P, A_icon } from '../../../Components/Html'

const FlatlistChild = (p) => {
  return (
    <FlatList
      colomn={1} colomn1={1} colomn2={2} colomn3={2}
      colomn4={3} colomn5={4} colomn6={5}
      data={p.childMobile}
      renderItem={({ item, index }) => (
        <Span /* mh='auto' */ mh={6} minw={155} fg={1} h={260} col2={{ marginHorizontal: 3 }}>
          <Span w={'100%'} fg={1} maxw={350} as='center'>
            <Card2 br={4} border={[0]} h={240} w={'100%'} bgcolor={'#fff'} sh={{ r: 7, o: .8, of: { width: 0, height: 2 } }} style={{ borderColor: 'red' }} src={item.image}
              coulumn1={<Span mt={8} w={'100%'}><P fs={11} ta='center' as='center' >{item.title}</P></Span>}
              coulumn2={<Span bgcolor='#eee' fd='row' h={35} jc='center' w={'100%'}>
                <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
                  <Icon name='microchip' size={16} style={{ transform: [{ scaleY: .6 }] }} />
                  <P fs={9} ta='center' >{item.cpuCore} هسته</P>
                </Span>
                <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1}>
                  <A_icon name='hdd' size={16} />
                  <P fs={9} ta='center' >{item.sdCard} گیگ </P>
                </Span>
                <Span ai='center' w={'25%'} h={35} brw={1} border={[0, 'silver']} pt={1} >
                  <P >Ram</P>
                  <P fs={9} ta='center' >{item.ram} گیگ</P>
                </Span>
                <Span ai='center' w={'25%'} h={35} pt={1} >
                  <A_icon name='camera' size={16} />
                  <P fs={9} ta='center' >{item.camera} پیکسل</P>
                </Span>
              </Span>
              }
              coulumn3={<Span mt={8} fd='row' jc='space-evenly' w={'100%'}><P>{p.spacePrice(item.price)} تومان</P></Span>}
              coulumn4={<Span fd='row' jc='space-around' w={'100%'}></Span>}
            />
          </Span>
        </Span>)}
    />
    )
}

export default FlatlistChild