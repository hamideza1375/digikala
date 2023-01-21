import moment from 'moment-jalaali'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLine, VictoryBoxPlot, VictoryArea, VictoryScatter, VictoryAxis, VictoryPolarAxis, Background, VictoryHistogram } from 'victory'
import { Container, Container2, P, Scroll, Span, } from '../../other/Components/Html'
var 
  pushDay = [],
  pushDay2 = []

const Chart = (p) => {

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

  const [totalNumbers, settotalNumbers] = useState([])

  const [totalNumbers2, settotalNumbers2] = useState([])

  const [totalNumbers3, settotalNumbers3] = useState([])

  const [totalNumbers4, settotalNumbers4] = useState([])

  const [totalNumbers5, settotalNumbers5] = useState([])

  const [totalNumbers6, settotalNumbers6] = useState([])

  const [totalNumbers7, settotalNumbers7] = useState([])

  const [sorteX, setsorteX] = useState([])


  const userPayment = [

    { _id: '1', day: new Date('2023-010-13 22:3:0'), name: 'reza', pricePayment: 1000000 },
    { _id: '2', day: new Date('2023-010-13 22:3:0'), name: 'ali', pricePayment: 1000000 },
    { _id: '3', day: new Date('2023-010-13 22:3:0'), name: 'sadegh', pricePayment: 1000000 },
    { _id: '4', day: new Date('2023-010-13 22:3:0'), name: 'mohamad', pricePayment: 2000000 }, //! 120.000.0 / 4 = 100.000

    { _id: '6', day: new Date('2023-010-14 22:3:0'), name: 'mojtaba', pricePayment: 5000000 },
    { _id: '7', day: new Date('2023-010-14 22:3:0'), name: 'hamed', pricePayment: 5000000 },
    { _id: '8', day: new Date('2023-010-14 22:3:0'), name: 'hamid', pricePayment: 5000000 },
    { _id: '9', day: new Date('2023-010-14 22:3:0'), name: 'farhad', pricePayment: 5000000 },//! 200.000.0 / 4 = 500.000

    { _id: '10', day: new Date('2023-010-15 22:3:0'), name: 'mojtaba', pricePayment: 6000000 },
    { _id: '11', day: new Date('2023-010-15 22:3:0'), name: 'hamed', pricePayment: 2000000 },
    { _id: '12', day: new Date('2023-010-15 22:3:0'), name: 'hamid', pricePayment: 6000000 },
    { _id: '13', day: new Date('2023-010-15 22:3:0'), name: 'farhad', pricePayment: 2000000 }, //! 160.000.0 / 4 = 400.000

    { _id: '14', day: new Date('2023-010-16 22:3:0'), name: 'mojtaba', pricePayment: 5000000 },
    { _id: '15', day: new Date('2023-010-16 22:3:0'), name: 'hamed', pricePayment: 1000000 },
    { _id: '16', day: new Date('2023-010-16 22:3:0'), name: 'hamid', pricePayment: 5000000 },
    { _id: '17', day: new Date('2023-010-16 22:3:0'), name: 'farhad', pricePayment: 1000000 }, //! 120.000.0 / 4 = 300.000

    { _id: '18', day: new Date('2023-010-17 22:3:0'), name: 'mojtaba', pricePayment: 1000000 },
    { _id: '19', day: new Date('2023-010-17 22:3:0'), name: 'hamed', pricePayment: 1000000 },
    { _id: '20', day: new Date('2023-010-17 22:3:0'), name: 'hamid', pricePayment: 1000000 },
    { _id: '21', day: new Date('2023-010-17 22:3:0'), name: 'farhad', pricePayment: 1000000 }, //! 120.000.0 / 4 = 100.000

    { _id: '22', day: new Date('2023-010-18 22:3:0'), name: 'mojtaba', pricePayment: 2000000 },
    { _id: '23', day: new Date('2023-010-18 22:3:0'), name: 'hamed', pricePayment: 2000000 },
    { _id: '24', day: new Date('2023-010-18 22:3:0'), name: 'hamid', pricePayment: 2000000 },
    { _id: '25', day: new Date('2023-010-18 22:3:0'), name: 'farhad', pricePayment: 2000000 }, //! 400.000 / 4 = 200.000

    { _id: '26', day: new Date('2023-07-19 22:3:0'), name: 'mojtaba', pricePayment: 7200000 },
    { _id: '27', day: new Date('2023-07-19 22:3:0'), name: 'hamed', pricePayment: 7200000 },
    { _id: '28', day: new Date('2023-07-19 22:3:0'), name: 'hamid', pricePayment: 7200000 },
    { _id: '29', day: new Date('2023-07-19 22:3:0'), name: 'farhad', pricePayment: 7200000 }, //! 360.000.0 / 4 = 720.000
  ]

  useEffect(() => {
    pushArray = []
    pushArray2 = []
    pushArray3 = []
    pushDay = []

    if (userPayment.length)
     for (let i of userPayment) {
      pushDay.push(moment(i.day).format('jD'))

    }

    if (pushDay.length)
    for (let i of pushDay) {
      for (let n of pushDay) {
        if (i != n) {
          const find = pushDay2.find(f => f == n)
          if (!find) {
            pushDay2.push(n);
          }
        }
      }
    }

    if (userPayment.length)
    for (let i of userPayment) {
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 1]) pushArray.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 2]) pushArray2.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 3]) pushArray3.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 4]) pushArray4.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 5]) pushArray5.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 6]) pushArray6.push(i.pricePayment)
      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 7]) pushArray7.push(i.pricePayment)
    }


    pushArray.length && settotalNumbers(pushArray.reduce((total, number) => total + number) / pushArray.length)
    pushArray2.length && settotalNumbers2(pushArray2.reduce((total, number) => total + number) / pushArray2.length)
    pushArray3.length && settotalNumbers3(pushArray3.reduce((total, number) => total + number) / pushArray3.length)
    pushArray4.length && settotalNumbers4(pushArray4.reduce((total, number) => total + number) / pushArray4.length)
    pushArray5.length && settotalNumbers5(pushArray5.reduce((total, number) => total + number) / pushArray5.length)
    pushArray6.length && settotalNumbers6(pushArray6.reduce((total, number) => total + number) / pushArray6.length)
    pushArray7.length && settotalNumbers7(pushArray7.reduce((total, number) => total + number) / pushArray7.length)

    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7].sort()
    setsorteX(sortpushArray)

  }, [totalNumbers])


  return (
    <Container2 >

      <Span w={300} h={220} as='center' bgcolor={'#00f2'} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' >
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{sorteX[sorteX.length - 7]}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[sorteX.length - 7] + sorteX[sorteX.length - 1]) / 2.5).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[sorteX.length - 7] + sorteX[sorteX.length - 1]) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[sorteX.length - 7] + sorteX[sorteX.length - 1]) / 1.5).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{sorteX[sorteX.length - 1]}</P>
          </Span>
        </Span>


        <Span w={'90%'} h={'90%'} as='center' jc='center' ai='center' >
          {/* //! */}
          <Span w='100%' h='100%' bbw={1} blw={1} fd='row-reverse' jc='center' ai='flex-end'>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers7 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers6 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers5 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers4 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers3 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers2 / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
            <Span h='100%' f={1} ai='center' jc='flex-end'><Span w={'80%'} f={(totalNumbers / sorteX[sorteX.length - 1]) } maxh='100%' bgcolor='orange' /></Span>
          </Span>
          {/* //! */}
          <Span w='90%' h={5} fd='row-reverse' jc='center'>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 7]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 6]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 5]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 4]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 3]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 2]}</P>
            </Span>
            <Span f={1} h={5} ai='center'>
              <P fs={8} >{pushDay2.sort()[pushDay2.length - 1]}</P>
            </Span>
          </Span>

        </Span>
      </Span>

    </Container2>
  )
}

export default Chart