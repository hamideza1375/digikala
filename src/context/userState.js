import { useState } from "react"


export function user() {

  const [userTicketBox, setuserTicketBox] = useState([])
  const [ticketSeen, setticketSeen] = useState()

  const [savedItems, setsavedItems] = useState([])


  const [imageProfile,setimageProfile] = useState('')
  const [phone, setphone] = useState('')
  const [code, setcode] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [imageUrl, setimageUrl] = useState('')
  const [message, setmessage] = useState('')
  const [oldPassword, setoldPassword] = useState('')
  const [password, setpassword] = useState('')
  const [remember, setremember] = useState('')
  const [phoneOrEmail, setphoneOrEmail] = useState('')

  const [twoMinut, settwoMinut] = useState()
  const [timerToMinutTrueFalse, settimerToMinutTrueFalse] = useState(false)

  // const [changeRegisterToCode, setchangeRegisterToCode] = useState(false)

  const [singleTicket, setsingleTicket] = useState({})
  const [answersTicket, setanswersTicket] = useState([])
  const [singleAnswer, setsingleAnswer] = useState({})
  // const [userTicketBox, setuserTicketBox] = useState([])
  const [bookmark, setbookmark] = useState(false)
  const [lastPayment, setlastPayment] = useState([])

  this.user = {
    lastPayment, setlastPayment,
    bookmark, setbookmark,
    savedItems, setsavedItems,
    ticketSeen, setticketSeen,
    userTicketBox, setuserTicketBox,
    phone, setphone,
    code, setcode,
    fullname, setfullname,
    email, setemail,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    imageUrl, setimageUrl,
    message, setmessage,
    imageProfile,setimageProfile,
    oldPassword, setoldPassword,
    password, setpassword,
    phoneOrEmail, setphoneOrEmail,

    twoMinut, settwoMinut,
    timerToMinutTrueFalse, settimerToMinutTrueFalse,
    // changeRegisterToCode, setchangeRegisterToCode,
    singleTicket, setsingleTicket,
    answersTicket, setanswersTicket,
    singleAnswer, setsingleAnswer,
  }
}