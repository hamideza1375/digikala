import React from 'react'
import { ProgressChart, Scroll, Column, Py, Row, DaysChartTotal, YearsChartTotal, UserLengthChart } from '../../other/Components/Html'
const PanelAdmin = (p) => {
  p._admin.getAdminTicketSeen()
  p._admin.getSocketIoSeen()
  p._admin.getDataForChart()
  return (
    <Column f={1} fd='row'>
      <Column minw={220} f={3} h='100%' pt={10}>
        <Scroll ccStyle={{ flexGrow: 1 }} >
          <Column fd='row' h='100%' style={{ flexWrap: 'wrap' }} >

            <Scroll ccStyle={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }} >
              <Column w={280} h={235} fg={1} m={4}>
                <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های هفت روز گذشته</Py></Row>
                <DaysChartTotal h={215} data={p.address7DeyForChart} />
              </Column>
              <Column w={280} h={235} fg={1} m={4}>
                <Row h={20} jc='center' ><Py fs={11} fw='100' >تعداد کل کاربران: {p.usersLength}</Py></Row>
                <UserLengthChart h={215} data={p.users7DeyForChart} />
              </Column>
            </Scroll>

            <Column w='100%' fd='row'>
              <Column w={280} h={200} fg={1} m={4}>
                <ProgressChart data={p.address1YearsForChart} />
              </Column>
            </Column>

            <Scroll ccStyle={{ flexWrap: 'wrap' }} >
              <Column h={235} fg={1} m={4} jc='flex-end' >
                <Row h={20} jc='center' ><Py fs={11} fw='100' >خرید های سال گذشته</Py></Row>
                <YearsChartTotal h={215} data={p.address1YearsForChart} />
              </Column>
            </Scroll>

          </Column>
        </Scroll>
      </Column>

    </Column >
  )
}

export default PanelAdmin