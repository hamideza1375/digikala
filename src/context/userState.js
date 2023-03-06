import { useState } from "react"


export function user() {

  const [userTicketBox,setuserTicketBox] = useState([
    { _id: '1', title: 'اولین عنوان', message: "اولین پیام  ارسالی ارسال شده ی کاربر", newMessage:false },
    { _id: '2', title: 'دومین عنوان', message: "دومین پیام  ارسالی ارسال شده ی کاربر", newMessage:true },
    { _id: '3', title: 'سومین عنوان', message: "سومین پیام  ارسالی ارسال شده ی کاربر", newMessage:false },
    { _id: '4', title: 'چهارمین عنوان', message: "چهارمین پیام  ارسالی ارسال شده ی کاربر", newMessage:false }
  ])


  const [phone, setphone] = useState('')
  const [code, setcode] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [message, setmessage] = useState('')
  const [password, setpassword] = useState('')
  const [remember, setremember] = useState('')
  const [phoneOrEmail, setphoneOrEmail] = useState('')

  const [twoMinut, settwoMinut] = useState()
  const [timerToMinutTrueFalse, settimerToMinutTrueFalse] = useState(false)

  // const [changeRegisterToCode, setchangeRegisterToCode] = useState(false)



  this.user = { 
    userTicketBox, setuserTicketBox,
    phone, setphone,
    code, setcode,
    fullname, setfullname,
    email, setemail,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    imageUrl, setimageUrl,
    message, setmessage,
    password, setpassword,
    phoneOrEmail, setphoneOrEmail,
    
    twoMinut, settwoMinut,
    timerToMinutTrueFalse, settimerToMinutTrueFalse,
    // changeRegisterToCode, setchangeRegisterToCode,
   }
}