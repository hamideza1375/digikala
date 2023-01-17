import { useState } from "react"


export function singleItems() {

  const [comment, setcomment] = useState([
    { _id: '1', image: require('../../../assets/images/a1.jpg') },
    { _id: '2', image: require('../../../assets/images/a2.jpg') },
    { _id: '3', image: require('../../../assets/images/a3.jpg') },
    { _id: '4', image: require('../../../assets/images/a7.jpg') },
    { _id: '5', image: require('../../../assets/images/a1.jpg') },
    { _id: '6', image: require('../../../assets/images/a2.jpg') },
    { _id: '7', image: require('../../../assets/images/a3.jpg') },
    { _id: '8', image: require('../../../assets/images/a7.jpg') },
  ])

  const [colorItem, setcolorItem] = useState([
    { _id: '1', color: 'blue' ,colorFa:'آبی' },
    { _id: '2', color: 'red' ,colorFa:'قرمز' },
    { _id: '3', color: 'silver' ,colorFa:'خاکستری' },
  ])
  
  const [evailableNumber, setevailableNumber] = useState(19)
  const [guarantee, setguarantee] = useState('18 ماه')
  const [singlePrice, setsinglePrice] = useState(3750000)
  
  const [specifications, setspecifications] = useState(
    {id:'1',ram:'16 گیگ',cpu:'سلام 8 هسته ای', memory:'64 گیگ', camera:'64 مگاپیکسل', display:'8 اینچ'}
  )

  const [allSpecifications, setallSpecifications] = useState([
    {id:'1',key:'ساخت',value:'2022'},
    {id:'2',key:'رنگ',value:'زرد'},
    {id:'3',key:'دوربین',value:'64'},
  ])

  this.showComment = {
    comment, setcomment,
    colorItem, setcolorItem,
    evailableNumber, setevailableNumber,
    guarantee, setguarantee,
    specifications, setspecifications,
    allSpecifications, setallSpecifications,
    singlePrice, setsinglePrice
  }

}


