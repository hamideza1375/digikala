import { createSlider, getCategory, changeAvailable, changeMainAdmin, createCategory, createChildItem, createNotification, deleteAddressForOneAdmin, deleteAdmin, deleteAllAddress, deleteCategory, deleteChildItem, deleteMultiProposal, deleteNotification, editCategory, editChildItem, getAllAddress, getAllAdmin, getProposal, listUnAvailable, sendDisablePost, setAdmin, getAllUser, adminTicketBox, getSocketIoSeen, createSeller, getAllSellers, setSellerAvailable, deleteSeller, getSinleCategory, postedOrder, getAllPaymentSuccessFalseAndTrue, postQueue, getAllAddressForChart } from "../services/adminService"
import { getSingleItem } from "../services/clientService"
import _useEffect from "./_initial"

export function adminController(p) {

  this.createSeller = async () => {
    await createSeller({ brand: p.input2, phone: p.phone })
  }


  this.getAllSellers = async () => {
    _useEffect(() => {
      getAllSellers().then(({ data }) => {
        p.setcurrentSellerTable(data)
      })
    }, [])
  }

  this.deleteSeller = async (id) => {
    await deleteSeller(id)
    p.setcurrentSellerTable((curentSeller) => curentSeller.filter(s => s._id !== id))
  }

  this.setSellerAvailable = async (id) => {
    const { data } = await setSellerAvailable(id)
    p.setcurrentSellerTable((curentSeller) => {
      const findIndex = curentSeller.findIndex(s => s._id === id)
      curentSeller[findIndex].available = data
      return curentSeller
    })
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
    await deleteCategory(id)
    p.setcategory(category => category.filter(c => c._id !== id))
  }


  this.createChildItem = async () => {
    await createChildItem(p.route.params.id, {
      title: p.title, price: p.price, imageUrl: p.imageUrl, info: p.info, ram: p.input3, cpuCore: p.input4, camera: p.input5, storage: p.input6, warranty: p.input7, color: p.input8.split("-"), display: p.input9, availableCount: p.input10
    })
  }


  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        p.settitle(data.singleItem.title)
        p.setprice(data.singleItem.price)
        p.setimageUrl({ name: data.singleItem.imageUrl })
        p.setinfo(data.singleItem.info)
        p.setinput3(data.singleItem.ram)
        p.setinput4(data.singleItem.cpuCore)
        p.setinput5(data.singleItem.camera)
        p.setinput6(data.singleItem.storage)
        p.setinput7(data.singleItem.warranty)
        p.setinput8(data.singleItem.color.toString().replace(/,/gi, "-"))
        p.setinput9(data.singleItem.display)
        p.setinput10(data.singleItem.availableCount)
      })()
    }, [])
  }


  this.editChildItem = async () => {
    await editChildItem(p.route.params.id, { title: p.title, price: p.price, imageUrl: p.imageUrl, info: p.info, ram: p.input3, cpuCore: p.input4, camera: p.input5, storage: p.input6, warranty: p.input7, color: p.input8.split("-"), display: p.input9, availableCount: p.input10 })
  }


  this.deleteChildItem = async (id) => {
    await deleteChildItem(id)
    p.setchildItem((childItem) => childItem.filter(c => c._id !== id))
  }



  this.changeAvailable = async (id) => {
    const { data } = await changeAvailable(id)
    p.setchildItem((childItem) => {
      const findIndex = childItem.findIndex(s => s._id === id)
      if (findIndex !== -1)
        childItem[findIndex].available = data
      return childItem
    })

    p.setlistUnAvailabe((listUnAvailabe) => listUnAvailabe.filter(s => s._id !== id))
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
    await deleteNotification()
  }


  this.setAdmin = async () => {
    await setAdmin({ phoneOrEmail: p.phoneOrEmail })
  }


  this.deleteAdmin = async () => {
    await deleteAdmin(p.phoneOrEmail)
    p.setallAdmin(admin =>
      admin.filter(a => a.phoneOrEmail !== p.phoneOrEmail)
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
    await changeMainAdmin({ adminPhone: p.adminPhone, newAdminPhone: p.newAdminPhone })
  }


  this.getProposal = async () => {
    _useEffect(() => {
      getProposal().then(({ data }) => {
        p.setproposal(data)
      })
    }, [])
  }


  this.deleteMultiProposal = async () => {
    await deleteMultiProposal({ proposalId: p.proposalId })
  }


  this.getAllAddress = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAddress()
        p.setallAddress(data.payments)
      })()
    }, [])
  }


  this.getAllAddressForChart = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAddressForChart()
        p.setchartData(data)
      })()
    }, [])
  }


  this.postedOrder = async (id) => {
    await postedOrder(id)
    p.setallAddress(addres => addres.filter(a => a._id !== id))
  }


  this.postQueue = async (id) => {
    const { data } = await postQueue(id)
    p.setallAddress(allAddres => {
      const index = allAddres.findIndex(a => a._id === id)
      allAddres[index].queueSend = data
      return allAddres
    })
  }


  this.deleteAllAddress = async () => {
    await deleteAllAddress()
  }


  this.getAllPaymentSuccessFalseAndTrue = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllPaymentSuccessFalseAndTrue()
        p.setallPaymentSuccessFalseAndTrue(data.payments)
      })()
    }, [])
  }



  this.sendDisablePost = async () => {
    await sendDisablePost(p.route.params.id)
  }


  this.sendPostPrice = () => {
    sendPostPrice({ phoneOrEmail: p.phoneOrEmail }).then(() => { })
  }


  this.getPostPrice = async () => {
    _useEffect(() => {
      getPostPrice().then(({ data }) => {
      })
    }, [])
  }


  this.getAllUser = async () => {
    _useEffect(() => {
      getAllUser().then(({ data }) => {
        p.setchartUserLength(data.allUsers)
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