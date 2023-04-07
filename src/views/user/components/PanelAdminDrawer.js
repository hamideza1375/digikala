import React from 'react'
import { Scroll, Span, P, Press, Py, Badge } from '../../../other/Components/Html'

const PanelAdminDrawer = (p) => {
  return (
      <Scroll ccStyle={{ flexGrow: 1 }} >
        <Span mr={2} w={'95%'} border={[1, '#0479']}>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press mt={10} onClick={() => p.navigation.navigate('Address')} ><Py>فیش سفارشات</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('AllPayment')} ><Py> خرید های موفق و غیر موفق</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('QuitsForSeller')} ><Py>پرداخت به فروشندگان</Py></Press>
          </Span>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press fd='row' onClick={() => p.navigation.navigate('AdminTicketBox')} ><Py>صندوق تیکت ها</Py>{p.ticketSeen?<Badge left={5} top={.5} />:<></>}</Press>
            <Press mt={10} fd='row' onClick={() => p.navigation.navigate('SocketIo')} ><Py>صندوق پرسش و پاسخ همزمان</Py>{p.socketIoSeen?<Badge left={5} top={.5} />:<></>}</Press>
            <Press mt={10} onClick={() => p.navigation.navigate('GetProposal')} ><Py>صندوق انتقادات و پیشنهادات</Py></Press>
          </Span>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => { p.navigation.navigate('TableCategory') }} ><Py>محصولات</Py></Press>
            <Press onClick={() => p.navigation.navigate('ListUnAvailable')} mt={10} ><Py>محصولات ناموجود</Py></Press>
          </Span>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('AddAdmin')} ><Py>اضافه کردن ادمین</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('DeleteAdmin')} ><Py>حذف ادمین</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('ChangeAdmin')} ><Py>تغییر ادمین اصلی</Py></Press>
          </Span>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('Notifee')} ><Py>ارسال نوتیفیکیشن</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('CreateSlider')} ><Py>ساخت اسلایدر</Py></Press>
            <Press mt={10} onClick={() => p.navigation.navigate('SendPostPrice')} ><Py>تایین قیمت پست</Py></Press>
          </Span>
          <Span as='center' pv={15} ph={10} w='100%' border={[1, '#047']}>
            <Press onClick={() => p.navigation.navigate('Profile')} ><Py>حساب کاربری</Py></Press>
          </Span>
        </Span>
      </Scroll>
  )
}

export default PanelAdminDrawer