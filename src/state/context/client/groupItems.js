import { useState } from "react"


export function childItems() {

  const [brandFilterValue, setbrandFilterValue] = useState([
    { _id: '1', name: 'همه' },
    { _id: '2', name: 'سامسونگ' },
    { _id: '3', name: 'آیفون' },
    { _id: '4', name: 'شیایومی' },
    { _id: '5', name: 'هوآوی' },
    { _id: '6', name: 'نوکیا' },
  ])


  this.systemFilter = { 
    brandFilterValue, setbrandFilterValue,
   }
}