import { useRef, useState } from "react"


export function client() {
  const [slider, setslider] = useState([])
  const [category, setcategory] = useState([])
  const [childItem, setchildItem] = useState([])
  const [singleItem, setsingleItem] = useState({})
  const [offers, setoffers] = useState([])
  const [populars, setpopulars] = useState([])
  const [similar, setsimilar] = useState([])
  const [childItemComment, setchildItemComment] = useState([])
  const [showDropdownFilter, setshowDropdownFilter] = useState(false)
  const [showFilterModal, setshowFilterModal] = useState(false)
  const [singleItemChange, setsingleItemChange] = useState(false)
  const [productBasket, setproductBasket] = useState({})
  const [color, setcolor] = useState({})
  const refMap = useRef(new Map())
  const [bookmark, setbookmark] = useState(false)
  const [newSearchOffershArray, setnewSearchOffershArray] = useState([])
  const [newSearchPopularsArray, setnewSearchPopularsArray] = useState([])
  const [socketIoSeen, setsocketIoSeen] = useState(false)
  const [availableSeller, setavailableSeller] = useState(true)
  const [newSearchArray, setnewSearchArray] = useState([])
  const [newSearchHomeArray, setnewSearchHomeArray] = useState([])

  this.client = {
    newSearchHomeArray, setnewSearchHomeArray,
    newSearchArray, setnewSearchArray,
    availableSeller, setavailableSeller,
    socketIoSeen, setsocketIoSeen,
    newSearchPopularsArray, setnewSearchPopularsArray,
    newSearchOffershArray, setnewSearchOffershArray,
    bookmark, setbookmark,
    refMap,
    color, setcolor,
    productBasket, setproductBasket,
    singleItemChange, setsingleItemChange,
    slider, setslider,
    category, setcategory,
    childItem, setchildItem,
    singleItem, setsingleItem,
    populars, setpopulars,
    similar, setsimilar,
    offers, setoffers,
    childItemComment, setchildItemComment,
    showDropdownFilter, setshowDropdownFilter,
    showFilterModal, setshowFilterModal,
  }
}

   // sendStatus, setsendStatus,
   // countMap,
   // sendPrice, setsendPrice,
   // sendPostPrice, setsendPostPrice,
   // hidden, sethidden,
   // comment, setcomment,
   // specifications, setspecifications,
   // guarantee, setguarantee,
    // currentTable, setcurrentTable,
    // colorItem, setcolorItem,
    // evailableNumber, setevailableNumber,
    // singlePrice, setsinglePrice,
    // allSpecifications, setallSpecifications,
    // showDropdownFilter2, setshowDropdownFilter2,
    // isEnabled, setIsEnabled,
    // showCheckboxMemoryFilter, setshowCheckboxMemoryFilter,
    // showCheckboxCameraFilter, setshowCheckboxCameraFilter,
    // showCheckboxBatryFilter, setshowCheckboxBatryFilter,
    // showCheckboxDisplayFilter, setshowCheckboxDisplayFilter,
    // showCheckboxOperatingSystemFilter, setshowCheckboxOperatingSystemFilter,
    // showCheckboxColorFilter, setshowCheckboxColorFilter,
    // showCheckboxNetworkFilter, setshowCheckboxNetworkFilter,
    // showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter,
    // showCheckboxRamFilter, setshowCheckboxRamFilter,
    // showCheckboxPriceFilter, setshowCheckboxPriceFilter,
    // showCheckboxBrandFilter, setshowCheckboxBrandFilter,
    // operatingSystemFilter, setoperatingSystemFilter,
    // colorFilter, setcolorFilter,
    // batteryFilter, setbatteryFilter,
    // displayFilter, setdisplayFilter,
    // cameraFilter, setcameraFilter,
    // cpuCoreFilter, setcpuCoreFilter,
    // ramFilter, setramFilter,
    // storageFilter, setstorageFilter,
    // networkFilter, setnetworkFilter,
    // priceFilter, setpriceFilter,
    // brandFilter, setbrandFilter,
    // array, setarray,
    // postPrice, setpostPrice,

  // const [postPrice, setpostPrice] = useState('')
      // const [sendPrice, setsendPrice] = useState(15000)
  // const [sendPostPrice, setsendPostPrice] = useState(0)
  // const [hidden, sethidden] = useState(false)
  // const [comment, setcomment] = useState([])
  // const [specifications, setspecifications] = useState({})
  // const countMap = useRef(new Map())
  // const [sendStatus, setsendStatus] = useState({}
  // const [guarantee, setguarantee] = useState('')
  // const [array, setarray] = useState([])
  // const [currentTable, setcurrentTable] = useState([])
  // const [colorItem, setcolorItem] = useState([])
  // const [evailableNumber, setevailableNumber] = useState(19)
  // const [singlePrice, setsinglePrice] = useState(3750000)
  // const [allSpecifications, setallSpecifications] = useState([])
  // const [showDropdownFilter2, setshowDropdownFilter2] = useState(false)
  // const [isEnabled, setIsEnabled] = useState(false);
  // const [showCheckboxBrandFilter, setshowCheckboxBrandFilter] = useState(false);
  // const [showCheckboxPriceFilter, setshowCheckboxPriceFilter] = useState(false);
  // const [showCheckboxRamFilter, setshowCheckboxRamFilter] = useState(false);
  // const [showCheckboxcpuCoreFilter, setshowCheckboxcpuCoreFilter] = useState(false);
  // const [showCheckboxNetworkFilter, setshowCheckboxNetworkFilter] = useState(false);
  // const [showCheckboxOperatingSystemFilter, setshowCheckboxOperatingSystemFilter] = useState(false);
  // const [showCheckboxDisplayFilter, setshowCheckboxDisplayFilter] = useState(false)
  // const [showCheckboxColorFilter, setshowCheckboxColorFilter] = useState(false)
  // const [showCheckboxBatryFilter, setshowCheckboxBatryFilter] = useState(false)
  // const [showCheckboxCameraFilter, setshowCheckboxCameraFilter] = useState(false)
  // const [showCheckboxMemoryFilter, setshowCheckboxMemoryFilter] = useState(false)
  // const [brandFilter, setbrandFilter] = useState('')
  // const [priceFilter, setpriceFilter] = useState('')
  // const [networkFilter, setnetworkFilter] = useState('')
  // const [storageFilter, setstorageFilter] = useState('')
  // const [ramFilter, setramFilter] = useState('')
  // const [cpuCoreFilter, setcpuCoreFilter] = useState('')
  // const [cameraFilter, setcameraFilter] = useState('')
  // const [displayFilter, setdisplayFilter] = useState('')
  // const [batteryFilter, setbatteryFilter] = useState('')
  // const [colorFilter, setcolorFilter] = useState('')
  // const [operatingSystemFilter, setoperatingSystemFilter] = useState('')