import { createSlider, getCategory, changeAvailable, changeMainAdmin, createCategory, createChildItem, createNotification, deleteAddressForOneAdmin, deleteAdmin, deleteAllAddress, deleteCategory, deleteChildItem, deleteMultiProposal, deleteNotification, editCategory, editChildItem, getAllAddress, getAllAdmin, getProposal, listUnAvailable, sendDisablePost, setAdmin, getAllUser, adminTicketBox, getSocketIoSeen, createSeller, getAllSellers, setSellerAvailable, deleteSeller, getSinleCategory, postedOrder, getAllPaymentSuccessFalseAndTrue, postQueue, getAllAddressForChart, setOffer, getUserForChart, getDataForChart, getChildItems, getChildItemsTable, getPostPrice, sendPostPrice } from "../services/adminService"
import { getSingleItem } from "../services/clientService"
import _useEffect from "./_initial"
import seconder from '../other/utils/seconder'
import _Alert from "../other/utils/alert"


export function adminController(p) {

  this.createSeller = async () => {
    await createSeller({ brand: p.input2, phone: p.phone })
  }


  this.getAllSellers = async () => {
    _useEffect(() => {
      getAllSellers().then(({ data }) => {
        p.setsellerTable(data)
      })
    }, [])
  }

  this.deleteSeller = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteSeller(id)
            p.setsellerTable((curentSeller) => curentSeller.filter(s => s._id !== id))
          }
        }
      ]
    )
  }

  this.setSellerAvailable = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await setSellerAvailable(id)
            p.setsellerTable((curentSeller) => {
              const findIndex = curentSeller.findIndex(s => s._id === id)
              curentSeller[findIndex].available = data
              return curentSeller
            })
          }
        }
      ]
    )
  }

  this.getCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getCategory(p.route.params.id)
        p.setcategory(data.category)
      })()
    }, [])
  }

  this.createCategory = async () => {
    await createCategory(p.route.params.id, { title: p.title, imageUrl: p.imageUrl })
  }


  this.getSinleCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSinleCategory(p.route.params.id)
        p.settitle(data.title)
        p.setimageUrl({ name: data.imageUrl })
      })()
    }, [])
  }


  this.editCategory = async () => {
    await editCategory(p.route.params.id, { title: p.title, imageUrl: p.imageUrl })
  }


  this.deleteCategory = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteCategory(id)
            p.setcategory(category => category.filter(c => c._id !== id))
          }
        }
      ]
    )
  }


  this.getChildItemsTable = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getChildItemsTable(p.route.params.id, p.route.params.sellerId)
        p.setchildItem(data.childItems.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }

  this.createChildItem = async () => {
    await createChildItem(p.route.params.id, p.route.params.sellerId, {
      image1: p.image1,
      image2: p.image2,
      image3: p.image3,
      image4: p.image4,
      offerTime: p.offerTime ? p.offerTime : 0,
      offerValue: p.offerValue ? p.offerValue : 0,
      title: p.title, price: p.price, info: p.info, ram: p.input3, cpuCore: p.input4, camera: p.input5, storage: p.input6, warranty: p.input7, color: JSON.stringify(p.input8), display: p.input9, availableCount: p.input10
    })
  }


  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        console.log(data.singleItem.color);
        p.settitle(data.singleItem.title)
        p.setprice(data.singleItem.price)
        p.setimage1({ name: data.singleItem.imageUrl1 })
        p.setimage2({ name: data.singleItem.imageUrl2 })
        p.setimage3({ name: data.singleItem.imageUrl3 })
        p.setimage4({ name: data.singleItem.imageUrl4 })
        p.setinfo(data.singleItem.info)
        p.setinput3(data.singleItem.ram)
        p.setinput4(data.singleItem.cpuCore)
        p.setinput5(data.singleItem.camera)
        p.setinput6(data.singleItem.storage)
        p.setinput7(data.singleItem.warranty)
        p.setinput8(data.singleItem.color)
        p.setinput9(data.singleItem.display)
        p.setinput10(data.singleItem.availableCount)
      })()
    }, [])
  }





  this.editChildItem = async () => {
    await editChildItem(p.route.params.id, {
      image1: p.image1,
      image2: p.image2,
      image3: p.image3,
      image4: p.image4,
      offerTime: p.offerTime ? p.offerTime : 0,
      offerValue: p.offerValue ? p.offerValue : 0,
      title: p.title, price: p.price, info: p.info, ram: p.input3, cpuCore: p.input4, camera: p.input5, storage: p.input6, warranty: p.input7, color: JSON.stringify(p.input8), display: p.input9, availableCount: p.input10
    })
  }


  this.setOffer = async () => {
    await setOffer(p.route.params.id, { offerTime: p.offerTime ? p.offerTime : 0, offerValue: p.offerValue ? p.offerValue : 0 })
  }



  this.deleteChildItem = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteChildItem(id)
            p.setchildItem((childItem) => childItem.filter(c => c._id !== id))
          }
        }
      ]
    )
  }



  this.changeAvailable = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await changeAvailable(id)
            p.setchildItem((childItem) => {
              const findIndex = childItem.findIndex(s => s._id === id)
              if (findIndex !== -1)
                childItem[findIndex].available = data
              return childItem
            })
            p.setlistUnAvailabe((listUnAvailabe) => listUnAvailabe.filter(s => s._id !== id))
          }
        }
      ]
    )
  }


  this.listUnAvailable = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await listUnAvailable()
        p.setlistUnAvailabe(data)
      })()
    }, [])
  }



  this.createNotification = async () => {
    await createNotification({ title: p.title, message: p.message })
  }



  this.deleteNotification = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteNotification()
          }
        }
      ]
    )
  }


  this.setAdmin = async () => {
    await setAdmin({ phoneOrEmail: p.phoneOrEmail })
  }


  this.deleteAdmin = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteAdmin(p.phoneOrEmail)
            p.setallAdmin(admin =>
              admin.filter(a => a.phoneOrEmail !== p.phoneOrEmail)
            )
          }
        }
      ]
    )
  }


  this.getAllAdmin = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAdmin()
        p.setallAdmin(data)
      })()
    }, [])
  }


  this.changeMainAdmin = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await changeMainAdmin({ adminPhone: p.adminPhone, newAdminPhone: p.newAdminPhone })
          }
        }
      ]
    )
  }


  this.getProposal = async () => {
    _useEffect(() => {
      getProposal().then(({ data }) => {
        p.setproposal(data)
      })
    }, [])
  }


  this.deleteMultiProposal = async () => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteMultiProposal({ proposalId: p.proposalId })
          }
        }
      ]
    )
  }


  this.getAllAddress = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAddress()
        p.setallAddress(data.payments)
      })()
    }, [])
  }


  this.getDataForChart = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getDataForChart()
        p.setaddress7DeyForChart(data.getAddress7DeyForChart)
        p.setusers7DeyForChart(data.getUsers7DeyForChart)
        p.setaddress1YearsForChart(data.getAddress1YearsForChart)
        p.setusersLength(data.getUsersLength)
      })()
    }, [])
  }


  this.postedOrder = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await postedOrder(id)
            p.setallAddress(addres => addres.filter(a => a._id !== id))
          }
        }
      ]
    )

  }


  this.postQueue = async (id) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            const { data } = await postQueue(id)
            p.setallAddress(allAddres => {
              const index = allAddres.findIndex(a => a._id === id)
              allAddres[index].queueSend = data
              return allAddres
            })
          }
        }
      ]
    )
  }





  this.getAllPaymentSuccessFalseAndTrue = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllPaymentSuccessFalseAndTrue()
        p.setallPaymentSuccessFalseAndTrue(data.payments)
      })()
    }, [])
  }



  // this.sendDisablePost = async () => {
  //   await sendDisablePost(p.route.params.id)
  // }


  this.sendPostPrice = () => {
    sendPostPrice({ price: p.price }).then(() => { })
  }


  this.getPostPrice = async () => {
    _useEffect(() => {
      getPostPrice().then(({ data }) => {
        p.setprice(data.price)
      })
    }, [])
  }



  this.adminTicketBox = async () => {
    _useEffect(() => {
      adminTicketBox().then(({ data }) => {
        p.setadminTicketBox(data.tickets)
      })
    }, [])
  }


  this.getSocketIoSeen = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSocketIoSeen()
        p.setsocketIoSeen(data)
      })()
    }, [])
  }



  this.createSlider = () => {
    createSlider({
      sliderImage1: p.sliderImage1,
      sliderImage2: p.sliderImage2,
      sliderImage3: p.sliderImage3,
      sliderImage4: p.sliderImage4,
      sliderImage5: p.sliderImage5,
      sliderImage6: p.sliderImage6,
    }).then(() => { })
  }

}