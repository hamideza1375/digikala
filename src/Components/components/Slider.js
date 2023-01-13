import React, { useRef, useState } from 'react'
import { ScrollView } from 'react-native';
import { Img, ScrollHorizontal, Span, M_icon, Press } from '../Html'

var count = 1,
  width,
  plus=true,
  minus

function Slider(p) {


  const ref = useRef()

  const [interval, setinterval] = useState(true)

  const open = () => {
    { ref.current && ref.current.scrollTo({ x: p.width * count, y: 0, animated: true }); }
    if (count === 0) { plus = true; minus = false }
    if (count === 7) { minus = true; plus = false }
    if (minus) { count = count - 1 }
    if (plus) { count += 1 }
  };

  const right = () => {
    if (count !== 0) count = count - 1
    ref.current && ref.current.scrollTo({ x: p.width * count, y: 0, animated: true });
  };

  const left = () => {
    if (count !== 7) count += 1
    ref.current && ref.current.scrollTo({ x: p.width * count, y: 0, animated: true });
  };


  if (p.width !== width) {
    ref.current && ref.current.scrollTo({ x: 0, y: 0, animated: true });
    count = 1
    interval && clearInterval(interval)
  }

  p.useEffect(() => {
    return () => (
      clearInterval(interval)
    )
  }, [])


  return (

    <Span style={p.style} >
      <ScrollView dir='ltr' horizontal ref={ref} onLayout={() => {
        width = p.width
        let int = setInterval(sum, 6000);
        function sum() {
          open()
        }
        setinterval(int)
      }} style={{ height: 260, width: p.width - 2, alignSelf: 'center', borderRadius: 5, overflow: 'hidden', flexWrap: 'wrap' }} >
       {p.data.map(({image},index)=>(
         <Press key={index} onClick={p.onClick} w={p.width} ><Img w='100%' h={300} src={image} /></Press>
         ))
      }  
      </ScrollView>
      <M_icon onClick={right} size={30} name="arrow-back-ios" style={{ paddingVertical:5,position: 'absolute', zIndex: 10, left: 10, top: 130, color: '#222' }} />
      <M_icon onClick={left} size={30} name="arrow-forward-ios" style={{ paddingVertical:5,position: 'absolute', zIndex: 10, right: 10, top: 130, color: '#222' }} />
    </Span>
  )
}

export default Slider

