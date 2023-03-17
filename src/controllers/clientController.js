import { confirmPayment, createComment, deleteComment, editComment, geocode, getCategory, getChildItemComments, getChildItems, getSingleComment, getSingleItem, getSlider, reverse } from "../services/clientService";
import _useEffect from "./_initial";

export function clientController(p) {

  this.getCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getCategory()
        p.setcategory(data.category)
        // console.log('getCategory', data);
      })()
    }, [])
  }


  this.getChildItems = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getChildItems(p.route.params.id)
        p.setchildItem(data.childItems)
        // console.log('getChildItems', data.childItems);
      })()
    }, [])
  }


  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        p.setsingleItem(data.singleItem)
      })()
    }, [])
  }

  this.createComment = async () => {
    await createComment(p.route.params.id, { fullname: p.fullname, message: p.message, allStar: p.allStar })
  }

  this.getChildItemComments = async () => {
    const { data } = await getChildItemComments(p.route.params.id)
    console.log('getChildItemComments', data);
  }


  this.getSingleComment = async () => {
    const { data } = await getSingleComment(p.route.params.id, p.route.params.commentid)
    console.log('getSingleComment', data);
  }


  this.editComment = async () => {
    await editComment(p.route.params.id, p.route.params.commentid, { fullname: p.fullname, message: p.message, allStar: p.allStar })
  }


  this.deleteComment = async () => {
    await deleteComment(p.route.params.id, p.route.params.commentid)
  }


  this.reverse = async () => {
    await reverse({ lat: p.latlng.lat, lng: p.latlng.lng })
  }


  this.geocode = async () => {
    await geocode({ loc: p.loc })
  }


  this.confirmPayment = async () => {
    await confirmPayment({ floor: p.floor, plaque: p.plaque, address: p.address, origin: {}, latlng: p.latlng, price: p.price, description: p.description, childItemsTitle: p.childItemsTitle, childItemsId: p.childItemsId })
  }


}






