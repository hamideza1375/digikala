import React from 'react'
import { Container, Scroll, Span, Drawer2, P, Row, Press } from '../../other/Components/Html'
const Profile = (p) => {
  return (
    <Container fd='row'>

      <Drawer2 f={1} h={'100%'} minw={170} pt={30}>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={()=>p.navigation.navigate('PanelAdmin')} ><P>پنل ادمین</P></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={()=>p.navigation.navigate('SendTicket')} ><P>ارسال تیکت</P></Press>
          {/* <Press mt={10} onClick={()=>p.navigation.navigate('GetTicket')} ><P>تیکت های دریافتی جدید</P></Press> */}
          <Press mt={10} onClick={()=>p.navigation.navigate('TicketBox')} ><P>صندوق تیکت های دریافتی</P></Press>
          <Press mt={10} onClick={()=>p.navigation.navigate('SendProposal')} ><P>ارسال انتقادات و پیشنهادات</P></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={()=>p.navigation.navigate('ShowActiveOrder')} ><P>نمایش سفارشات فعال</P></Press>
          <Press mt={10} onClick={()=>p.navigation.navigate('ShowLastOrder')} ><P>نمایش خرید های قبل</P></Press>
          <Press mt={10} onClick={()=>p.navigation.navigate('SavedItems')} ><P>ذخیره ها</P></Press>
        </Span>
        <Span as='center' pv={15} ph={10} w='95%' border={[1, 'red']}>
          <Press onClick={()=>p.navigation.navigate('ForgetPass')} ><P>تغییر رمز عبور و مشخصات</P></Press>
          <Press mt={10} onClick={()=>p.navigation.navigate('Logout')} ><P>خروج از حساب کاربری</P></Press>
        </Span>
      </Drawer2>

      <Span minw={220} f={3} h='100%' border={[1]} pt={30}>
        <Scroll ccStyle={{ flexGrow: 1 }} >

          <Span as='center' f={1} minh={200} maxh={200} w='95%' mv={10} border={[1, 'blue']}>
            <Span p={11} mt={10} ><P>مشخصات حساب کاربری شما</P></Span>

            <Row f={1} fw='wrap' p={8} ai='center'>

              <Span f={1} fd='row' ph={14} minw='50%'><P>نام: </P><P>احمیم رضا عطار</P></Span>
              <Span f={1} fd='row' ph={14} minw='50%'><P>ایمیل: </P><P>reza.1375@gmail.com</P></Span>
              <Span f={1} fd='row' ph={14} minw='50%'><P>موبایل: </P><P>09353545665</P></Span>
            </Row>
          </Span>
          <Span as='center' f={1} minh={200} maxh={200} w='95%' mv={10} border={[1, 'blue']}>
            <Span p={9} ><P>اکانت اعضای ویژه</P></Span>
          </Span>
        </Scroll>

      </Span>

    </Container >
  )
}

export default Profile