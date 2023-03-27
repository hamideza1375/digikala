import { addBuyBasket, commentDisLike, commentLike, confirmPayment, createComment, deleteComment, editComment, geocode, getCategory, getChildItemComments, getChildItems, getOffers, getPopulars, getSimilars, getSingleComment, getSingleItem, getSlider, offers, reverse } from "../services/clientService";
import { getSingleSavedItems } from "../services/userService";
import _useEffect from "./_initial";

export function clientController(p) {


  this.getCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getCategory()
        p.setcategory(data.category)
      })()
    }, [])
  }


  this.getChildItems = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getChildItems(p.route.params.id)
        p.setchildItem(data.childItems.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }


  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        p.setsingleItem(data.singleItem)
      })()
      return () => p.setsingleItem({})
    }, [p.route.params])
  }


  this.getOffers = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getOffers()
        p.setoffers(data.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }


  this.getSimilars = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSimilars(p.route.params.id)
        p.setsimilar(data.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [p.route.params])
  }


  this.getPopulars = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getPopulars()
        p.setpopulars(data.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }


  this.createComment = async () => {
    const { data } = await createComment(p.route.params.id, { message: p.message, fiveStar: p.fiveStar })
    p.setchildItemComment(comment => {
      comment.push(data.comment)
      return comment
    })
  }

  this.getChildItemComments = async () => {
    _useEffect(() => {
      getChildItemComments(p.route.params.id).then(({ data }) => {
        p.setchildItemComment(data.comment)
      })
    }, [p.route.params])
  }


  this.getSingleComment = async () => {
    _useEffect(() => {
      getSingleComment(p.route.params.commentid).then(({ data }) => {
        p.setmessage(data.comment.message);
        p.setfiveStar(data.comment.fiveStar);
      })
    }, [])
  }


  this.editComment = async () => {
    await editComment(p.route.params.id, p.route.params.commentid, { message: p.message, fiveStar: p.fiveStar })
    p.childItemComment.length && p.setchildItemComment(comment => {
      const findIndex = comment.findIndex(c => c._id === p.route.params.commentid)
      if (findIndex) {
        comment[findIndex].message = p.message
        comment[findIndex].fiveStar = p.fiveStar
      }
      return comment
    })
  }


  this.deleteComment = async (commentid) => {
    await deleteComment(commentid)
    p.setchildItemComment(comment => comment.filter(c => c._id !== commentid))
  }



  this.like = async (commentid) => {
    const { data } = await commentLike(commentid)
    p.setchildItemComment(comment => {
      let findIndex = comment.findIndex(c => c._id === commentid)
      comment[findIndex].likeCount = data
      return comment
    })
  }


  this.disLike = async (commentid) => {
    const { data } = await commentDisLike(commentid)
    p.setchildItemComment(comment => {
      let findIndex = comment.findIndex(c => c._id === commentid)
      comment[findIndex].disLikeCount = data
      return comment
    })
  }


  this.reverse = async () => {
    await reverse({ lat: p.latlng.lat, lng: p.latlng.lng })
  }


  this.geocode = async () => {
    await geocode({ loc: p.loc })
  }


  this.getSingleSavedItems = () => {
    _useEffect(() => {
      getSingleSavedItems(p.route.params.id).then(({ data }) => { p.setbookmark(data) })
      return () => p.setbookmark(false)
    }, [p.route.params])
  }


  this.setColor = () => {
    _useEffect(() => {
      p.singleItem.title && p.setcolor((color) => {
        const c = { ...color }
        c[p.route.params.id] = color[p.route.params.id] ? color[p.route.params.id] : p.singleItem.color[0]
        return c
      })
    }, [p.singleItem])
  }


  this.confirmPayment = async () => {
    p.setshowActivity(true)
    const { data } = await confirmPayment({
      productBasket: p.productBasket,
      phone: p.phone,
      unit: p.unit,
      plaque: p.plaque,
      postalCode: p.postalCode,
      address: `${p.state}, ${p.City}, ${p.address}`,
      latlng: p.latlng,
      description: p.description
    })
    p.navigation.replace('FramePayment', { url: data })
  }




  // countMap.forEach((item, index) => ())
  // countMap.keys()
  // countMap.values()
  // countMap.entries()
  // console.log(Object.keys(number));
  // console.log(Object.values(number));
  // console.log(Object.entries(number)); //! object change to array

}






