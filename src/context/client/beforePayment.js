import { useState } from "react"


export function beforePayment() {

  const [currentTable,setcurrentTable] = useState([
    { _id: '1', title: 'aaa', price: "1a", info: '1b', available: 1 },
    { _id: '2', title: 'bbbb', price: "2334", info: '222i', available: 0 },
    { _id: '3', title: 'cccc', price: "333", info: '333i', available: 1 },
    { _id: '4', title: 'ddd', price: "444", info: '444i', available: 1 }
  ])
  const [$food, set$food] = useState([])

  const [sendPrice, setsendPrice] = useState(15000)


  this.table = { 
    currentTable, setcurrentTable,
    $food, set$food,
    sendPrice, setsendPrice

   }
}