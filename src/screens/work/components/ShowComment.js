import React from 'react'
import { A_icon, Badge, Card, Icon, P, Scroll, Span } from '../../../Components/Html'

const ShowComment = (p) => {
  return (
    <Span bgcolor='#fff' >
    <Span fd='row' mt={15} mr={12} >
      <P fs={14} mt={3} > نظر ها | </P>
      <Icon name='star' color='orange' size={27} />
      <P fs={14} mt={3} > 4 امتیاز </P>
      <Span btw={1} fg={1} w={'30%'} mh={15} mt={12} />
      <Span />
    </Span>

    <Scroll style={{ maxHeight: 500 }} >

      <Span flex={1} minw={280} maxw={'98%'} as='center' br={3} mv={8} sh={{o:1,r:8,c:'#ddda'}} >
        <Card bgcolor='#fff' color='black' dr='rtl' border={[1,'#eeee']} headerRow={
          <Span fd='row-reverse' w='100%' >
            <Span ><P>2/5/33</P></Span>
            <Span><P> | </P></Span>
            <Span><P> 4 ستاره </P></Span>
            <Span mt={-4} >
              <Icon name='star' color='orange' size={27} />
            </Span>
            <Span ml='auto' >
              <P>محمد جعفر ساتر</P>
            </Span>

          </Span>
        } body={<P>salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam salm salam sakam</P>} footerRow={
          <Span fd='row-reverse' >
            <Span bgcolor='silver' p={7} pv={4} pl={2} w={45} mh={2} br={5} jc='center' ai='center' fd='row' >
              <Badge bgcolor='gray' text={0} top={7} right={0} scale={.5} />
              <A_icon name='dislike2' size={21} style={{marginLeft:-3}}/></Span>
            <Span bgcolor='silver' p={7} pv={4} pl={2} w={45} mh={2} br={5} jc='center' ai='center' fd='row' >
              <Badge bgcolor='gray' text={1} top={8} right={0} scale={.5} />
              <A_icon name='like2' size={21} style={{marginLeft:-5}} /></Span>
            <Span bgcolor='silver' p={7} pv={4} mh={2} br={5} jc='center' ai='center' ><P fs={11} >پاسخ »</P></Span>
          </Span>
        } />
      </Span>

    </Scroll>

  </Span>  )
}

export default ShowComment