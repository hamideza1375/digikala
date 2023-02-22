import { useState } from "react"


export function showHome() {

  const [logoUrl, setlogoUrl] = useState(require('../../other/assets/images/logo.png'))

  this.logo = {logoUrl, setlogoUrl}


  const [slider, setslider] = useState([
    { _id: '1', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', image: require('../../other/assets/images/a2.jpg') },
  ])



  const [group, setgroup] = useState([
    { _id: '1', title: 'موبایل', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'تبلت', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'هدفون و هنزفیری', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'لوازم جانبی', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'سیمکارت', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
  ])


  const [childItem, setchildItem] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])

  const [childTablet, setchildTablet] = useState([
    { _id: '1', title: 'tablet1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'tablet2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'tablet3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'tablet4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'tablet5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'tablet6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'tablet7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'tablet8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'tablet9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'tablet10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [childheadphone, setchildheadphone] = useState([
    { _id: '1', title: 'headphon1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'headphon2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'headphon3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'headphon4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'headphon5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'headphon6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'headphon7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'headphon8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'headphon9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'headphon10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [childmunition, setchildmunition] = useState([
    { _id: '1', title: 'glass1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'glass2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'glass3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'glass4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'glass5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'glass6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'glass7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'glass8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'glass9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'glass10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [childSimCard, setchildSimCard] = useState([
    { _id: '1', title: 'simkart1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'simkart2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'simkart3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'simkart4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'simkart5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'simkart6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'simkart7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'simkart8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'simkart9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'simkart10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [populars, setpopulars] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [similar, setsimilar] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])



  const [offers, setoffers] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])


  const [array, setarray] = useState([
    { _id: '1', title: 'phone1', price: 2000000, sdCard: 16, ram: 3, cpuCore: 4, camera: 13, network: '4G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '2', title: 'phone2', price: 4500000, sdCard: 64, ram: 6, cpuCore: 8, camera: 64, network: '5G', availabel: 30, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '3', title: 'phone3', price: 4800000, sdCard: 128, ram: 4, cpuCore: 6, camera: 32, network: '5G', availabel: 40, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '4', title: 'phone4', price: 3500000, sdCard: 64, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 150, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '5', title: 'phone5', price: 2800000, sdCard: 32, ram: 3, cpuCore: 4, camera: 16, network: '4G', availabel: 10, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '6', title: 'phone6', price: 4000000, sdCard: 128, ram: 4, cpuCore: 8, camera: 64, network: '5G', availabel: 50, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
    { _id: '7', title: 'phone7', price: 900000, sdCard: 4, ram: 1, cpuCore: 2, camera: 5, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a3.jpg') },
    { _id: '8', title: 'phone8', price: 8500000, sdCard: 128, ram: 8, cpuCore: 8, camera: 108, network: '5G', availabel: 8, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a7.jpg') },
    { _id: '9', title: 'phone9', price: 2000000, sdCard: 32, ram: 3, cpuCore: 4, camera: 32, network: '4G', availabel: 1, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a1.jpg') },
    { _id: '10', title: 'phone10', price: 1000000, sdCard: 8, ram: 2, cpuCore: 2, camera: 8, network: '3G', availabel: 0, color: ['red', 'blue'], guarantee: 'guarantee ', image: require('../../other/assets/images/a2.jpg') },
  ])





  this.items = {
    slider, setslider,
    group, setgroup,
    childItem, setchildItem,
    childTablet, setchildTablet,
    childheadphone, setchildheadphone,
    childmunition, setchildmunition,
    childSimCard, setchildSimCard,
    populars, setpopulars,
    similar, setsimilar,
    offers, setoffers,
    array, setarray,
  }


}




