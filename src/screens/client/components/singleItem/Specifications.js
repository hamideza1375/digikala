import React from 'react'
import { Card2, P, Span } from '../../../../Components/Html'

const Specifications = (p) => {
  return (
    <Span minw={280} w='100%' ai='center' jc='center' >
      <Card2 h={320} w='100%' style={{ borderColor: 'silver', backgroundColor: 'white' }}
        coulumn1={
          <Span mt={10} >
            <Span mr={12} fd='row' >
              <P>نوع پردازنده cpu:</P>
              <P>نوع پردازنده cpu:</P>
            </Span>
          </Span>
        }
        coulumn2={
          <Span>
            <Span mr={12} fd='row' >
              <P>رم:</P>
              <P>رم:</P>
            </Span>
          </Span>
        }
        coulumn3={
          <Span>
            <Span mr={12} fd='row' >
              <P>حافظه ی داخلی:</P>
              <P>حافظه ی داخلی:</P>
            </Span>
          </Span>
        }
        coulumn4={
          <Span>
            <Span mr={12} fd='row' >
              <P>دوربین:</P>
              <P>دوربین:</P>
            </Span>
          </Span>
        }
        c5={.5} coulumn5={
          <Span f={.8} jc='center'>
            <Span ml={12} as='flex-end'>
              <P >نمایش مشخصات کامل کلیک کنید »</P>
            </Span>
          </Span>
        }
      >
      </Card2>


    </Span>
  )
}

export default Specifications





