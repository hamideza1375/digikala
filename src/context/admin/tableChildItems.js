import { useState } from "react"

export function childItemTable() {

  const [currentChildItemsTable, setcurrentChildItemsTable] = useState([
    { _id: '1', title: 'موبایل', price: '1000', available: 1 },
    { _id: '12', title: 'تبلت', price: '1000', available: 0 },
    { _id: '13', title: 'هدفون و هنزفیری', price: '1000', available: 1 },
    { _id: '14', title: 'لوازم جانبی', price: '1000', available: 1 },
    { _id: '15', title: 'سیمکارت', price: '1000', available: 1 }
  ])
  const [childItemsTable, setchildItemsTable] = useState([])
  const [childItemTable, setchildItemTable] = useState([])


  this.childItemTable = {
    childItemsTable, setchildItemsTable,
    childItemTable, setchildItemTable,
    currentChildItemsTable, setcurrentChildItemsTable
  }
}