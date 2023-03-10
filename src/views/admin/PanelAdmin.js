import React from 'react'
import { ProgressChart, Scroll, Span, Drawer2, Container2, Press, DaysChartTotal, YearsChartTotal, Py, UserLengthChart, Row } from '../../other/Components/Html'
const PanelAdmin = (p) => {
  p._admin.getAllAddress()
  p._admin.getAllUser()
  return (
    <Container2 fd='row'>
      {/* //! یک هم درست کن برای نمایش محصولات که بتونه وارد صفحه ی تکی محصول بشه از توی لیست و کامنتشو ویرایش کنه */}
      {/* //! بعد هشت روز پول رو به حساب فروشندگان واریز کن*/}

      <Span minw={220} f={3} h='100%' pt={10}>
        <Scroll ccStyle={{ flexGrow: 1 }} >
          <Span fd='row' h='100%' style={{ flexWrap: 'wrap' }} >

            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >
              <Span w={280} h={220} fg={1} m={4}>
                <Row jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
                <DaysChartTotal h={200} data={p.chartData} />
              </Span>
              <Span w={280} h={220} fg={1} m={4}>
                <Row jc='center' ><Py fs={11} fw='100' >تعداد کل کاربران: {p.chartUserLength.length}</Py></Row>
                <UserLengthChart h={200} data={p.chartUserLength} />
              </Span>
            </Scroll>

            <Span w='100%' fd='row'>
              <Span w={280} h={200} fg={1} m={4}>
                <ProgressChart data={p.chartData} />
              </Span>
            </Span>

            <Scroll ccStyle={{ flexWrap: 'wrap' }} >
              <Span h={225} fg={1} m={4} jc='flex-end' >
                <Row jc='center' ><Py fs={11} fw='100' >خرید های سال گذشته</Py></Row>
                <YearsChartTotal h={200} data={p.chartData} />
              </Span>
            </Scroll>

          </Span>
        </Scroll>
      </Span>

    </Container2 >
  )
}

export default PanelAdmin