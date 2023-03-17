import { useRef, useState } from 'react';
import { localhost } from '../other/utils/axios/axios'
import { Dimensions } from "react-native";

export function initial() {

  const _width = Dimensions.get('window').width;
  const _height = Dimensions.get('window').height;
  const [replaceInput, setreplaceInput] = useState(false)
  const [several, setseveral] = useState(0)
  const [severalTime, setseveralTime] = useState(5)
  const [severalShow, setseveralShow] = useState(true)
  const [totalTitle, settotalTitle] = useState([])
  const [star, setstar] = useState()
  const [showModal, setshowModal] = useState(false)
  const [timeChange, settimeChange] = useState(5)
  const [list, setlist] = useState([])
  const [splash, setSplash] = useState(true)
  const [showModalAvailabe, setshowModalAvailabe] = useState(false)
  const [sendMessage, setsendMessage] = useState(true)
  const [_list, set_list] = useState([])
  const [ass, setass] = useState(true)
  const [page, setpage] = useState(1)
  const [pageLimit] = useState(16)
  const [current, setcurrent] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const [input1, setinput1] = useState('')
  const [height, setheight] = useState(_height)
  const [width, setwidth] = useState(_width)
  const [star1, setstar1] = useState(true)
  const [star2, setstar2] = useState(true)
  const [star3, setstar3] = useState(true)
  const [star4, setstar4] = useState(true)
  const [star5, setstar5] = useState(true)
  const [allstar, setallstar] = useState()
  const [message, setmessage] = useState('')
  const [showForm, setshowForm] = useState(false)
  const [token, settoken] = useState('')
  const [tokenValue, settokenValue] = useState({})
  const [myPhone, setmyPhone] = useState('')
  const [myCode, setmyCode] = useState('')
  const [captcha, setcaptcha] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState(60000 * 60 * 24 * 365)
  const [checkbox, setcheckbox] = useState()
  const [stateCity, setstateCity] = useState([])
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setImageUrl] = useState({})
  const [videoUrl, setvideoUrl] = useState('')
  const [meanStar, setmeanStar] = useState()
  const [info, setinfo] = useState('')
  const [code, setcode] = useState('')
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const [showActivityHome, setshowActivityHome] = useState(true)
  const [$, set$] = useState()
  const [host] = useState(localhost)
  const [changeRegister, setchangeRegister] = useState(false)


  const [$input] = useState(new Map())

  const refInput = useRef()

  const [dropdownBottom, setdropdownBottom] = useState()
  const [dropdownRight,setdropdownRight] = useState()
  const [clientX, setclientX] = useState(0)
  const [clientY, setclientY] = useState(0)
  const [dropdownValue, setdropdownValue] = useState('')
  const [shownDropdown, setshownDropdown] = useState(false)

  const [sliderImage1, setsliderImage1] = useState({})
  const [sliderImage2, setsliderImage2] = useState({})
  const [sliderImage3, setsliderImage3] = useState({})
  const [sliderImage4, setsliderImage4] = useState({})
  const [sliderImage5, setsliderImage5] = useState({})
  const [sliderImage6, setsliderImage6] = useState({})


  this.all = { 
    sliderImage1, setsliderImage1,
    sliderImage2, setsliderImage2,
    sliderImage3, setsliderImage3,
    sliderImage4, setsliderImage4,
    sliderImage5, setsliderImage5,
    sliderImage6, setsliderImage6,
    
    stateCity, setstateCity,
    dropdownBottom, setdropdownBottom,
    dropdownRight,setdropdownRight,
    clientX, setclientX,
    clientY, setclientY,
    dropdownValue, setdropdownValue,
    shownDropdown, setshownDropdown,
    changeRegister, setchangeRegister,
    replaceInput, setreplaceInput,
    several, setseveral,
    sendMessage, setsendMessage,
    showModalAvailabe, setshowModalAvailabe,
    splash, setSplash,
    list, setlist,
    timeChange, settimeChange,
    showModal, setshowModal,
    star, setstar,
    totalTitle, settotalTitle,
    severalShow, setseveralShow,
    severalTime, setseveralTime,
    star5, setstar5,
    star4, setstar4,
    star3, setstar3,
    star2, setstar2,
    star1, setstar1,
    width, setwidth,
    height, setheight,
    input1, setinput1,
    currentPage, setcurrentPage,
    current, setcurrent,
    pageLimit,
    page, setpage,
    ass, setass,
    _list, set_list,
    checkbox, setcheckbox,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    password, setpassword,
    phone, setphone,
    email, setemail,
    fullname, setfullname,
    captcha, setcaptcha,
    myCode, setmyCode,
    myPhone, setmyPhone,
    tokenValue, settokenValue,
    token, settoken,
    showForm, setshowForm,
    message, setmessage,
    allstar, setallstar,
    refInput,
    host,
    $input,
    $, set$,
    showActivityHome, setshowActivityHome,
    showActivity, setshowActivity,
    rand, setRand,
    code, setcode,
    info, setinfo,
    meanStar, setmeanStar,
    imageUrl, setImageUrl,
    videoUrl, setvideoUrl,
    price, setprice,
    title, settitle,
   }

}



export const initialPropType = (component) => {
  component.propTypes = {
    // , phone: PropTypes.number
    // , star: PropTypes
    // , captcha: PropTypes.bool
    // , myCode: PropTypes.number
    // , token: PropTypes
    // , price: PropTypes.number
    // , code: PropTypes.number
    // , imageUrl: PropTypes.string
    showActivityHome: PropTypes.bool
    , showActivity: PropTypes.bool
    , severalTime: PropTypes.number
    , severalShow: PropTypes.bool
    , rand: PropTypes.number
    , useEffect: PropTypes.func
    , several: PropTypes.number
    , sendMessage: PropTypes.bool
    , showModalAvailabe: PropTypes.bool
    , splash: PropTypes.bool
    , list: PropTypes.array
    , timeChange: PropTypes.number
    , showModal: PropTypes.bool
    , replaceInput: PropTypes.bool
    , totalTitle: PropTypes.array
    , star5: PropTypes.bool
    , star4: PropTypes.bool
    , star3: PropTypes.bool
    , star2: PropTypes.bool
    , star1: PropTypes.bool
    , width: PropTypes.number
    , height: PropTypes.number
    , input: PropTypes.string
    , currentPage: PropTypes.number
    , current: PropTypes.array
    , pageLimit: PropTypes.number
    , page: PropTypes.number
    , ass: PropTypes.bool
    , checkbox: PropTypes.bool
    , remember: PropTypes.number
    , confirmPassword: PropTypes.string
    , password: PropTypes.string
    , email: PropTypes.string
    , fullname: PropTypes.string
    , myPhone: PropTypes.string
    , tokenValue: PropTypes.object
    , showForm: PropTypes.bool
    , message: PropTypes.string
    , allstar: PropTypes.number
    , host: PropTypes.string
    , info: PropTypes.string
    , title: PropTypes.string
  }
}