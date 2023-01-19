import React from 'react'
import { Card2, P, Press, Row, Span } from '../../../../other/Components/Html'
import Modal from '../../../Modal'

const Specifications = (p) => {
  return (
    <Span minw={280} w='100%' ai='center' jc='center' >
      <Card2 h={320} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span mt={5} fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>نوع پردازنده cpu: </P>
              <P fs={10.5} color='#333'>{p.specifications.cpu}</P>
            </Span>
          </Span>
        }
        coulumn2={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>رم: </P>
              <P fs={10.5} color='#333'>{p.specifications.ram}</P>
            </Span>
          </Span>
        }
        coulumn3={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>حافظه ی داخلی: </P>
              <P fs={10.5} color='#333'>{p.specifications.memory}</P>
            </Span>
          </Span>
        }
        coulumn4={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>دوربین: </P>
              <P fs={10.5} color='#333' >{p.specifications.camera}</P>
            </Span>
          </Span>
        }
        coulumn5={
          <Span fg={1} jc='center'>
            <Span mr={12} fd='row' ai='center'>
              <P>صفحه نمایش: </P>
              <P fs={10.5} color='#333' >{p.specifications.display}</P>
            </Span>
          </Span>
        }

        c6={.5} coulumn6={
          <Span f={.8} jc='center'>
            <Press onClick={() => { p.setshowModal(true) }} ml={12} as='flex-end'>
              <P fs={10.5} color='#333'>نمایش مشخصات کامل کلیک کنید »</P>
            </Press>
          </Span>
        }
      >
      </Card2>

      <Modal {...p} style={{ width: '100%', height: '100%', paddingTop: 33 }} >

        <Span w='100%'>
          {p.allSpecifications.map((item,index) => (
            <Row key={index} ai='center' mv={5} >
              <P>{item.key}: </P>
              <P fs={10.5} color='#333' >{item.value}</P>
            </Row>
          ))
          }
        </Span>

      </Modal>
    </Span>
  )
}

export default Specifications





