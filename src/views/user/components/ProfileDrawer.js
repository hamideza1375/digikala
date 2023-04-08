import React from 'react'
import { Scroll, Span, Press, Py, Badge } from '../../../other/Components/Html'

const ProfileDrawer = (p) => {
  return (
    <Scroll ccStyle={{ flexGrow: 1 }} >

      <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']} btw={0} >
      </Span>

      {p.tokenValue.isAdmin ? <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press mt={5} onClick={() => p.navigation.navigate('PanelAdmin')} ><Py>پنل ادمین</Py></Press>
      </Span>
        :
        <></>
      }

      {p.tokenValue.sellerId ? <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press mt={5} onClick={() => p.navigation.navigate('SellerPanel')} ><Py>پنل فروشندگان</Py></Press>
      </Span>
        :
        <></>
      }

      <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press mt={5} onClick={() => p.navigation.navigate('ResetSpecification')} ><Py>تغییر رمز عبور و مشخصات</Py></Press>
      </Span>
     {!p.tokenValue.isAdmin? <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press onClick={() => p.navigation.navigate('SendTicket')} ><Py>ارسال تیکت</Py></Press>
        <Press mt={10} fd='row' onClick={() => p.navigation.navigate('TicketBox')} ><Py>صندوق تیکت های دریافتی</Py>{p.ticketSeen ? <Badge left={10} /> : <></>}</Press>
        <Press mt={10} onClick={() => p.navigation.navigate('SendProposal')} ><Py>ارسال انتقادات و پیشنهادات</Py></Press>
      </Span>
    :
    <></>  
    }
      <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press onClick={() => p.navigation.navigate('ShowActiveOrder')} ><Py>نمایش سفارشات فعال</Py></Press>
        <Press mt={10} onClick={() => p.navigation.navigate('ShowLastOrder')} ><Py>نمایش خرید های قبل</Py></Press>
        <Press mt={10} onClick={() => p.navigation.navigate('SavedItems')} ><Py>ذخیره ها</Py></Press>
      </Span>
      <Span as='center' pv={15} ph={10} w='95%' border={[1, '#047']}>
        <Press onClick={() => p.navigation.navigate('Logout')} ><Py>خروج از حساب کاربری</Py></Press>
      </Span>
    </Scroll>
  )
}

export default ProfileDrawer