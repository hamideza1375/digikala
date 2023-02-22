import { useState } from "react"


export function ticketBox() {

  const [userTicketBox,setuserTicketBox] = useState([
    { _id: '1', title: 'اولین عنوان', message: "اولین پیام  ارسالی ارسال شده ی کاربر", newMessage:false },
    { _id: '2', title: 'دومین عنوان', message: "دومین پیام  ارسالی ارسال شده ی کاربر", newMessage:true },
    { _id: '3', title: 'سومین عنوان', message: "سومین پیام  ارسالی ارسال شده ی کاربر", newMessage:false },
    { _id: '4', title: 'چهارمین عنوان', message: "چهارمین پیام  ارسالی ارسال شده ی کاربر", newMessage:false }
  ])


  this.userTicketBox = { 
    userTicketBox, setuserTicketBox,
   }
}