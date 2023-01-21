import moment from 'moment-jalaali'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { VictoryChart, VictoryTheme, VictoryBar, VictoryLine, VictoryBoxPlot, VictoryArea, VictoryScatter, VictoryAxis, VictoryPolarAxis, Background, VictoryHistogram } from 'victory'
import { Container, Container2, P, Scroll, Span, } from '../../other/Components/Html'
var pushArray33 = [],
  pushArray2 = [],
  pushArray3 = [],
  pushArray4 = [],
  pushArray5 = [],
  pushArray6 = [],
  pushArray7 = [],
  pushDay = [],
  pushDay2 = []

const Chart = (p) => {


  const pushArra = useRef([])

  let pushArray = pushArra.current

  const [totalNumbers, settotalNumbers] = useState([])

  const [totalNumbers2, settotalNumbers2] = useState([])

  const [totalNumbers3, settotalNumbers3] = useState([])

  const [totalNumbers4, settotalNumbers4] = useState([])

  const [totalNumbers5, settotalNumbers5] = useState([])

  const [totalNumbers6, settotalNumbers6] = useState([])

  const [totalNumbers7, settotalNumbers7] = useState([])

  const [data, setdata] = useState([])

  const [sorteX, setsorteX] = useState([])

  const [startX, setstartX] = useState(0)

  const [endX, setendX] = useState(0)





  const userPayment = [
    { _id: '1', day: new Date('2023-03-13 22:3:0'), name: 'reza', pricePayment: 1000000 },
    { _id: '2', day: new Date('2023-03-13 22:3:0'), name: 'ali', pricePayment: 1000000 },
    { _id: '3', day: new Date('2023-03-13 22:3:0'), name: 'sadegh', pricePayment: 1000000 },
    { _id: '4', day: new Date('2023-03-13 22:3:0'), name: 'mohamad', pricePayment: 2000000 }, //! 120.000.0 / 4 = 100.000

    { _id: '6', day: new Date('2023-03-14 22:3:0'), name: 'mojtaba', pricePayment: 5000000 },
    { _id: '7', day: new Date('2023-03-14 22:3:0'), name: 'hamed', pricePayment: 5000000 },
    { _id: '8', day: new Date('2023-03-14 22:3:0'), name: 'hamid', pricePayment: 5000000 },
    { _id: '9', day: new Date('2023-03-14 22:3:0'), name: 'farhad', pricePayment: 5000000 },//! 200.000.0 / 4 = 500.000

    { _id: '10', day: new Date('2023-03-15 22:3:0'), name: 'mojtaba', pricePayment: 6000000 },
    { _id: '11', day: new Date('2023-03-15 22:3:0'), name: 'hamed', pricePayment: 2000000 },
    { _id: '12', day: new Date('2023-03-15 22:3:0'), name: 'hamid', pricePayment: 6000000 },
    { _id: '13', day: new Date('2023-03-15 22:3:0'), name: 'farhad', pricePayment: 2000000 }, //! 160.000.0 / 4 = 400.000

    { _id: '14', day: new Date('2023-03-16 22:3:0'), name: 'mojtaba', pricePayment: 5000000 },
    { _id: '15', day: new Date('2023-03-16 22:3:0'), name: 'hamed', pricePayment: 1000000 },
    { _id: '16', day: new Date('2023-03-16 22:3:0'), name: 'hamid', pricePayment: 5000000 },
    { _id: '17', day: new Date('2023-03-16 22:3:0'), name: 'farhad', pricePayment: 1000000 }, //! 120.000.0 / 4 = 300.000

    { _id: '18', day: new Date('2023-03-17 22:3:0'), name: 'mojtaba', pricePayment: 1000000 },
    { _id: '19', day: new Date('2023-03-17 22:3:0'), name: 'hamed', pricePayment: 1000000 },
    { _id: '20', day: new Date('2023-03-17 22:3:0'), name: 'hamid', pricePayment: 1000000 },
    { _id: '21', day: new Date('2023-03-17 22:3:0'), name: 'farhad', pricePayment: 1000000 }, //! 120.000.0 / 4 = 100.000

    { _id: '22', day: new Date('2023-03-18 22:3:0'), name: 'mojtaba', pricePayment: 2000000 },
    { _id: '23', day: new Date('2023-03-18 22:3:0'), name: 'hamed', pricePayment: 2000000 },
    { _id: '24', day: new Date('2023-03-18 22:3:0'), name: 'hamid', pricePayment: 2000000 },
    { _id: '25', day: new Date('2023-03-18 22:3:0'), name: 'farhad', pricePayment: 2000000 }, //! 400.000 / 4 = 200.000

    { _id: '26', day: new Date('2023-03-19 22:3:0'), name: 'mojtaba', pricePayment: 7200000 },
    { _id: '27', day: new Date('2023-03-19 22:3:0'), name: 'hamed', pricePayment: 7200000 },
    { _id: '28', day: new Date('2023-03-19 22:3:0'), name: 'hamid', pricePayment: 7200000 },
    { _id: '29', day: new Date('2023-03-19 22:3:0'), name: 'farhad', pricePayment: 7200000 }, //! 360.000.0 / 4 = 720.000


  ]


  useEffect(() => {
    pushArray = []
    pushArray2 = []
    pushArray3 = []
    pushDay = []

    for (let i of userPayment) {
      pushDay.push(moment(i.day).format('jD'))

    }

    // console.log(moment(d).format('jYYYY/jM/jD hh:mm:ss'));

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



    for (let i of userPayment) {

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 1]) pushArray.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 2]) pushArray2.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 3]) pushArray3.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 4]) pushArray4.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 5]) pushArray5.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 6]) pushArray6.push(i.pricePayment)

      if (moment(i.day).format('jD') == pushDay2.sort()[pushDay2.length - 7]) pushArray7.push(i.pricePayment)

    }


    settotalNumbers(pushArray.reduce((total, number) => total + number) / pushArray.length)
    settotalNumbers2(pushArray2.reduce((total, number) => total + number) / pushArray2.length)
    settotalNumbers3(pushArray3.reduce((total, number) => total + number) / pushArray3.length)
    settotalNumbers4(pushArray4.reduce((total, number) => total + number) / pushArray4.length)
    settotalNumbers5(pushArray5.reduce((total, number) => total + number) / pushArray5.length)
    settotalNumbers6(pushArray6.reduce((total, number) => total + number) / pushArray6.length)
    settotalNumbers7(pushArray7.reduce((total, number) => total + number) / pushArray7.length)

    let sortpushArray = [totalNumbers, totalNumbers2, totalNumbers3, totalNumbers4, totalNumbers5, totalNumbers6, totalNumbers7].sort()

    setsorteX(sortpushArray)

    console.log(sortpushArray);






    setdata([
      { x: pushDay2.sort()[pushDay2.length - 1], y: totalNumbers },
      { x: pushDay2.sort()[pushDay2.length - 2], y: totalNumbers2 },
      { x: pushDay2.sort()[pushDay2.length - 3], y: totalNumbers3 },
      { x: pushDay2.sort()[pushDay2.length - 4], y: totalNumbers4 },
      { x: pushDay2.sort()[pushDay2.length - 5], y: totalNumbers5 },
      { x: pushDay2.sort()[pushDay2.length - 6], y: totalNumbers6 },
      { x: pushDay2.sort()[pushDay2.length - 7], y: totalNumbers7 },
    ])

  }, [totalNumbers])

  // useEffect(() => {
  //   console.log(
  //     totalNumbers7,
  //     totalNumbers6,
  //     totalNumbers5,
  //     totalNumbers4,
  //     totalNumbers3,
  //     totalNumbers2,
  //     totalNumbers
  //   );
  // }, [totalNumbers])

  return (
    <Container2 >

      <Span w={300} h={220} as='center' bgcolor={'#00f2'} jc='center' ai='center' fd='row-reverse' >

        <Span h='90%' w={5} jc='center' fd='column-reverse' >
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{sorteX[sorteX.length - 7]}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[0] + sorteX[sorteX.length - 1]) / 2.5).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[0] + sorteX[sorteX.length - 1]) / 2).toFixed()}</P>
          </Span>
          <Span f={1} h={5} ai='center'>
            <P fs={8} >{((sorteX[0] + sorteX[sorteX.length - 1]) / 1.5).toFixed()}</P>
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



      {/* <Span w={320} h={250} bgcolor='#00f2' ai='center' jc='center' mv='50' mh='auto' br={4} >
        <VictoryChart theme={VictoryTheme.grayscale} style={{ parent: { border: "1px solid #ccc", borderRadius: 4 }, background: { fill: "transparent" } }} padding={{ top: 10, bottom: 10, left: 20, right: 20 }} >
          <VictoryArea data={data} style={{ data: { fill: "#00f1", stroke: "silver", strokeWidth: 2, } }} />
          <VictoryScatter data={data} style={{ data: { fill: "#08f5" } }} />
        </VictoryChart>
      </Span>
 */}





      <Scroll f={1} ccStyle={{ flexGrow: 1, flexDirection: 'row', flexWrap: 'wrap' }} >
        {/* <Span w={307} h={200} bgcolor='#00f2' ai='center' jc='center' mv='50' mh='auto' br={4} >
          <VictoryChart style={{ parent: { border: "1px solid #ccc", borderRadius: 4 }, background: { fill: "transparent" } }} padding={{ top: 10, bottom: 10, left: 10, right: 10 }} >
            <VictoryArea  padding={{ top: 10, bottom: 10, left: 10, right: 10 }} data={data} style={{ data: { fill: "#00f1", stroke: "silver", strokeWidth: 2, } }} />
            <VictoryScatter data={data} style={{ data: { fill: "#08f5" } }} />
            <VictoryAxis />
          </VictoryChart>
        </Span> */}
        {/* 
        <Span w={307} h={200} bgcolor='#00f2' ai='center' jc='center' mv='50' mh='auto' br={4} >
          <VictoryChart theme={VictoryTheme.grayscale} style={{ parent: { border: "1px solid #ccc", borderRadius: 4 }, background: { fill: "transparent" } }} padding={{ top: 10, bottom: 10, left: 10, right: 10 }} >
            <VictoryArea padding={{ top: 10, bottom: 10, left: 10, right: 10 }} data={data} style={{ data: { fill: "#00f1", stroke: "silver", strokeWidth: 2, } }} />
            <VictoryScatter data={data} style={{ data: { fill: "#08f5" } }} />
          </VictoryChart>
        </Span> */}

        {/* <Span w={307} h={200} bgcolor='#00f2' ai='center' jc='center' mv='50' mh='auto' br={4} >
          <VictoryChart style={{ parent: { border: "1px solid #ccc", borderRadius: 4 }, background: { fill: "transparent" } }}  >
            <VictoryArea padding={{ top: 10, bottom: 10, left: 10, right: 10 }} data={data} style={{ data: { fill: "#00f1", stroke: "silver", strokeWidth: 2, } }} />
            <VictoryScatter data={data} style={{ data: { fill: "#08f5" } }} />
            <VictoryAxis />
          </VictoryChart>
        </Span> */}



        {/* <Span w={320} h={220} pt={15} bgcolor='#c43a3155' br={3} ai='center' jc='center' >
          <Span w={300} h={200} br={3} >
            <VictoryChart padding={{ top: 0, bottom: 0, left: 30, right: 30 }}>
              <VictoryBar data={data} style={{ data: { fill: "#c43a3188", strokeWidth: 1, width: 35, } }} />
              <VictoryAxis />
            </VictoryChart>
          </Span>
        </Span> */}


        {/* <Span w={320} h={220} pt={15} bgcolor='#c43a3155' br={3} ai='center' jc='center' >
          <VictoryChart domainPadding={20}>
            <VictoryBoxPlot
            
              boxWidth={10}
              whiskerWidth={15}
              data={[
                { x: 1, y: [1, 2, 3, 5] },
                { x: 1, y: [1, 2, 3, 5] },
                { x: 1, y: [1, 2, 3, 5] },
                { x: 2, y: [3, 2, 8, 10] },
                { x: 3, y: [2, 8, 6, 5] },
                { x: 4, y: [1, 3, 2, 9] }
              ]}
            />
          </VictoryChart>
        </Span> */}





        {/* <Span w={300} h={200} bgcolor='#c43a3155' br={3} >
            <VictoryChart>
              <VictoryBar data={data} style={{ data: { fill: "#c43a31", strokeWidth: 2, width: 27 } }} />
            </VictoryChart>
          </Span> */}


      </Scroll>
    </Container2>
  )
}

export default Chart