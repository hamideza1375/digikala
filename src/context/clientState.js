import { useState } from "react"


export function client() {

  //!
  const [logoUrl, setlogoUrl] = useState(require('../other/assets/images/logo.png'))

  this.logo = { logoUrl, setlogoUrl }


  const [slider, setslider] = useState([
    { _id: '1', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', image: require('../other/assets/images/a2.jpg') },
  ])



  const [group, setgroup] = useState([
    { _id: '1', title: 'موبایل', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'تبلت', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'هدفون و هنزفیری', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'لوازم جانبی', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'سیمکارت', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
  ])


  const [category, setcategory] = useState([
    { _id: '1', title: 'موبایل', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'تبلت', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'هدفون و هنزفیری', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'لوازم جانبی', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'سیمکارت', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
  ])


  const [childItem, setchildItem] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])

  const [childTablet, setchildTablet] = useState([
    { _id: '1', title: 'tablet1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'tablet2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'tablet3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'tablet4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'tablet5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'tablet6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'tablet7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'tablet8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'tablet9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'tablet10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [childheadphone, setchildheadphone] = useState([
    { _id: '1', title: 'headphon1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'headphon2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'headphon3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'headphon4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'headphon5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'headphon6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'headphon7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'headphon8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'headphon9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'headphon10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [childmunition, setchildmunition] = useState([
    { _id: '1', title: 'glass1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'glass2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'glass3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'glass4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'glass5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'glass6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'glass7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'glass8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'glass9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'glass10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [childSimCard, setchildSimCard] = useState([
    { _id: '1', title: 'simkart1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'simkart2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'simkart3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'simkart4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'simkart5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'simkart6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'simkart7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'simkart8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'simkart9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'simkart10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [populars, setpopulars] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [similar, setsimilar] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])



  const [offers, setoffers] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])


  const [array, setarray] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../other/assets/images/a2.jpg') },
  ])



  //!




  //!
  const [currentTable, setcurrentTable] = useState([
    { _id: '1', title: 'aaa', price: "1a", info: '1b', available: 1 },
    { _id: '2', title: 'bbbb', price: "2334", info: '222i', available: 0 },
    { _id: '3', title: 'cccc', price: "333", info: '333i', available: 1 },
    { _id: '4', title: 'ddd', price: "444", info: '444i', available: 1 }
  ])
  const [$food, set$food] = useState([])

  const [sendPrice, setsendPrice] = useState(15000)
  const [sendPostPrice, setsendPostPrice] = useState(15000)
  //!


  //!
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
  //!


  //!
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
  //!


  //!

  const [comment, setcomment] = useState([
    { _id: '1', image: require('../other/assets/images/a1.jpg') },
    { _id: '2', image: require('../other/assets/images/a2.jpg') },
    { _id: '3', image: require('../other/assets/images/a3.jpg') },
    { _id: '4', image: require('../other/assets/images/a7.jpg') },
    { _id: '5', image: require('../other/assets/images/a1.jpg') },
    { _id: '6', image: require('../other/assets/images/a2.jpg') },
    { _id: '7', image: require('../other/assets/images/a3.jpg') },
    { _id: '8', image: require('../other/assets/images/a7.jpg') },
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

  //!


  //!

  //!


  //!

  //!


  this.client = {

    slider, setslider,
    group, setgroup,
    category, setcategory,
    childItem, setchildItem,
    childTablet, setchildTablet,
    childheadphone, setchildheadphone,
    childmunition, setchildmunition,
    childSimCard, setchildSimCard,
    populars, setpopulars,
    similar, setsimilar,
    offers, setoffers,
    array, setarray,

    currentTable, setcurrentTable,
    $food, set$food,
    sendPrice, setsendPrice,
    sendPostPrice, setsendPostPrice,

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

    comment, setcomment,
    colorItem, setcolorItem,
    evailableNumber, setevailableNumber,
    guarantee, setguarantee,
    specifications, setspecifications,
    allSpecifications, setallSpecifications,
    singlePrice, setsinglePrice,
  }
}