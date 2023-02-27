import { useState } from "react"


export function admin() {

  const [chartData, setchartData] = useState([

    { _id: '1', date: new Date('2023-1-1 22:3:0'), name: 'reza', pricePayment: 200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '1', date: new Date('2023-1-1 22:3:0'), name: 'reza', pricePayment: 200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '2', date: new Date('2023-1-1 22:3:0'), name: 'ali', pricePayment: 3200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '3', date: new Date('2023-1-1 22:3:0'), name: 'sadegh', pricePayment: 8200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '4', date: new Date('2023-1-1 22:3:0'), name: 'mohamad', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '6', date: new Date('2023-02-1 22:3:0'), name: 'mojtaba', pricePayment: 200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '7', date: new Date('2023-02-1 22:3:0'), name: 'hamed', pricePayment: 3200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '8', date: new Date('2023-02-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '9', date: new Date('2023-02-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '10', date: new Date('2023-03-1 22:3:0'), name: 'mojtaba', pricePayment: 200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '11', date: new Date('2023-03-1 22:3:0'), name: 'hamed', pricePayment: 4200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '12', date: new Date('2023-03-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '13', date: new Date('2023-03-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '14', date: new Date('2023-04-1 22:3:0'), name: 'mojtaba', pricePayment: 200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '15', date: new Date('2023-04-1 22:3:0'), name: 'hamed', pricePayment: 1200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '16', date: new Date('2023-04-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '17', date: new Date('2023-04-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },

    { _id: '18', date: new Date('2023-05-1 22:3:0'), name: 'mojtaba', pricePayment: 200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '19', date: new Date('2023-05-1 22:3:0'), name: 'hamed', pricePayment: 6200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '20', date: new Date('2023-05-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '21', date: new Date('2023-05-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '22', date: new Date('2023-06-1 22:3:0'), name: 'mojtaba', pricePayment: 200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '23', date: new Date('2023-06-1 22:3:0'), name: 'hamed', pricePayment: 200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '24', date: new Date('2023-06-1 22:3:0'), name: 'hamid', pricePayment: 200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '25', date: new Date('2023-06-1 22:3:0'), name: 'farhad', pricePayment: 200000, checkSend: 0, queueSend: 0, send: 1 },

    { _id: '26', date: new Date('2023-07-1 22:3:0'), name: 'mojtaba', pricePayment: 1200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '27', date: new Date('2023-07-1 22:3:0'), name: 'hamed', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '28', date: new Date('2023-07-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '29', date: new Date('2023-07-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '30', date: new Date('2023-08-1 22:3:0'), name: 'mojtaba', pricePayment: 2200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '31', date: new Date('2023-08-1 22:3:0'), name: 'hamed', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '32', date: new Date('2023-08-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '33', date: new Date('2023-08-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },

    { _id: '34', date: new Date('2023-09-1 22:3:0'), name: 'mojtaba', pricePayment: 3200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '35', date: new Date('2023-09-1 22:3:0'), name: 'hamed', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '36', date: new Date('2023-09-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '37', date: new Date('2023-09-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '38', date: new Date('2023-10-1 22:3:0'), name: 'mojtaba', pricePayment: 4200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '39', date: new Date('2023-10-1 22:3:0'), name: 'hamed', pricePayment: 7200000, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '40', date: new Date('2023-10-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '41', date: new Date('2023-10-1 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '42', date: new Date('2023-11-1 22:3:0'), name: 'mojtaba', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '43', date: new Date('2023-11-1 22:3:0'), name: 'hamed', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '44', date: new Date('2023-11-1 22:3:0'), name: 'hamid', pricePayment: 7200000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '45', date: new Date('2023-11-1 22:3:0'), name: 'farhad', pricePayment: 6200000, checkSend: 1, queueSend: 0, send: 0 },


    { _id: '481', date: new Date('2023-12-01 22:3:0'), name: 'hamid', pricePayment: 9200000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '491', date: new Date('2023-12-01 22:3:0'), name: 'farhad', pricePayment: 7200000, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '46', date: new Date('2023-12-02 22:3:0'), name: 'mojtaba', pricePayment: 700000, checkSend: 1, queueSend: 0, send: 1 },
    { _id: '47', date: new Date('2023-12-02 22:3:0'), name: 'hamed', pricePayment: 700000, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '48', date: new Date('2023-12-03 22:3:0'), name: 'mojtaba', pricePayment: 1000000, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '49', date: new Date('2023-12-03 22:3:0'), name: 'hamed', pricePayment: 1000000, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '49', date: new Date('2023-12-04 22:3:0'), name: 'mojtaba', pricePayment: 1500000, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '50', date: new Date('2023-12-04 22:3:0'), name: 'hamed', pricePayment: 1500000, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '53', date: new Date('2023-12-06 22:3:0'), name: 'mojtaba', pricePayment: 100, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '54', date: new Date('2023-12-06 22:3:0'), name: 'hamed', pricePayment: 600, checkSend: 1, queueSend: 0, send: 0 },

    { _id: '55', date: new Date('2023-12-07 22:3:0'), name: 'hamid', pricePayment: 200, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '56', date: new Date('2023-12-07 22:3:0'), name: 'farhad', pricePayment: 600, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '57', date: new Date('2023-12-08 22:3:0'), name: 'mojtaba', pricePayment: 300, checkSend: 0, queueSend: 1, send: 0 },
    { _id: '58', date: new Date('2023-12-08 22:3:0'), name: 'hamed', pricePayment: 300, checkSend: 1, queueSend: 0, send: 1 },

    { _id: '59', date: new Date('2023-12-09 22:3:0'), name: 'hamid', pricePayment: 40, checkSend: 0, queueSend: 0, send: 1 },
    { _id: '60', date: new Date('2023-12-09 22:3:0'), name: 'farhad', pricePayment: 40, checkSend: 0, queueSend: 0, send: 1 },

    { _id: '61', date: new Date('2023-12-10 22:3:0'), name: 'mojtaba', pricePayment: 350, checkSend: 0, queueSend: 1, send: 1 },
    { _id: '62', date: new Date('2023-12-10 22:3:0'), name: 'hamed', pricePayment: 50, checkSend: 0, queueSend: 1, send: 0 },

    { _id: '63', date: new Date('2023-12-11 22:3:0'), name: 'farhad', pricePayment: 100, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '64', date: new Date('2023-12-11 22:3:0'), name: 'farhad', pricePayment: 100, checkSend: 0, queueSend: 0, send: 1 },

    { _id: '65', date: new Date('2023-12-12 22:3:0'), name: 'farhad', pricePayment: 500, checkSend: 1, queueSend: 0, send: 1 },
    { _id: '67', date: new Date('2023-12-12 22:3:0'), name: 'farhad', pricePayment: 500, checkSend: 1, queueSend: 0, send: 0 },
    { _id: '66', date: new Date('2023-12-12 22:3:0'), name: 'farhad', pricePayment: 500, checkSend: 0, queueSend: 0, send: 1 },

    // { _id: '67', date: new Date('2023-12-13 22:3:0'), name: 'farhad', pricePayment: 100 },
    // { _id: '68', date: new Date('2023-12-13 22:3:0'), name: 'farhad', pricePayment: 70 },

    // { _id: '69', date: new Date('2023-12-14 22:3:0'), name: 'farhad', pricePayment: 100 },
    // { _id: '70', date: new Date('2023-12-14 22:3:0'), name: 'farhad', pricePayment: 270 },

    // { _id: '71', date: new Date('2023-12-15 22:3:0'), name: 'farhad', pricePayment: 20 },
    // { _id: '72', date: new Date('2023-12-15 22:3:0'), name: 'farhad', pricePayment: 20 },

    // { _id: '72', date: new Date('2023-12-016 22:3:0'), name: 'mojtaba', pricePayment: 10 },
    // { _id: '73', date: new Date('2023-12-016 22:3:0'), name: 'hamed', pricePayment: 10 },

    // { _id: '74', date: new Date('2023-12-017 22:3:0'), name: 'hamid', pricePayment: 100 },
    // { _id: '75', date: new Date('2023-12-017 22:3:0'), name: 'farhad', pricePayment: 600 },

    // { _id: '76', date: new Date('2023-12-08 22:3:0'), name: 'mojtaba', pricePayment: 2600 },
    // { _id: '77', date: new Date('2023-12-08 22:3:0'), name: 'hamed', pricePayment: 300 },

    // { _id: '78', date: new Date('2023-12-019 22:3:0'), name: 'hamid', pricePayment: 170 },
    // { _id: '79', date: new Date('2023-12-019 22:3:0'), name: 'farhad', pricePayment: 170 },

    // { _id: '80', date: new Date('2023-12-20 22:3:0'), name: 'mojtaba', pricePayment: 350 },
    // { _id: '81', date: new Date('2023-12-20 22:3:0'), name: 'hamed', pricePayment: 50 },

    // { _id: '82', date: new Date('2023-12-21 22:3:0'), name: 'farhad', pricePayment: 100 },
    // { _id: '83', date: new Date('2023-12-21 22:3:0'), name: 'farhad', pricePayment: 100 },
  ])

  const [showProgressChartDropdown, setshowProgressChartDropdown] = useState()
  //!


  //!
  const [currentSellerTable, setcurrentSellerTable] = useState([
    { _id: '1', title: 'موبایلفا', available: 1 },
    { _id: '12', title: 'موبایل دوم', available: 0 },
    { _id: '13', title: 'همراه یک', available: 1 },
    { _id: '14', title: 'همراه دوم', available: 1 }
  ])

  const [sellerTable, setsellerTable] = useState([])
  //!


  //!
  const [currentChildItemsTable, setcurrentChildItemsTable] = useState([
    { _id: '1', title: 'موبایل', price: '1000', available: 1 },
    { _id: '12', title: 'تبلت', price: '1000', available: 0 },
    { _id: '13', title: 'هدفون و هنزفیری', price: '1000', available: 1 },
    { _id: '14', title: 'لوازم جانبی', price: '1000', available: 1 },
    { _id: '15', title: 'سیمکارت', price: '1000', available: 1 }
  ])
  const [childItemsTable, setchildItemsTable] = useState([])
  const [childItemTable, setchildItemTable] = useState([])
  //!



  //!
  const [currentGroupItemTable, setcurrentGroupItemTable] = useState([
    { _id: '1', title: 'موبایل' },
    { _id: '12', title: 'تبلت' },
    { _id: '13', title: 'هدفون و هنزفیری' },
    { _id: '14', title: 'لوازم جانبی' },
    { _id: '15', title: 'سیمکارت' }
  ])

  const [groupItemTable, setGroupItemTable] = useState([])
  //!
  

  this.admin = {
    chartData, setchartData,
    showProgressChartDropdown, setshowProgressChartDropdown,
    currentSellerTable, setcurrentSellerTable,
    sellerTable, setsellerTable,
    childItemsTable, setchildItemsTable,
    childItemTable, setchildItemTable,
    currentChildItemsTable, setcurrentChildItemsTable,
    currentGroupItemTable, setcurrentGroupItemTable,
    groupItemTable, setGroupItemTable
  }
}