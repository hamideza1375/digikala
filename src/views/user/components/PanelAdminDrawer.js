import React from 'react'
import { Scroll, Span, P, Press, Py } from '../../../other/Components/Html'

const PanelAdminDrawer = (p) => {
  return (
      <Scroll ccStyle={{ flexGrow: 1 }} >
              <Scroll ccStyle={{ flexGrow: 1 }} >
          <Span mr={2} w={'95%'} border={[1, '#0479']}>
            <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
              <Press mt={10} onClick={() => p.navigation.navigate('Address')} ><Py>فیش سفارشات</Py></Press>
            </Span>
            <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
              <Press onClick={() => p.navigation.navigate('AdminGetTicket')} ><Py>صندوق تیکت ها</Py></Press>
              <Press mt={10} onClick={() => p.navigation.navigate('RealTimeChat')} ><Py>صندوق پرسش و پاسخ همزمان</Py></Press>
              <Press mt={10} onClick={() => p.navigation.navigate('GetProposal')} ><Py>صندوق انتقادات و پیشنهادات</Py></Press>
            </Span>
            <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
              <Press onClick={() => { p.navigation.navigate('Sellers') }} ><Py>فروشندگان</Py></Press>
              <Press onClick={() => p.navigation.navigate('ListUnAvailable')} mt={10} ><Py>محصولات ناموجود</Py></Press>
            </Span>
            <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
              <Press onClick={() => p.navigation.navigate('AddAdmin')} ><Py>اضافه کردن ادمین</Py></Press>
              <Press mt={10} onClick={() => p.navigation.navigate('DeleteAdmin')} ><Py>حذف ادمین</Py></Press>
              <Press mt={10} onClick={() => p.navigation.navigate('ChangeAdmin')} ><Py>تغییر ادمین اصلی</Py></Press>
            </Span>
            <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
              <Press onClick={() => p.navigation.navigate('Notifee')} ><Py>ارسال نوتیفیکیشن</Py></Press>
            </Span>
          </Span>
        </Scroll>
      </Scroll>
    )
}

export default PanelAdminDrawer