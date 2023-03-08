import moment from 'moment-jalaali'
import React, { useEffect, useRef, useState } from 'react'
import spacePrice from '../../utils/spacePrice'
import { Dropdown, P, Span, } from '../Html'
var
  pushMond = [],
  pushMond2 = []

const DaysChartTotal = ({ color = '#0a7a', borderColor = '#0a7a', rodColor = '#0c8e', rodWidth = 'auto', bgcolor = '#0e9a', br = 4, w = '100%', h = '100%', data }) => {


  const pushArrayRef = useRef([])
  const pushArrayRef2 = useRef([])
  const pushArrayRef3 = useRef([])
  const pushArrayRef4 = useRef([])
  const pushArrayRef5 = useRef([])
  const pushArrayRef6 = useRef([])
  const pushArrayRef7 = useRef([])

  let pushArray = pushArrayRef.current
  let pushArray2 = pushArrayRef2.current
  let pushArray3 = pushArrayRef3.current
  let pushArray4 = pushArrayRef4.current
  let pushArray5 = pushArrayRef5.current
  let pushArray6 = pushArrayRef6.current
  let pushArray7 = pushArrayRef7.current

  const [totalNumbers, settotalNumbers] = useState(0.1)

  const [totalNumbers2, settotalNumbers2] = useState(0.1)

  const [totalNumbers3, settotalNumbers3] = useState(0.1)

  const [totalNumbers4, settotalNumbers4] = useState(0.1)

  const [totalNumbers5, settotalNumbers5] = useState(0.1)

  const [totalNumbers6, settotalNumbers6] = useState(0.1)

  const [totalNumbers7, settotalNumbers7] = useState(0.1)

  const [sorteX, setsorteX] = useState([1])
  const [change, setchange] = useState(false)


  useEffect(() => {
    pushArray = []
    pushArray2 = []
    pushArray3 = []
    pushArray4 = []
    pushArray5 = []
    pushArray6 = []
    pushArray7 = []
    pushMond = []
    pushMond2 = []

    if (data?.length)
      for (let i of data) {
        pushMond.push({ date: new Date(i.date), monds: moment(new Date(i.date)).format('jM'), days: moment(new Date(i.date)).format('jD'), array: [] })
      }



    if (pushMond.length)
      for (let i of pushMond) {
        const find = pushMond2.find(f => f.monds == i.monds && f.days == i.days)
        if (!find) {
          pushMond2.push(i);
        }
      }


    if (data?.length)
      for (let i of data) {
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 1]?.days && pushMond2[pushMond2.length - 1]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 2]?.days && pushMond2[pushMond2.length - 2]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray2.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 3]?.days && pushMond2[pushMond2.length - 3]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray3.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 4]?.days && pushMond2[pushMond2.length - 4]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray4.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 5]?.days && pushMond2[pushMond2.length - 5]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray5.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 6]?.days && pushMond2[pushMond2.length - 6]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray6.push(i._id)
        if (moment(new Date(i.date)).format('jD') == pushMond2[pushMond2.length - 7]?.days && pushMond2[pushMond2.length - 7]?.date.getMonth().toString() == new Date(i.date).getMonth().toString()) pushArray7.push(i._id)
      }


    pushArray.length && settotalNumbers(pushArray.length)
    pushArray2.length && settotalNumbers2(pushArray2.length)
    pushArray3.length && settotalNumbers3(pushArray3.length)
    pushArray4.length && settotalNumbers4(pushArray4.length)
    pushArray5.length && settotalNumbers5(pushArray5.length)
    pushArray6.length && settotalNumbers6(pushArray6.length)
    pushArray7.length && settotalNumbers7(pushArray7.length)

    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7].sort((a, b) => a - b)
    setsorteX(sortpushArray)

  }, [data, change])


  useEffect(() => {
    setTimeout(() => {
      setchange(true)
    }, 500);
  }, [])


  return (
    <>

      <Span w={w} h={h} bgcolor={bgcolor} br={br} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' z={100}>
          <Span ml={-5} f={1} h={5} ai='flex-end' jc='center'>
            <P style={{ position: 'absolute' }} w={70} fs={7.5} z={1111} color={color} >{(sorteX[sorteX.length - 7] / 1).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P style={{ position: 'absolute' }} w={70} fs={7.5} z={1111} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2) + (sorteX[sorteX.length - 7])) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P style={{ position: 'absolute' }} w={70} fs={7.5} z={1111} color={color} >{((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end'>
            <P style={{ position: 'absolute' }} w={70} fs={7.5} z={1111} color={color} >{((((sorteX[sorteX.length - 1] + sorteX[sorteX.length - 7]) / 2) + (sorteX[sorteX.length - 1])) / 2).toFixed()}</P>
          </Span>
          <Span ml={-5} f={1} h={5} ai='flex-end' >
            <P style={{ position: 'absolute' }} w={70} fs={7.5} z={1111} color={color} >{(sorteX[sorteX.length - 1] / 1).toFixed()}</P>
          </Span>
        </Span>


        <Span w={'90%'} h={'90%'} as='center' jc='center' ai='center' >
          {/* //! */}
          <Span w='100%' h='100%' border={[0, borderColor]} bbw={1} blw={1} fd='row' jc='center' ai='flex-end'>
            {change &&
              <>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers7) ? (totalNumbers7 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers7).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers6) ? (totalNumbers6 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers6).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers5) ? (totalNumbers5 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers5).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers4) ? (totalNumbers4 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers4).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers3) ? (totalNumbers3 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers3).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={parseInt(totalNumbers2) ? (totalNumbers2 / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers2).toFixed())}</P>} />
                </Span>
                </Span>
                <Span h='100%' f={1} maxw={rodWidth} ai='center' jc='flex-end'><Span w={'80%'} f={ parseInt(totalNumbers) ? (totalNumbers / sorteX[sorteX.length - 1]) : 0} maxh='100%' bgcolor={rodColor} >
                  <Dropdown value={<P fs={9} ta='center' >{spacePrice((totalNumbers).toFixed())}</P>} />
                </Span>
                </Span>
              </>}
          </Span>
          {/* //! */}
          <Span w='100%' h={10} fd='row' jc='center' >
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 7]?.monds}/{pushMond2[pushMond2.length - 7]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 6]?.monds}/{pushMond2[pushMond2.length - 6]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 5]?.monds}/{pushMond2[pushMond2.length - 5]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 4]?.monds}/{pushMond2[pushMond2.length - 4]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 3]?.monds}/{pushMond2[pushMond2.length - 3]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 2]?.monds}/{pushMond2[pushMond2.length - 2]?.days}</P>
            </Span>
            <Span f={1} h={10} ai='center' >
              <P fs={7.5} color={color} >{pushMond2[pushMond2.length - 1]?.monds}/{pushMond2[pushMond2.length - 1]?.days}</P>
            </Span>
          </Span>

        </Span>
      </Span>

    </>
  )
}

export default DaysChartTotal