import { useRef, useState } from 'react';
import { Dimensions } from "react-native";
import PropTypes from 'prop-types';

export function initial() {
  const _width = Dimensions.get('window').width;
  const _height = Dimensions.get('window').height;
  const [_list, set_list] = useState([])
  const [splash, setSplash] = useState(true)
  const [height, setheight] = useState(_height)
  const [width, setwidth] = useState(_width)
  const [star1, setstar1] = useState(true)
  const [star2, setstar2] = useState(true)
  const [star3, setstar3] = useState(true)
  const [star4, setstar4] = useState(true)
  const [star5, setstar5] = useState(true)
  const [fiveStar, setfiveStar] = useState()
  const [plaque, setplaque] = useState('')
  const [unit, setunit] = useState('')
  const [address, setaddress] = useState('')
  const [postalCode, setpostalCode] = useState('')
  const [message, setmessage] = useState('')
  const [tokenValue, settokenValue] = useState({})
  const [captcha, setcaptcha] = useState('')
  const [fullname, setfullname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [phoneOrEmail, setphoneOrEmail] = useState('')
  const [password, setpassword] = useState('')
  const [oldPassword, setoldPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState()
  const [checkbox, setcheckbox] = useState()
  const [stateCity, setstateCity] = useState([])
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setimageUrl] = useState({})
  const [videoUrl, setvideoUrl] = useState('')
  const [meanStar, setmeanStar] = useState()
  const [info, setinfo] = useState('')
  const [code, setcode] = useState('')
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const [$, set$] = useState()
  const [$input] = useState(new Map())
  const refInput = useRef()
  const [dropdownBottom, setdropdownBottom] = useState()
  const [dropdownRight, setdropdownRight] = useState()
  const [clientX, setclientX] = useState(0)
  const [clientY, setclientY] = useState(0)
  const [dropdownValue, setdropdownValue] = useState('')
  const [shownDropdown, setshownDropdown] = useState(false)
  const [input1, setinput1] = useState('') // phone
  const [input2, setinput2] = useState('') // brand
  const [input3, setinput3] = useState('') // ram
  const [input4, setinput4] = useState('') // cpuCore
  const [input5, setinput5] = useState('') // camera
  const [input6, setinput6] = useState('') // storage
  const [input7, setinput7] = useState('') // waranty
  const [input8, setinput8] = useState([]) // color
  const [input9, setinput9] = useState('') // display
  const [input10, setinput10] = useState('') // operatingSystem
  const [input11, setinput11] = useState('') // battery
  const [input12, setinput12] = useState('') // network
  const [sliderImage1, setsliderImage1] = useState({})
  const [sliderImage2, setsliderImage2] = useState({})
  const [sliderImage3, setsliderImage3] = useState({})
  const [sliderImage4, setsliderImage4] = useState({})
  const [sliderImage5, setsliderImage5] = useState({})
  const [sliderImage6, setsliderImage6] = useState({})
  const [image1, setimage1] = useState({})
  const [image2, setimage2] = useState({})
  const [image3, setimage3] = useState({})
  const [image4, setimage4] = useState({})
  const [offerTime, setofferTime] = useState('')
  const [offerValue, setofferValue] = useState('')
  const [City, setCity] = useState('')
  const [state, setstate] = useState('')
  const [latlng, setlatlng] = useState({ lat: 0, lng: 0 })
  const [postPrice, setpostPrice] = useState('')
  const [logoUrl, setlogoUrl] = useState(require('../other/assets/images/logo.png'))
  
  this.all = {
    logoUrl, setlogoUrl,
    postPrice, setpostPrice,
    latlng, setlatlng,
    state, setstate, City, setCity,
    image1, setimage1,
    image2, setimage2,
    image3, setimage3,
    image4, setimage4,
    sliderImage1, setsliderImage1,
    sliderImage2, setsliderImage2,
    sliderImage3, setsliderImage3,
    sliderImage4, setsliderImage4,
    sliderImage5, setsliderImage5,
    sliderImage6, setsliderImage6,
    input2, setinput2,
    input3, setinput3,
    input4, setinput4,
    input5, setinput5,
    input6, setinput6,
    input7, setinput7,
    input8, setinput8,
    input9, setinput9,
    input10, setinput10,
    input11, setinput11,
    input12, setinput12,
    offerTime, setofferTime,
    offerValue, setofferValue,
    stateCity, setstateCity,
    dropdownBottom, setdropdownBottom,
    dropdownRight, setdropdownRight,
    clientX, setclientX,
    clientY, setclientY,
    dropdownValue, setdropdownValue,
    shownDropdown, setshownDropdown,
    splash, setSplash,
    star5, setstar5,
    star4, setstar4,
    star3, setstar3,
    star2, setstar2,
    star1, setstar1,
    fiveStar, setfiveStar,
    width, setwidth,
    height, setheight,
    input1, setinput1,
    _list, set_list,
    checkbox, setcheckbox,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    password, setpassword,
    oldPassword, setoldPassword,
    phone, setphone,
    phoneOrEmail, setphoneOrEmail,
    email, setemail,
    fullname, setfullname,
    tokenValue, settokenValue,
    unit, setunit,
    plaque, setplaque,
    address, setaddress,
    postalCode, setpostalCode,
    message, setmessage,
    captcha, setcaptcha,
    refInput,
    $input,
    $, set$,
    showActivity, setshowActivity,
    rand, setRand,
    code, setcode,
    info, setinfo,
    meanStar, setmeanStar,
    imageUrl, setimageUrl,
    videoUrl, setvideoUrl,
    price, setprice,
    title, settitle,
  }

}


  // const [host] = useState(localhost)
  // const [navigate1, setnavigate1] = useState('')
  // const [navigate2, setnavigate2] = useState('')
  // const [navigate3, setnavigate3] = useState('')
  // const [showModalAvailabe, setshowModalAvailabe] = useState(false)
  // const [showModal, setshowModal] = useState(false)
  // const [ass, setass] = useState(true)
  // const [page, setpage] = useState(1)
  // const [pageLimit] = useState(16)
  // const [current, setcurrent] = useState([])
  // const [currentPage, setcurrentPage] = useState(1)
  // const [token, settoken] = useState('')
  // const [showForm, setshowForm] = useState(false)
  // const [myPhone, setmyPhone] = useState('')
  // const [myCode, setmyCode] = useState('')
  // const [showActivityHome, setshowActivityHome] = useState(true)
  // const [changeRegister, setchangeRegister] = useState(false)
  // const [replaceInput, setreplaceInput] = useState(false)
  // const [sendMessage, setsendMessage] = useState(true)
  // const [totalTitle, settotalTitle] = useState([])
  // const [timeChange, settimeChange] = useState(5)
  // const [several, setseveral] = useState(0)
  // const [severalTime, setseveralTime] = useState(5)
  // const [severalShow, setseveralShow] = useState(true)
  // const [star, setstar] = useState()
  // const [list, setlist] = useState([])

    // several, setseveral,
    // list, setlist,
    // star, setstar,
    // severalShow, setseveralShow,
    // severalTime, setseveralTime,
    // navigate1, setnavigate1,
    // navigate2, setnavigate2,
    // navigate3, setnavigate3,
    // currentPage, setcurrentPage,
    // current, setcurrent,
    // pageLimit,
    // page, setpage,
    // ass, setass,
    // host,
    // token, settoken,
    // showModalAvailabe, setshowModalAvailabe,
    // showModal, setshowModal,
    // changeRegister, setchangeRegister,
    // replaceInput, setreplaceInput,
    // totalTitle, settotalTitle,
    // sendMessage, setsendMessage,
    // timeChange, settimeChange,
    // myCode, setmyCode,
    // myPhone, setmyPhone,
    // showActivityHome, setshowActivityHome,
    // showForm, setshowForm,


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
    // , showModalAvailabe: PropTypes.bool
    // , showModal: PropTypes.bool
    // , currentPage: PropTypes.number
    // , current: PropTypes.array
    // , pageLimit: PropTypes.number
    // , page: PropTypes.number
    // , ass: PropTypes.bool
    // , host: PropTypes.string
    // , remember: PropTypes.number
    // showActivityHome: PropTypes.bool
    // , sendMessage: PropTypes.bool
    // , timeChange: PropTypes.number
    // , replaceInput: PropTypes.bool
    // , totalTitle: PropTypes.array
    // , myPhone: PropTypes.string
    // , showForm: PropTypes.bool
     showActivity: PropTypes.bool
    // , severalTime: PropTypes.number
    // , severalShow: PropTypes.bool
    , rand: PropTypes.number
    , useEffect: PropTypes.func
    // , several: PropTypes.number
    , splash: PropTypes.bool
    // , list: PropTypes.array
    , star5: PropTypes.bool
    , star4: PropTypes.bool
    , star3: PropTypes.bool
    , star2: PropTypes.bool
    , star1: PropTypes.bool
    , width: PropTypes.number
    , height: PropTypes.number
    , input: PropTypes.string
    , checkbox: PropTypes.bool
    , confirmPassword: PropTypes.string
    , password: PropTypes.string
    , email: PropTypes.string
    , fullname: PropTypes.string
    , tokenValue: PropTypes.object
    , message: PropTypes.string
    , allstar: PropTypes.number
    , info: PropTypes.string
    , title: PropTypes.string
  }
}