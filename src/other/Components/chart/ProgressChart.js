import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, P, Press, PressView, Span, } from '../Html'


const ProgressChart = (p) => {

  const { color = '#222', rodWidth = 30, bgcolor = '#fff', br = 2, w = '100%', h = '100%', data } = p

  const _checkSend = useRef([])
  const _queueSend = useRef([])
  const _send = useRef([])

  let checkSend = _checkSend.current
  let queueSend = _queueSend.current
  let send = _send.current


  p.useEffect(() => {

    if (data?.length)
      for (let i of data) {
        if (i.checkSend === 1) { checkSend.push(i.checkSend) }
        if (i.queueSend === 1) { queueSend.push(i.queueSend) }
        if (i.send === 1) { send.push(i.send) }
      }

    console.log('checkSend', checkSend);
    console.log('queueSend', queueSend);
    console.log('send', send);

  }, [])


  return (
    <>
      <PressView webStyle={{cursor:''}} onClick={()=>{p.setshowProgressChartDropdown(show=>!show)}} w={w} h={h} ai={'center'} bgcolor={bgcolor} jc='space-between' pt={20} pb={40} br={br}>
        <Span fd='row' jc='center'>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#0b3' />
            <P mr={2} fs={8} color={color}>ارسال شده</P>
          </Span>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#ee0' />
            <P mr={2} fs={8} color={color}>در صف ارسال</P>
          </Span>
          <Span mh={5} fd='row' ai='center' jc='center' >
            <Span w={15} h={4} bgcolor='#f33' />
            <P mr={2} fs={8} color={color}>در صف برسی</P>
          </Span>
        </Span>
        <Span w={'90%'} h={rodWidth} as={'center'} fd='row' border={[1, 'silver']}>

          <Span h={'100%'} f={send.length} bgcolor='#0b3'>
            <Dropdown top color='transparent' showBgcolor="transparent"
              show={p.showProgressChartDropdown} setshow={p.setshowProgressChartDropdown}
            ><P ta='center' >{send.length}</P></Dropdown>
          </Span>
          <Span h={'100%'} f={queueSend.length} bgcolor='#ee0'>
            <Dropdown top color='transparent' showBgcolor="transparent"
              show={p.showProgressChartDropdown} setshow={p.setshowProgressChartDropdown}
            ><P ta='center' >{queueSend.length}</P></Dropdown>
          </Span>
          <Span h={'100%'} f={checkSend.length} bgcolor='#f33'>
            <Dropdown top color='transparent' showBgcolor="transparent"
              show={p.showProgressChartDropdown} setshow={p.setshowProgressChartDropdown}
            ><P ta='center' >{checkSend.length}</P></Dropdown>
          </Span>
        </Span>
      </PressView>
    </>
  )
}

export default ProgressChart