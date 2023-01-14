import { createContext, useContext, useRef, useState } from 'react';
import { localhost } from '../../utils/axios/axios'
import jwt_decode from "jwt-decode";
import localStorage from '@react-native-async-storage/async-storage'
import Alert from "../alert"
import { useCallback, useMemo } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { Keyboard, BackHandler, ToastAndroid, Dimensions } from "react-native";
import spacePrice from '../../utils/spacePrice';
import { courseIdValidator } from '../../utils/IdValidator';
import { truncate } from '../../utils/helpers';
import PropTypes from 'prop-types';

import {} from '../../services/adminService'
import {} from '../../services/workService'
import {} from '../../services/userService'

function State() {
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
  const [input, setinput] = useState('')
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
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [remember, setremember] = useState(60000 * 60 * 24 * 365)
  const [checkbox, setcheckbox] = useState()
  const [title, settitle] = useState('')
  const [price, setprice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [videoUrl, setvideoUrl] = useState('')
  const [info, setinfo] = useState('')
  const [code, setcode] = useState('')
  const [rand, setRand] = useState(parseInt(Math.random() * 9000 + 1000));
  const [showActivity, setshowActivity] = useState(false);
  const [showActivityHome, setshowActivityHome] = useState(true)
  const [$, set$] = useState()
  const [host] = useState(localhost)
  const [changeRegister,setchangeRegister] = useState(false)
  
  const [sdCardFilter,setsdCardFilter] = useState('')
  const [ramFilter,setramFilter] = useState('')
  const [cpuCoreFilter,setcpuCoreFilter] = useState('')
  const [cameraFilter,setcameraFilter] = useState('')
  const [priceFilter,setpriceFilter] = useState('')
  
  const [sdCardFilterTo,setsdCardFilterTo] = useState('')
  const [ramFilterTo,setramFilterTo] = useState('')
  const [cpuCoreFilterTo,setcpuCoreFilterTo] = useState('')
  const [cameraFilterTo,setcameraFilterTo] = useState('')
  const [priceFilterTo,setpriceFilterTo] = useState('')
  
  const [fourG,setfourG] = useState(false)
  const [fiveG,setfiveG] = useState(false)
  const [showDropdownFilter,setshowDropdownFilter] = useState(false)
  const [showDropdownFilter2,setshowDropdownFilter2] = useState(false)
  const [$input] = useState(new Map())
  const [showFilterModal,setshowFilterModal] = useState(false)
  
  const useEffect = (call, state) => { useFocusEffect(useCallback(() => call(), state)) }
  const refInput = useRef()



  const [slider, setslider] = useState([
    { id: '1', image:require('../../assets/images/a1.jpg')},
    { id: '2', image:require('../../assets/images/a2.jpg') },
    { id: '3', image:require('../../assets/images/a3.jpg') },
    { id: '4', image:require('../../assets/images/a7.jpg') },
    { id: '5', image:require('../../assets/images/a1.jpg') },
    { id: '6', image:require('../../assets/images/a2.jpg') },
    { id: '7', image:require('../../assets/images/a3.jpg') },
    { id: '8', image:require('../../assets/images/a7.jpg') },
  ])


  const [array, setarray] = useState([
    { id: '1', title:'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [group, setgroup] = useState([
    { id: '1', title:'موبایل', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'تبلت', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'هدفون و هنزفیری', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'لوازم جانبی', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'سیمکارت', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
  ])


  const [childMobile, setchildMobile] = useState([
    { id: '1', title:'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])

  const [childTablet, setchildTablet] = useState([
    { id: '1', title:'tablet1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'tablet2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'tablet3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'tablet4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'tablet5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'tablet6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'tablet7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'tablet8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'tablet9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'tablet10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [childheadphone, setchildheadphone] = useState([
    { id: '1', title:'headphon1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'headphon2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'headphon3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'headphon4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'headphon5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'headphon6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'headphon7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'headphon8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'headphon9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'headphon10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [childmunition, setchildmunition] = useState([
    { id: '1', title:'glass1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'glass2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'glass3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'glass4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'glass5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'glass6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'glass7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'glass8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'glass9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'glass10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [childSimCard, setchildSimCard] = useState([
    { id: '1', title:'simkart1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'simkart2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'simkart3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'simkart4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'simkart5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'simkart6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'simkart7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'simkart8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'simkart9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'simkart10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [popular, setpopular] = useState([
    { id: '1', title:'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])


  const [similar, setsimilar] = useState([
    { id: '1', title:'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])



  const [offers, setoffers] = useState([
    { id: '1', title:'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel:50 , color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '2', title:'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel:30, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '3', title:'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel:40, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '4', title:'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:150, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '5', title:'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel:10, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg') },
    { id: '6', title:'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel:50, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
    { id: '7', title:'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a3.jpg') },
    { id: '8', title:'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel:8, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a7.jpg') },
    { id: '9', title:'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel:1, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a1.jpg')},
    { id: '10', title:'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel:0, color:['red','blue'], guarantee :'guarantee ', image:require('../../assets/images/a2.jpg') },
  ])



  const [comment, setcomment] = useState([
    { id: '1', image:require('../../assets/images/a1.jpg')},
    { id: '2', image:require('../../assets/images/a2.jpg') },
    { id: '3', image:require('../../assets/images/a3.jpg') },
    { id: '4', image:require('../../assets/images/a7.jpg') },
    { id: '5', image:require('../../assets/images/a1.jpg') },
    { id: '6', image:require('../../assets/images/a2.jpg') },
    { id: '7', image:require('../../assets/images/a3.jpg') },
    { id: '8', image:require('../../assets/images/a7.jpg') },
  ])


  return {
    $input,
    showDropdownFilter,setshowDropdownFilter,
    showDropdownFilter2,setshowDropdownFilter2,
    array, setarray,

    slider, setslider,
    popular, setpopular,
    similar, setsimilar,
    offers, setoffers,
    comment, setcomment,

    group, setgroup,
    childMobile, setchildMobile,
    childTablet, setchildTablet,
    childheadphone, setchildheadphone,
    childmunition, setchildmunition,
    childSimCard, setchildSimCard,

    sdCardFilter,setsdCardFilter,
    ramFilter,setramFilter,
    cpuCoreFilter,setcpuCoreFilter,
    cameraFilter,setcameraFilter,
    priceFilter,setpriceFilter,

    sdCardFilterTo,setsdCardFilterTo,
    ramFilterTo,setramFilterTo,
    cpuCoreFilterTo,setcpuCoreFilterTo,
    cameraFilterTo,setcameraFilterTo,
    priceFilterTo,setpriceFilterTo,

    fourG,setfourG,
    fiveG,setfiveG,
    
    changeRegister,setchangeRegister,
    showFilterModal,setshowFilterModal,
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
    input, setinput,
    currentPage, setcurrentPage,
    current, setcurrent,
    pageLimit,
    page, setpage,
    ass, setass,
    _list, set_list,
    checkbox, setcheckbox,
    remember, setremember,
    confirmPassword, setconfirmPassword,
    password, setPassword,
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
    useEffect,
    host,
    $, set$,
    showActivityHome, setshowActivityHome,
    showActivity, setshowActivity,
    rand, setRand,
    code, setcode,
    info, setinfo,
    imageUrl, setImageUrl,
    videoUrl, setvideoUrl,
    price, setprice,
    title, settitle,
    spacePrice, courseIdValidator, truncate, jwt_decode, localStorage, Alert, useEffect, useMemo, Keyboard, BackHandler, ToastAndroid, Dimensions,
  }
}
export const states = () => State()
export const contextStates = createContext(states);
export const context = () => useContext(contextStates)



export const propTypes = (component) => {
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
