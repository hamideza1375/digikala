import React from 'react'
import ProgressChart from '../../other/Components/chart/ProgressChart'
import { Container, Scroll, Span, Drawer2, P, Row, Container2, Press, DaysChartTotal, DaysChartMean, YearsChartTotal, YearsChartMean, Br } from '../../other/Components/Html'
const PanelAdmin = (p) => {
  return (
    <Container2 fd='row'>
      {/* //! یک هم درست کن برای نمایش محصولات که بتونه وارد صفحه ی تکی محصول بشه از توی لیست و کامنتشو ویرایش کنه */}
      {/* //! چارت هارو توی همین صفحه اول نمایش بده */}
      {/* //! بعد هشت روز پول رو به حساب فروشندگان واریز کن*/}
      <Drawer2 {...p} f={1} h={'100%'} minw={170} pt={30}>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={() => p.navigation.navigate('Chart')} ><P>تیکت ها</P></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Span ><P>محصولات</P></Span>
          <Span mt={10}><P>فروشندگان</P></Span>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%'>
          <Press onClick={() => p.navigation.navigate('GetProposal')} ><P>صندوق انتقادات و پیشنهادات</P></Press>
        </Span>
      </Drawer2>
      <Span minw={220} f={3} h='100%' pt={30}>
        <Scroll ccStyle={{ flexGrow: 1 }} >

          <Span fd='row' h='100%' style={{ flexWrap: 'wrap' }} >





            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >
              <Span w={280} h={200} fg={1} m={4}>
                <DaysChartTotal data={p.chartData} {...p}/>
              </Span>
              <Span w={280} h={200} fg={1} m={4}>
                <DaysChartMean data={p.chartData} {...p}/>
              </Span>
            </Scroll>




              <Span w={280} h={200} fg={1} m={4}>
                <ProgressChart data={p.chartData} {...p} />
              </Span>


            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >
              <Span w={280} h={200} fg={1} m={4}>
                <YearsChartTotal data={p.chartData} {...p} />
              </Span>
              <Span w={280} h={200} fg={1} m={4}>
                <YearsChartMean data={p.chartData} {...p}/>
              </Span>
            </Scroll>

          </Span>

        </Scroll>
      </Span>

    </Container2 >
  )
}

export default PanelAdmin