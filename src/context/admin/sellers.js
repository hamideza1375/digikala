import { useState } from "react"


export function sellerTable() {

  const [currentSellerTable, setcurrentSellerTable] = useState([
    { _id: '1', title: 'موبایلفا', available: 1 },
    { _id: '12', title: 'موبایل دوم', available: 0 },
    { _id: '13', title: 'همراه یک', available: 1 },
    { _id: '14', title: 'همراه دوم', available: 1 }
  ])

  const [sellerTable, setsellerTable] = useState([])


  this.sellerTable = {
    currentSellerTable, setcurrentSellerTable,
    sellerTable, setsellerTable
  }
}