import React, { useRef, useState } from 'react'
import { FlatList, Platform, Text, View } from 'react-native'
import { FlatListHorizontal, ScrollHorizontal } from '../Html'
// import s from './style.module.scss'
const array = [{ id: '1', title: 'node', price: '909', color: 'red' }, { id: '2', title: 'react', price: '787', color: 'green' }, { id: '2', title: 'react', price: '787', color: 'pink' }];

var
  width,
  das = []

function ScrollSlider(p) {
  const ref = useRef()
  const [scroll, setscroll] = useState(0)
  const [scroll2, setscroll2] = useState(true)

  const count = useRef({ count: 1 })
  const interval = useRef({ interval: null })

  const open = () => {
    if (scroll2) {
      { ref.current &&  ref.current.scrollToIndex({ index: count.current.count }); }
      count.current.count = count.current.count + 1
    }
  };

  if (count.current.count + 1 >= p.data.length) { clearInterval(interval.current.interval) }
  if (!scroll2) { clearInterval(interval.current.interval) }


  p.useEffect(() => {
    return () => (
      clearInterval(interval.current.interval)
    )
  }, [])


  return (
    <View
      // <View onMouseLeave={() => { if (Platform.OS === 'web') if (navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows') ref.current.setNativeProps({ style: { overflow: 'hidden' } }); }}
      onMouseUp={() => { setscroll2(false); setTimeout(() => { das = [] }, 10) }} 
      onMoveShouldSetResponder={() => { setscroll2(false);  }} 
      onTouchMove={() => { setscroll2(false);  }} >
      <View
        onMoveShouldSetResponder={(e) => {
          setscroll2(!scroll2)
          if (Platform.OS === 'web') {
            if (navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows') {
              ref.current.setNativeProps({ style: { overflowX: 'auto' } });
              das.push(e.nativeEvent.pageX)
              ref.current.scrollToOffset({ animated: true, offset: scroll + das[0] - das[das.length - 1] })
              //   if ((scroll < 10) && (scroll > 0)) {
              //   setscroll(scroll + das[0] - das[das.length - 1])
              // }
            }
          }
          setscroll2(false)

        }}
      >
        <FlatList
          showsHorizontalScrollIndicator={Platform.OS !== 'web' ? false : !navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows' ? true : false}
          // initialScrollIndex={0}
          // inverted
          dir='ltr'
          ref={ref}
          // keyExtractor={item => item._id}
          horizontal
          {...p}
          renderItem={p.renderItem}
          contentContainerStyle={[{ flexGrow: 1, direction: 'rtl' }, p.ccStyle]}
          onLayout={(e) => { let layoutWidth = e.nativeEvent.layout.width; width = p.width; let int = setInterval(sum, 4000); function sum() { if (scroll2) open() } interval.current.interval = int }}
          // onContentSizeChange={(e) => { setcontentSize(e); }}
          // scrollEventThrottle={0}
          // alwaysBounceHorizontal={false}
          // alwaysBounceVertical={false}
          // contentInset={{ left: 0 }}
          onScroll={(e) => { setscroll(e.nativeEvent.contentOffset.x) }}
          // dir='ltr'
          style={[{ height: p.h ? p.h : 150, width: '99%', borderRadius: 5, flexWrap: 'wrap' }, p.style]}
        // style={[(navigator.userAgent?.split('(')[1]?.slice(0, 7) === 'Windows') && { overflow: 'hidden' }, { height: p.h ? p.h : 150, width: '99%', borderRadius: 5, flexWrap: 'wrap' }, p.style]}
        />
      </View>
    </View>
  )
}

export default ScrollSlider

