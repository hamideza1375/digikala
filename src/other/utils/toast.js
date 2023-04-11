import React, { useEffect, useRef } from "react";
import { Animated, Platform } from "react-native";
import { Span, P } from "../Components/Html";
let toastProperties;

export function Toast(p) {
  this.show = (title, description, time = 6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#555555f5',
      time
    }
    p.set_list(l=>[...l, toastProperties])
  };

  this.success = (title, description,time=6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#5cb85c',
      time
    }
    p.set_list(l=>[...l, toastProperties])
  };

  this.error = (title, description,time=6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#d9534f',
      time
    }
    p.set_list(l=>[...l, toastProperties])
  };

  this.info = (title, description, time=6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#5bc0de',
      time
    }
    p.set_list(l=>[...l, toastProperties])
  };

  this.warning = (title, description, time=6000) => {
    toastProperties = {
      id: Math.random(),
      id2: Math.random(),
      title,
      description,
      backgroundColor: '#f0ad4e',
      time
    }
    p.set_list((l)=>[...l, toastProperties])
  };
}

const shadow = {
  elevation: 5,
  shadowColor: 'black',
  shadowOpacity: .7,
  shadowRadius: 3,
  shadowOffset: {
    width: 2,
    height: 2,
  },
}
let interval

const ToastProvider = (p) => {
  if (!p._list.length ) clearInterval(interval)

  useEffect(() => {
    for (let i in p._list) {
      interval = setTimeout(() => {
        if (p._list[i]) {
          p.set_list(list => list.filter((l) => l?.id !== list[i]?.id))
        }
        if (!p._list.length ) clearInterval(interval)
      }, p._list[i].time);
    }
  }, [p._list])

  if (!p._list.length ) clearInterval(interval)


  const fadeAnim = useRef(new Animated.Value(-270)).current;
  const start = () => {
    Animated.timing(fadeAnim, {
      toValue: 12,
      duration: 100,
      useNativeDriver: false
    }).start();
  };

  return (
    <>
      {p._list && p._list.map((toast, i) => (
        <Animated.View key={i}
          ref={() => { if (i === 0) { fadeAnim.setValue(-270) } }}
          onLayout={() => { start(); }}
          style={[{ ...shadow }, {
            zIndex: 1111,
            position: Platform.OS === 'web'?'fixed':'absolute', top: i * 115, left: fadeAnim, width: 300, maxWidth:'90%', minHeight: 5, maxHeight: 115,paddingBottom:8,
            display: 'flex',
             backgroundColor: toast.backgroundColor, borderRadius: 5,
          },Platform.OS === 'ios' ?{marginTop:55}:{marginTop:15}]}>
          <Span style={{ paddingHorizontal: 14, paddingTop: 8 }} >
            <P style={{ padding: 6, color: 'white', position: 'absolute', top: 1, alignSelf: 'flex-end' }}
              onClick={() => { let filter = p._list.filter((l) => l.id !== toast.id); p.set_list(filter); }}>X</P>
            <P style={{ width: '90%', color: 'white', textAlign: Platform.OS !== 'web' ?'left':'right', paddingTop: 2 }} >{toast.title}</P>
            <P style={{ width: '98%', color: 'white', textAlign: Platform.OS !== 'web' ?'left':'right', fontSize: toast.description === '√'?25: 12, fontWeight: '200', paddingTop:toast.title?8: 14, paddingBottom: 8, paddingRight: toast.description === '√'?5: 1 }} >{toast.description}</P>
          </Span>
        </Animated.View>
      ))
      }

      {p.children}

    </>
  )
}
export default ToastProvider
