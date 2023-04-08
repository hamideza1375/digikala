import { useState } from "react"


export function user() {
  const [userTicketBox, setuserTicketBox] = useState([])
  const [ticketSeen, setticketSeen] = useState()
  const [savedItems, setsavedItems] = useState([])
  const [imageProfile,setimageProfile] = useState('')
  const [oldPassword, setoldPassword] = useState('')
  const [twoMinut, settwoMinut] = useState()
  const [timerToMinutTrueFalse, settimerToMinutTrueFalse] = useState(false)
  const [answersTicket, setanswersTicket] = useState([])
  const [bookmark, setbookmark] = useState(false)
  const [lastPayment, setlastPayment] = useState([])
  const [newSearchSellerArray, setnewSearchSellerArray] = useState([])
  const [sellerItems, setsellerItems] = useState([])
  

  this.user = {
    newSearchSellerArray, setnewSearchSellerArray,
    sellerItems, setsellerItems,
    lastPayment, setlastPayment,
    bookmark, setbookmark,
    savedItems, setsavedItems,
    ticketSeen, setticketSeen,
    userTicketBox, setuserTicketBox,
    oldPassword, setoldPassword,
    imageProfile,setimageProfile,
    twoMinut, settwoMinut,
    timerToMinutTrueFalse, settimerToMinutTrueFalse,
    answersTicket, setanswersTicket,
  }
}

    // singleTicket, setsingleTicket,
    // singleAnswer, setsingleAnswer,
    // phone, setphone,
    // code, setcode,
    // fullname, setfullname,
    // email, setemail,
    // remember, setremember,
    // confirmPassword, setconfirmPassword,
    // imageUrl, setimageUrl,
    // message, setmessage,
    // phoneOrEmail, setphoneOrEmail,
    // password, setpassword,
    
  // const [singleAnswer, setsingleAnswer] = useState({})
  // const [singleTicket, setsingleTicket] = useState({})
  // const [phone, setphone] = useState('')
  // const [code, setcode] = useState('')
  // const [fullname, setfullname] = useState('')
  // const [email, setemail] = useState('')
  // const [confirmPassword, setconfirmPassword] = useState('')
  // const [imageUrl, setimageUrl] = useState('')
  // const [message, setmessage] = useState('')
  // const [remember, setremember] = useState('')
  // const [phoneOrEmail, setphoneOrEmail] = useState('')
  // const [password, setpassword] = useState('')