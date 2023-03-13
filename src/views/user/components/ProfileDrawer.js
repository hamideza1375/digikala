import React from 'react'
import { Scroll, Span, Drawer2, P, Press, Py } from '../../../other/Components/Html'

const ProfileDrawer = (p) => {
  return (
      <Scroll ccStyle={{ flexGrow: 1 }} >
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={() => p.navigation.navigate('PanelAdmin')} ><Py>پنل ادمین</Py></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={() => p.navigation.navigate('SendTicket')} ><Py>ارسال تیکت</Py></Press>
          {/* <Press mt={10} onClick={()=>p.navigation.navigate('GetTicket')} ><Py>تیکت های دریافتی جدید</Py></Press> */}
          <Press mt={10} onClick={() => p.navigation.navigate('TicketBox')} ><Py>صندوق تیکت های دریافتی</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('SendProposal')} ><Py>ارسال انتقادات و پیشنهادات</Py></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={() => p.navigation.navigate('ShowActiveOrder')} ><Py>نمایش سفارشات فعال</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('ShowLastOrder')} ><Py>نمایش خرید های قبل</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('SavedItems')} ><Py>ذخیره ها</Py></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={() => p.navigation.navigate('ForgetPass')} ><Py>تغییر رمز عبور و مشخصات</Py></Press>
          <Press mt={10} onClick={() => p.navigation.navigate('Logout')} ><Py>خروج از حساب کاربری</Py></Press>
        </Span>
      </Scroll>
    )
}

export default ProfileDrawer