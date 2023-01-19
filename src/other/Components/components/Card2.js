import React from 'react'
import { Img, Span } from '../Html'

const card2 = (p) => {

  const {br=4,style,border=[],coulumn1,coulumn2,coulumn3,coulumn4,coulumn5,coulumn6,h,c1,c2,c3,c4,c5,c6,bgcolor} =p

  return (
    <Span style={style} h={h?h:300} w={'90%'} as={'center'} br={br} border={border.length?border:[1]} {...p} >

     {p.src && <Span h={'45%'} >
        <Img f={1} style={{borderTopRightRadius:br, borderTopLeftRadius:br}}  src={p.src} />
      </Span>}

      <Span h={p.src?'55%':'100%'} bgcolor={bgcolor} br={br}>
        {coulumn1 && <Span f={c1?c1:1}>{coulumn1}</Span>}
        {coulumn2 && <Span f={c2?c2:1}>{coulumn2}</Span>}
        {coulumn3 && <Span f={c3?c3:1}>{coulumn3}</Span>}
        {coulumn4 && <Span f={c4?c4:1}>{coulumn4}</Span>}
        {coulumn5 && <Span f={c5?c5:1}>{coulumn5}</Span>}
        {coulumn6 && <Span f={c6?c6:1}>{coulumn6}</Span>}

      </Span>

    </Span>
  )
}

export default card2