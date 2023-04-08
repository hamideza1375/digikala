import { useState } from "react"


export function admin() {
  const [usersLength, setusersLength] = useState('')
  const [users7DeyForChart, setusers7DeyForChart] = useState([])
  const [address7DeyForChart, setaddress7DeyForChart] = useState([])
  const [address1YearsForChart, setaddress1YearsForChart] = useState([])
  const [adminTicketBox, setadminTicketBox] = useState([])
  const [sellerTable, setsellerTable] = useState([])
  const [listUnAvailabe, setlistUnAvailabe] = useState([])
  const [allPaymentSuccessFalseAndTrue, setallPaymentSuccessFalseAndTrue] = useState([])
  const [allAddress, setallAddress] = useState([])
  const [proposalId, setproposalId] = useState([])
  const [proposal, setproposal] = useState([])
  const [allAdmin, setallAdmin] = useState([])
  const [socketIoSeen, setsocketIoSeen] = useState()
  const [ticketSeen, setticketSeen] = useState(false)
  const [category,setcategory] =useState([])
  const [childItem, setchildItem] = useState([])
  const [newSearchArray, setnewSearchArray] = useState([])
  const [newSearchSellerArray, setnewSearchSellerArray] = useState([])
  const [newSearchAddressArray, setnewSearchAddressArray] = useState([])

  this.admin = {
    newSearchAddressArray, setnewSearchAddressArray,
    newSearchSellerArray, setnewSearchSellerArray,
    childItem, setchildItem,
    newSearchArray, setnewSearchArray,
    category,setcategory,
    ticketSeen, setticketSeen,
    listUnAvailabe, setlistUnAvailabe,
    allPaymentSuccessFalseAndTrue, setallPaymentSuccessFalseAndTrue,
    allAddress, setallAddress,
    proposalId, setproposalId,
    proposal, setproposal,
    socketIoSeen, setsocketIoSeen,
    allAdmin, setallAdmin,
    adminTicketBox, setadminTicketBox,
    users7DeyForChart, setusers7DeyForChart,
    usersLength, setusersLength,
    address7DeyForChart, setaddress7DeyForChart,
    address1YearsForChart, setaddress1YearsForChart,
    sellerTable, setsellerTable,
  }
}


    // chartUserLength, setchartUserLength,
    // chartData, setchartData,
    // showProgressChartDropdown, setshowProgressChartDropdown,
    // currentSellerTable, setcurrentSellerTable,
    // childItemsTable, setchildItemsTable,
    // childItemTable, setchildItemTable,
    // currentChildItemsTable, setcurrentChildItemsTable,
    // currentGroupItemTable, setcurrentGroupItemTable,
    // groupItemTable, setGroupItemTable,


  // const [chartData, setchartData] = useState([])
  // const [chartUserLength, setchartUserLength] = useState([])
  // const [showProgressChartDropdown, setshowProgressChartDropdown] = useState()
  // const [currentSellerTable, setcurrentSellerTable] = useState([])
  // const [currentChildItemsTable, setcurrentChildItemsTable] = useState([])
  // const [childItemsTable, setchildItemsTable] = useState([])
  // const [childItemTable, setchildItemTable] = useState([])
  // const [currentGroupItemTable, setcurrentGroupItemTable] = useState([])
  // const [groupItemTable, setGroupItemTable] = useState([])