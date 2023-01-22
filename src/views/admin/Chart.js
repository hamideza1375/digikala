import React from 'react'
import { Container, Scroll, Span, Drawer2, P, Row, Container2, YearsChartTotal, DaysChartTotal, DaysChartMean, YearsChartMean } from '../../other/Components/Html'
const Chart = (p) => {
  return (
    <Container2>

      <Span minw={220} f={3} h='100%' border={[1]} pt={30}>
        <Scroll ccStyle={{ flexGrow: 1 }} >

          <Span fd='row' h='100%' style={{ flexWrap: 'wrap' }} border={[1, 'red']} >

            <Span fd='row' jc='space-around' fg={1} minw={565}>
              <Span w={280} h={200}>
                <DaysChartTotal data={p.chartData} />
              </Span>
              <Span w={280} h={200}>
                <DaysChartMean data={p.chartData} />
              </Span>
            </Span>

            <Span fd='row' fg={1} jc='space-around' minw={565}>
              <Span w={280} h={200}>
                <YearsChartTotal data={p.chartData} />
              </Span>
              <Span w={280} h={200}>
                <YearsChartMean data={p.chartData} />
              </Span>
            </Span>

          </Span>

        </Scroll>
      </Span>

    </Container2 >
  )
}

export default Chart