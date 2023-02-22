import { createCategory } from "../services/adminService"

export function adminController(p) {

  this.createCategory = async () => {
    await createCategory()
  }

  this.editCategory = async () => {
    await editCategory()
  }

  this.deleteCategory = async () => {
    await deleteCategory()
  }

  this.createChildItem = async () => {
    await createChildItem()
  }

  this.editChildItem = async () => {
    await editChildItem()
  }

  this.deleteChildItem = async () => {
    await deleteChildItem()
  }

  this.listUnAvailable = () => {
    p.useEffect(() => {
      (async () => {
        await listUnAvailable()
      })()
    }, [])
  }

  this.changeAvailable = async () => {
    await changeAvailable()
  }

  this.createNotification = async () => {
    await createNotification()
  }

  this.deleteNotification = async () => {
    await deleteNotification()
  }

  this.setAdmin = async () => {
    await setAdmin()
  }

  this.deleteAdmin = async () => {
    await deleteAdmin()
  }

  this.getAllAdmin = async () => {
    p.useEffect(() => {
      (async () => {
        await getAllAdmin()
      })()
    }, [])
  }

  this.changeMainAdmin = async () => {
    await changeMainAdmin()
  }

  this.getProposal = async () => {
    p.useEffect(() => {
      (async () => {
        await getProposal()
      })()
    }, [])
  }

  this.deleteMultiProposal = async () => {
    await deleteMultiProposal()
  }

  this.getAllAddress = async () => {
    p.useEffect(() => {
      (async () => {
        await getAllAddress()
      })()
    }, [])
  }

  this.deleteAddressForOneAdmin = async () => {
    await getAllAddress()
  }

  this.deleteAllAddress = async () => {
    await getAllAddress()
  }

  this.sendDisablePost = async () => {
    await getAllAddress()
  }


}