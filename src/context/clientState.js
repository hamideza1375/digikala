import { useRef, useState } from "react"


export function client() {

  //!
  const [logoUrl, setlogoUrl] = useState(require('../other/assets/images/logo.png'))

  const [slider, setslider] = useState([])

  const [category, setcategory] = useState([])

  const [childItem, setchildItem] = useState([])

  const [singleItem, setsingleItem] = useState({})

  const [offers, setoffers] = useState([])

  const [populars, setpopulars] = useState([])


  const [similar, setsimilar] = useState([])


  const [array, setarray] = useState([])


  const [childItemComment, setchildItemComment] = useState([])



  //!




  //!
  const [currentTable, setcurrentTable] = useState([])
  const [$food, set$food] = useState([])

  const [sendPrice, setsendPrice] = useState(15000)
  const [sendPostPrice, setsendPostPrice] = useState(15000)
  //!


  //!
  const [brandFilterValue, setbrandFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'سامسونگ', filterValue: 'samsung' },
    { _id: '3', value: 'آیفون', filterValue: 'iphone' },
    { _id: '4', value: 'شیایومی', filterValue: 'shiyaomi' },
    { _id: '5', value: 'هوآوی', filterValue: 'huawi' },
    { _id: '6', value: 'نوکیا', filterValue: 'nokia' },
  ])

  const [priceFilterValue, setpriceFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 2000000', filterValue: [0, 2000000] },
    { _id: '3', value: '2000000 تا 4000000', filterValue: [2000000, 4000000] },
    { _id: '4', value: '4000000 تا 7000000', filterValue: [4000000, 7000000] },
    { _id: '5', value: '7000000 تا 10000000', filterValue: [7000000, 10000000] },
    { _id: '6', value: '10000000 تا 15000000', filterValue: [10000000, 15000000] },
    { _id: '7', value: '15000000 به بالا', filterValue: [1000000, Infinity] },
  ])

  const [ramFilterValue, setramFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 2', filterValue: [0, 2] },
    { _id: '3', value: '2 تا 4', filterValue: [2, 4] },
    { _id: '4', value: '4 تا 8', filterValue: [4, 8] },
    { _id: '5', value: '8 تا 12', filterValue: [8, 12] },
    { _id: '6', value: '12 به بالا', filterValue: [12, Infinity] },
  ])


  const [cpuCoreFilterValue, setcpuCoreFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 4', filterValue: [0, 4] },
    { _id: '3', value: '4 تا 6', filterValue: [4, 6] },
    { _id: '4', value: '6 تل 8', filterValue: [6, 8] },
    { _id: '5', value: '8 به بالا', filterValue: [8, Infinity] },
  ])


  const [networkFilterValue, setnetworkFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: '2G', filterValue: '2G' },
    { _id: '3', value: '3G', filterValue: '3G' },
    { _id: '4', value: '4G', filterValue: '4G' },
    { _id: '5', value: '5G', filterValue: '5G' },
  ])


  const [memoryFilterValue, setmemoryFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
    { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
    { _id: '4', value: '16 تا 36', filterValue: [16, 36] },
    { _id: '5', value: '36 تا 64', filterValue: [36, 64] },
    { _id: '6', value: '64 تا 128', filterValue: [64, 128] },
    { _id: '7', value: '128 به بالا', filterValue: [128, Infinity] },
  ])


  const [cameraFilterValue, setcameraFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 8', filterValue: [0, 8] },
    { _id: '3', value: '8 تا 16', filterValue: [8, 16] },
    { _id: '4', value: '16 تا 25', filterValue: [16, 25] },
    { _id: '5', value: '25 تا 36', filterValue: [25, 36] },
    { _id: '6', value: '36 تا 64', filterValue: [36, 64] },
    { _id: '7', value: '64 تا 108', filterValue: [64, 108] },
    { _id: '8', value: '108 به بالا', filterValue: [108, Infinity] },
  ])



  const [displayFilterValue, setdisplayFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 5 اینچ', filterValue: [0, 5] },
    { _id: '3', value: '5 تا 7', filterValue: [5, 7] },
    { _id: '4', value: '7 تا 9', filterValue: [7, 9] },
    { _id: '5', value: '9 به بالا', filterValue: [9, Infinity] },
  ])


  const [batteryFilterValue, setbatteryFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'زیر 200 آمپر', filterValue: [0, 200] },
    { _id: '3', value: '200 تا 400 آمپر', filterValue: [200, 400] },
    { _id: '4', value: '400 تا 600 آمپر', filterValue: [400, 600] },
    { _id: '5', value: 'بالای 600 آمپر', filterValue: [600, Infinity] },
  ])


  const [colorFilterValue, setcolorFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'سفید', filterValue: 'white' },
    { _id: '3', value: 'مشکی', filterValue: 'black' },
    { _id: '4', value: 'خاکستری', filterValue: 'gray' },
    { _id: '5', value: 'آبی', filterValue: 'blue' },
    { _id: '6', value: 'قرمز', filterValue: 'red' },
    { _id: '7', value: 'سبز', filterValue: 'green' },
    { _id: '8', value: 'زرد', filterValue: 'yellow' },
    { _id: '9', value: ' صورتی', filterValue: 'pink' },
    { _id: '10', value: 'طلایی', filterValue: 'gold' },
    { _id: '11', value: 'نقره ای', filterValue: 'silver' },
  ])

  const [operatingSystemFilterValue, setoperatingSystemFilterValue] = useState([
    { _id: '1', value: 'همه', filterValue: '' },
    { _id: '2', value: 'اندروید', filterValue: 'android' },
    { _id: '3', value: 'ios', filterValue: 'ios' },
  ])
  //!


  //!






  const [showDropdownFilter, setshowDropdownFilter] = useState(false)
  const [showDropdownFilter2, setshowDropdownFilter2] = useState(false)
  const [showFilterModal, setshowFilterModal] = useState(false)
  //!


  //!

  const [comment, setcomment] = useState([
    { _id: '1', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', image: require('../other/assets/images/a7.jpg') },
  ])

  const [colorItem, setcolorItem] = useState([
    { _id: '1', color: 'blue', colorFa: 'آبی' },
    { _id: '2', color: 'red', colorFa: 'قرمز' },
    { _id: '3', color: 'silver', colorFa: 'خاکستری' },
  ])

  const [evailableNumber, setevailableNumber] = useState(19)
  const [guarantee, setguarantee] = useState('18 ماه')
  const [singlePrice, setsinglePrice] = useState(3750000)

  const [specifications, setspecifications] = useState(
    { id: '1', ram: '16 گیگ', cpu: 'سلام 8 هسته ای', memory: '64 گیگ', camera: '64 مگاپیکسل', display: '8 اینچ' }
  )

  const [allSpecifications, setallSpecifications] = useState([
    { id: '1', key: 'ساخت', value: '2022' },
    { id: '2', key: 'رنگ', value: 'زرد' },
    { id: '3', key: 'دوربین', value: '64' },
  ])

  //!


  //!

  //!


  //!

  //!
  const [singleItemChange, setsingleItemChange] = useState(false)
  const countMap = useRef(new Map())
  const [productBasket, setproductBasket] = useState({})
  const [color, setcolor] = useState({})
  const [sendStatus, setsendStatus] = useState({})
  const [postPrice, setpostPrice] = useState('')


  this.client = {
    postPrice, setpostPrice,
    sendStatus, setsendStatus,
    color, setcolor,
    productBasket, setproductBasket,
    countMap,
    singleItemChange, setsingleItemChange,
    logoUrl, setlogoUrl,

    slider, setslider,
    category, setcategory,
    childItem, setchildItem,
    singleItem, setsingleItem,
    populars, setpopulars,
    similar, setsimilar,
    offers, setoffers,
    array, setarray,

    childItemComment, setchildItemComment,
    currentTable, setcurrentTable,
    $food, set$food,
    sendPrice, setsendPrice,
    sendPostPrice, setsendPostPrice,
    brandFilterValue, setbrandFilterValue,
    priceFilterValue, setpriceFilterValue,
    ramFilterValue, setramFilterValue,
    cpuCoreFilterValue, setcpuCoreFilterValue,
    networkFilterValue, setnetworkFilterValue,
    memoryFilterValue, setmemoryFilterValue,
    cameraFilterValue, setcameraFilterValue,
    displayFilterValue, setdisplayFilterValue,
    batteryFilterValue, setbatteryFilterValue,
    colorFilterValue, setcolorFilterValue,
    operatingSystemFilterValue, setoperatingSystemFilterValue,

    showDropdownFilter, setshowDropdownFilter,
    showDropdownFilter2, setshowDropdownFilter2,



    showFilterModal, setshowFilterModal,

    comment, setcomment,
    colorItem, setcolorItem,
    evailableNumber, setevailableNumber,
    guarantee, setguarantee,
    specifications, setspecifications,
    allSpecifications, setallSpecifications,
    singlePrice, setsinglePrice,
  }
}