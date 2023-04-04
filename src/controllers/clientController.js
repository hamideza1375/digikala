import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { BackHandler, Platform, ToastAndroid } from "react-native";
import _Alert from "../other/utils/alert";
import { addBuyBasket, commentDisLike, commentLike, confirmPayment, createComment, createCommentAnswer, deleteComment, deleteCommentAnswer, disLikeAnswer, editComment, editCommentAnswer, geocode, getCategory, getChildItemComments, getChildItems, getOffers, getPopulars, getSimilars, getSingleComment, getSingleCommentAnswer, getSingleItem, getSlider, likeAnswer, offers, reverse } from "../services/clientService";
import { getSingleSavedItems } from "../services/userService";
import _useEffect from "./_initial";

export function clientController(p) {


  this.getSlider = () => {
    // _useEffect(() => {
    //   getSlider().then(({ data }) => {
    //     data && p.setslider(Object.values(data.value))
    //   })
    // }, [])
  }

  this.getCategory = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getCategory()
        p.setcategory(data.value)
      })()
    }, [])
  }


  this.getChildItems = () => {
    useEffect(() => {
      (async () => {
        const { data } = await getChildItems(p.route.params.id)
        p.setchildItem(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
        p.setnewSearchArray(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })));
      })()
    }, [p.route.params.id])
  }


  this.getSingleItem = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSingleItem(p.route.params.id)
        p.setsingleItem(data.value)
      })()
      return () => p.setsingleItem({})
    }, [p.route.params])
  }


  this.getOffers = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getOffers()
        p.setoffers(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }


  this.getSimilars = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getSimilars(p.route.params.id)
        p.setsimilar(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [p.route.params])
  }


  this.getPopulars = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getPopulars()
        p.setpopulars(data.value.map(item => ({ ...item, imageUrl: item.imageUrl1 })))
      })()
    }, [])
  }


  this.createComment = async () => {
    const { data } = await createComment(p.route.params.id, { message: p.message, fiveStar: p.fiveStar })
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      _comment.push(data.value);
      return _comment
    })
  }

  this.createCommentAnswer = async () => {
    const { data } = await createCommentAnswer(p.route.params.commentId,
      { message: p.message, to: JSON.parse(p.route.params.userphoneOrEmail).map((u, i) => u.slice(0, u.lastIndexOf(i))).join('') })
    p.childItemComment.length && p.setchildItemComment(comment => {
      const _comment = [...comment]
      const index = _comment.findIndex((c) => c._id === p.route.params.commentId)
      _comment[index].answer.push(data.value)
      return _comment
    })
  }

  this.getChildItemComments = async () => {
    useEffect(() => {
      getChildItemComments(p.route.params.id).then(({ data }) => {
        p.setchildItemComment(data.value)
      })
    }, [p.route.params])
  }


  this.getSingleComment = async () => {
    _useEffect(() => {
      if (!p.route.params.commentId) {
        getSingleComment(p.route.params.id).then(({ data }) => {
          p.setmessage(data.value.message);
          p.setfiveStar(data.value.fiveStar);
        })
      } else {
        getSingleCommentAnswer(p.route.params.id, p.route.params.commentId).then(({ data }) => {
          p.setmessage(data.value.message);
          p.setfiveStar(data.value.fiveStar);
        })
      }
    }, [])
  }


  this.editComment = async () => {
    const { data } = await editComment(p.route.params.id, { message: p.message, fiveStar: p.fiveStar })
    p.childItemComment.length && p.setchildItemComment(comment => {
      try {
        const _comment = [...comment]
        const findIndex = _comment.findIndex(c => c._id === p.route.params.id)
        _comment[findIndex].message = data.value.message
        _comment[findIndex].fiveStar = data.value.fiveStar
        return _comment
      } catch (err) { console.error('catch',err);}
    })
  }


  this.editCommentAnswer = async () => {
    await editCommentAnswer(p.route.params.id, p.route.params.commentId, { message: p.message })
    p.childItemComment.length && p.setchildItemComment(comment => {
      const _comment = [...comment]
      const index = _comment.findIndex((c) => c._id === p.route.params.id)
      const answer = _comment[index].answer
      const answerIndex = answer.findIndex((a) => (a._id === p.route.params.commentId))
      answer[answerIndex].message = p.message
      return _comment
    })
  }


  this.deleteComment = async (commentid) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteComment(commentid)
            p.setchildItemComment(comment => comment.filter(c => c._id !== commentid))
          }
        }
      ]
    )
  }


  this.deleteCommentAnswer = async (id, commentId) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteCommentAnswer(id, commentId)
            p.childItemComment.length && p.setchildItemComment(comment => {
              const _comment = [...comment]
              const index = _comment.findIndex((c) => c._id === id)
              const filter = _comment[index].answer.filter((a) => (a._id !== commentId))
              _comment[index].answer = filter
              return _comment
            })
          }
        }
      ]
    )

  }


  this.like = async (commentid) => {
    const { data } = await commentLike(commentid)
    p.setchildItemComment(comment => {
      let findIndex = comment.findIndex(c => c._id === commentid)
      comment[findIndex].likeCount = data.value
      return comment
    })
  }



  this.disLike = async (commentid) => {
    const { data } = await commentDisLike(commentid)
    p.setchildItemComment(comment => {
      let findIndex = comment.findIndex(c => c._id === commentid)
      comment[findIndex].disLikeCount = data.value
      return comment
    })
  }


  this.likeAnswer = async (id, commentId) => {
    const { data } = await likeAnswer(id, commentId)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      const findIndex = _comment.findIndex(c => c._id === id)
      const answer = _comment[findIndex].answer
      const answerIndex = answer.findIndex((a) => a._id === commentId)
      _comment[findIndex].answer[answerIndex].likeCount = data.value
      return _comment
    })
  }


  this.disLikeAnswer = async (id, commentId) => {
    const { data } = await disLikeAnswer(id, commentId)
    p.setchildItemComment(comment => {
      const _comment = [...comment]
      const findIndex = _comment.findIndex(c => c._id === id)
      const answer = _comment[findIndex].answer
      const answerIndex = answer.findIndex((a) => a._id === commentId)
      _comment[findIndex].answer[answerIndex].disLikeCount = data.value
      return _comment
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
      getSingleSavedItems(p.route.params.id).then(({ data }) => { p.setbookmark(data.value) })
      return () => p.setbookmark(false)
    }, [p.route.params])
  }


  this.setColor = () => {

    _useEffect(() => {
      p.singleItem.title && p.setcolor((color) => {
        const c = { ...color }
        c[p.route.params.id] = color[p.route.params.id] ? color[p.route.params.id] : p.singleItem.color.find(c => c.value > 0).color
        return c
      })
    }, [p.singleItem])
  }


  this.confirmPayment = async (city) => {
    const { data } = await confirmPayment({
      productBasket: p.productBasket,
      phone: p.phone,
      unit: p.unit,
      plaque: p.plaque,
      postalCode: p.postalCode,
      address: `${p.state}, ${city ? city : p.City}, ${p.address}`,
      latlng: p.latlng,
      description: p.description
    })

    const address = await AsyncStorage.getItem('address')


    if (address !== p.address) {
      if (p.route.name === 'Location') {
        _Alert.alert(
          "آدرس جدید در مرورگر ذخیره شود؟",
          "",
          [
            { text: 'cancel', onPress: () => { } },
            {
              text: 'OK', onPress: () => {
                AsyncStorage.setItem('postalCode', p.postalCode).then(() => { })
                AsyncStorage.setItem('address', p.address).then(() => { })
                AsyncStorage.setItem('state', p.state).then(() => { })
                AsyncStorage.setItem('City', p.City).then(() => { })

              }
            }
          ]
        )
      }
    }
    p.navigation.replace('FramePayment', { url: data.value })
  }




  this.backHandler = () => {
    if (Platform.OS === 'android') {
      p.useEffect(() => {
        let current = 0
        BackHandler.addEventListener("hardwareBackPress", () => {
          if (p.route.name === 'Home' && p.navigation?.getState()?.index === 0) {
            current += 1
            if (current === 2) { BackHandler.exitApp(); return true }
            ToastAndroid.show("برای خروج دوبار لمس کنید", ToastAndroid.SHORT)
            setTimeout(() => {
              current = 0
            }, 1000);
            return true
          }
        })
      }, [])
    }
    else return null
    return () => Platform.OS === 'android' && BackHandler.removeEventListener('hardwareBackPress')
  }



  // countMap.forEach((item, index) => ())
  // countMap.keys()
  // countMap.values()
  // countMap.entries()
  // console.log(Object.keys(number));
  // console.log(Object.values(number));
  // console.log(Object.entries(number)); //! object change to array

}






