import { changeAvailable, changeMainAdmin, createCategory, createChildItem, createNotification, deleteAddressForOneAdmin, deleteAdmin, deleteAllAddress, deleteCategory, deleteChildItem, deleteMultiProposal, deleteNotification, editCategory, editChildItem, getAllAddress, getAllAdmin, getProposal, listUnAvailable, sendDisablePost, setAdmin } from "../services/adminService"
import _useEffect from "./_initial"

export function adminController(p) {

  this.createCategory = async () => {
    await createCategory({ title: p.title, imageUrl: p.imageUrl })
  }


  this.editCategory = async () => {
    await editCategory(p.route.params.id, { title: p.title, imageUrl: p.imageUrl })
  }


  this.deleteCategory = async () => {
    await deleteCategory(p.route.params.id)
  }


  this.createChildItem = async () => {
    await createChildItem(p.route.params.id, { title: p.title, price: p.price, ram: p.ram, cpuCore: p.cpuCore, camera: p.camera, storage: p.storage, waranty: p.waranty, color: p.color, display: p.display, imageUrl: p.imageUrl, info: p.info, meanStar: p.meanStar, total: p.total })
  }


  this.editChildItem = async () => {
    await editChildItem(p.route.params.id, { title: p.title, price: p.price, ram: p.ram, cpuCore: p.cpuCore, camera: p.camera, storage: p.storage, waranty: p.waranty, color: p.color, display: p.display, imageUrl: p.imageUrl, info: p.info, meanStar: p.meanStar, total: p.total })
  }


  this.deleteChildItem = async () => {
    await deleteChildItem(p.route.params.id)
  }


  this.listUnAvailable = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await listUnAvailable()
        console.log('listUnAvailable', data);
      })()
    }, [])
  }


  this.changeAvailable = async () => {
    await changeAvailable({ available: p.available })
  }


  this.createNotification = async () => {
    await createNotification({ title: p.title, message: p.message })
  }


  this.deleteNotification = async () => {
    await deleteNotification()
  }


  this.setAdmin = async () => {
    await setAdmin({ phone: p.phone })
  }


  this.deleteAdmin = async () => {
    await deleteAdmin({ phone: p.phone })
  }


  this.getAllAdmin = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAdmin()
        // console.log('getAllAdmin', data);
      })()
    }, [])
  }


  this.changeMainAdmin = async () => {
    await changeMainAdmin({ adminPhone: p.adminPhone, newAdminPhone: p.newAdminPhone })
  }


  this.getProposal = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getProposal()
        console.log('getProposal', data);
      })()
    }, [])
  }


  this.deleteMultiProposal = async () => {
    await deleteMultiProposal({ allId: p.allId })
  }


  this.getAllAddress = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAllAddress()
        p.setchartData(data.payments)
        // console.log(data.payments  );
      })()
    }, [])
  }


  this.deleteAddressForOneAdmin = async () => {
    await deleteAddressForOneAdmin(p.route.params.id)
  }


  this.deleteAllAddress = async () => {
    await deleteAllAddress()
  }


  this.sendDisablePost = async () => {
    await sendDisablePost(p.route.params.id)
  }


  this.sendPostPrice = () => {
    sendPostPrice({ phone: p.phone }).then(() => { })
  }


  this.getPostPrice = async () => {
    _useEffect(() => {
      getPostPrice().then(({ data }) => {
        console.log('getPostPrice', data);
      })
    }, [])
  }


}