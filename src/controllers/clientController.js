import { confirmPayment, createComment, deleteComment, editComment, geocode, getCategory, getChildItemComments, getChildItems, getSingleComment, getSingleItem, reverse } from "../services/clientService";

export function clientController(p) {

  this.getCategory = () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await getCategory()
        // console.log('getCategory', data);
      })()
    }, [])
  }

  this.getChildItems = () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await getChildItems(p.route.params.id)
        console.log('getCategory', data);
      })()
    }, [])
  }


  this.getSingleItem = () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        console.log('getCategory', data);
      })()
    }, [])
  }

  this.createComment = async () => {
    await createComment(p.route.params.id, { fullname: '', message: '', allStar: null })
  }

  this.getChildItemComments = async () => {
    const { data } = await getChildItemComments(p.route.params.id)
    console.log(data);

  }

  this.getSingleComment = async () => {
    const { data } = await getSingleComment(p.route.params.id, p.route.params.commentid)
  }

  
  this.editComment = async () => {
    await editComment(p.route.params.id, p.route.params.commentid, { fullname: '', message: '', allStar: '' })
  }

  this.deleteComment = async () => {
    await deleteComment(p.route.params.id, p.route.params.commentid)
  }


  this.reverse = async () => {
    await reverse({ lat: '', lng: '' })
  }

  this.geocode = async () => {
    await geocode({ loc: '' })
  }

  this.confirmPayment = async() => {
    await confirmPayment({ floor: '', plaque:'', address:'', origin:{}, price:'', description:'', childItemsTitle:'', childItemsId:[] })
  }

}

