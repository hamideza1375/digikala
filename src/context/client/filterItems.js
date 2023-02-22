import { useState } from "react"


export function filterItems() {


  const [brandFilterValue, setbrandFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'سامسونگ' },
    { _id: '3', name: 'آیفون' },
    { _id: '4', name: 'شیایومی' },
    { _id: '5', name: 'هوآوی' },
    { _id: '6', name: 'نوکیا' },
  ])

  const [ramFilterValue, setramFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'سامسونگ' },
    { _id: '3', name: 'آیفون' },
    { _id: '4', name: 'شیایومی' },
    { _id: '5', name: 'هوآوی' },
    { _id: '6', name: 'نوکیا' },
  ])


  const [cpuCoreFilterValue, setcpuCoreFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'زیر 4' },
    { _id: '3', name: '4 تا 6' },
    { _id: '4', name: '6 تل 8' },
    { _id: '5', name: '8 به بالا' },
  ])


  const [networkFilterValue, setnetworkFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: '2G' },
    { _id: '3', name: '3G' },
    { _id: '4', name: '4G' },
    { _id: '5', name: '5G' },
  ])

  const [memoryFilterValue, setmemoryFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'زیر 8' },
    { _id: '3', name: '8 تا 16' },
    { _id: '4', name: '16 تا 36' },
    { _id: '5', name: '36 تا 64' },
    { _id: '6', name: '64 تا 128' },
    { _id: '7', name: '128 به بالا' },
  ])

  const [cameraFilterValue, setcameraFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'زیر 8' },
    { _id: '3', name: '8 تا 16' },
    { _id: '4', name: '16 تا 25' },
    { _id: '5', name: '25 تا 36' },
    { _id: '6', name: '36 تا 64' },
    { _id: '7', name: '64 تا 108' },
    { _id: '8', name: '108 به بالا' },
  ])



  const [displayFilterValue, setdisplayFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'زیر 7 اینچ' },
    { _id: '3', name: '7 اینچ' },
    { _id: '4', name: '7 تا 10' },
    { _id: '5', name: '10 تا 12' },
    { _id: '6', name: '12 به بالا' },
  ])


  const [batteryFilterValue, setbatteryFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'زیر 200 آمپر' },
    { _id: '3', name: '200 تا 300 آمپر' },
    { _id: '4', name: '300 تا 400 آمپر' },
    { _id: '5', name: 'بالای 400 آمپر' },
  ])


  const [colorFilterValue, setcolorFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'سفید' },
    { _id: '3', name: 'مشکی' },
    { _id: '4', name: 'خاکستری' },
    { _id: '5', name: 'آبی' },
    { _id: '6', name: 'قرمز' },
    { _id: '7', name: 'سبز' },
    { _id: '8', name: 'زرد' },
    { _id: '9', name: ' صورتی' },
    { _id: '10', name: 'طلایی' },
    { _id: '11', name: 'نقره ای' },
  ])

  const [systemFilterValue, setsystemFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'سفید' },
    { _id: '3', name: 'مشکی' },
    { _id: '4', name: 'خاکستری' },
    { _id: '5', name: 'آبی' },
    { _id: '6', name: 'قرمز' },
    { _id: '7', name: 'سبز' },
    { _id: '8', name: 'زرد' },
    { _id: '9', name: ' صورتی' },
    { _id: '10', name: 'طلایی' },
    { _id: '11', name: 'نقره ای' },
  ])









  const [sdCardFilter, setsdCardFilter] = useState('')
  const [ramFilter, setramFilter] = useState('')
  const [cpuCoreFilter, setcpuCoreFilter] = useState('')
  const [cameraFilter, setcameraFilter] = useState('')
  const [priceFilter, setpriceFilter] = useState('')

  const [sdCardFilterTo, setsdCardFilterTo] = useState('')
  const [ramFilterTo, setramFilterTo] = useState('')
  const [cpuCoreFilterTo, setcpuCoreFilterTo] = useState('')
  const [cameraFilterTo, setcameraFilterTo] = useState('')
  const [priceFilterTo, setpriceFilterTo] = useState('')

  const [fourG, setfourG] = useState(false)
  const [fiveG, setfiveG] = useState(false)
  const [showDropdownFilter, setshowDropdownFilter] = useState(false)
  const [showDropdownFilter2, setshowDropdownFilter2] = useState(false)
  const [showFilterModal, setshowFilterModal] = useState(false)






  this.systemFilter = { 
    brandFilterValue, setbrandFilterValue,
    ramFilterValue, setramFilterValue,
    cpuCoreFilterValue, setcpuCoreFilterValue,
    networkFilterValue, setnetworkFilterValue,
    memoryFilterValue, setmemoryFilterValue,
    cameraFilterValue, setcameraFilterValue,
    displayFilterValue, setdisplayFilterValue,
    batteryFilterValue, setbatteryFilterValue,
    colorFilterValue, setcolorFilterValue,
    systemFilterValue, setsystemFilterValue,


    showDropdownFilter, setshowDropdownFilter,
    showDropdownFilter2, setshowDropdownFilter2,
    sdCardFilter, setsdCardFilter,
    ramFilter, setramFilter,
    cpuCoreFilter, setcpuCoreFilter,
    cameraFilter, setcameraFilter,
    priceFilter, setpriceFilter,
    sdCardFilterTo, setsdCardFilterTo,
    ramFilterTo, setramFilterTo,
    cpuCoreFilterTo, setcpuCoreFilterTo,
    cameraFilterTo, setcameraFilterTo,
    priceFilterTo, setpriceFilterTo,
    fourG, setfourG,
    fiveG, setfiveG,
    showFilterModal, setshowFilterModal,
   }

}


