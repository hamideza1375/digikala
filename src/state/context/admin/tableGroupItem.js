import { useState } from "react"


export function groupItemTable() {

  const [currentGroupItemTable, setcurrentGroupItemTable] = useState([
    { _id: '1', title: 'موبایل' },
    { _id: '12', title: 'تبلت' },
    { _id: '13', title: 'هدفون و هنزفیری' },
    { _id: '14', title: 'لوازم جانبی' },
    { _id: '15', title: 'سیمکارت' }
  ])

  const [groupItemTable, setGroupItemTable] = useState([])

  this.groupItemTable = {
    currentGroupItemTable, setcurrentGroupItemTable,
    groupItemTable, setGroupItemTable
  }
}