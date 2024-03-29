import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../other/utils/alert';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment, singleTicket, ticketAnswer, sendNewTicket, ticketBox, deleteTicket, editTicket, sendTicketAnswer, getAnswersTicket, getSingleAnswerTicket, editAnswerTicket, deleteAnswerTicket, ticketSeen, getTicketSeen, getSavedItem, savedItem, getSavedItems, removeSavedItem, resetSpecification, getUserSpecification, verifycodeResetSpecification, getAllProductForSeller } from '../services/userService'
import _useEffect from './_initial';
import _Alert from '../other/utils/alert';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { imagePicker } from '../other/utils/imagePicer';
import { localhost } from '../other/utils/axios/axios';
import { useNavigation } from '@react-navigation/native';
import { create } from '../other/utils/notification';
import { truncate } from '../other/utils/truncate';
import { timerThreeMinut } from '../other/utils/timerThreeMinuts';


export function userController(p) {

  this.deleteTimerThreeMinut = async () => {
    await AsyncStorage.removeItem('localDate')
  }



  this.getNewCode = async () => {
    p.setshowActivity(true)
    await getNewCode(p.route.params?.newCode)
    this.deleteTimerThreeMinut()
    timerThreeMinut(p.settwoMinut,() => { })
  }


  this.loadPageTimer = () => {
    _useEffect(() => {
      let timerInterwal
      (async () => {
        const localDate = await AsyncStorage.getItem('localDate')
        if (localDate > new Date().getTime()) {
          timerThreeMinut(p.settwoMinut,(interval) => timerInterwal = interval)
        } else p.settwoMinut(0)
      })()
      return () => { p.setcode(''); timerInterwal && clearInterval(timerInterwal) }
    }, [])
  }

  // ! Register
  this.getCodeForRegister = async () => {
    await getCodeForRegister({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, password: p.password })
    this.deleteTimerThreeMinut()
    timerThreeMinut(p.settwoMinut,() => { })
    p.navigation.navigate('GetCode', { register: 'true' })
  }


  this.verifycodeRegister = async () => {
    await verifycodeRegister({ code: p.code })
    this.deleteTimerThreeMinut()
    p.navigation.replace('Login')
  }
  // ! Register


  // ! login
  this.login = async () => {
    const { data } = await login({ phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember, captcha: p.captcha })
    await AsyncStorage.removeItem("several")
    await AsyncStorage.removeItem('getMinutes')
    if (!data?.value) {
      this.deleteTimerThreeMinut()
      timerThreeMinut(p.settwoMinut,() => { })
      p.navigation.navigate('GetCode', { login: 'true' })
    }
    else {
      await AsyncStorage.setItem('token', data.value)
      axios.defaults.headers.common["Authorization"] = data.value
      const user = jwtDecode(data.value)
      p.settokenValue(user)
      p.setphoneOrEmail('')
      p.setpassword('')
      p.setcaptcha('')
      if (p.route.params?.payment) p.navigation.replace('BeforePayment')
      else p.navigation.replace('Profile')
    }
  }


  this.verifyCodeLoginForAdmin = async () => {
    const { data } = await verifyCodeLoginForAdmin({ code: p.code, phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember })
    await AsyncStorage.setItem('token', data.value)
    axios.defaults.headers.common["Authorization"] = data.value
    const user = jwtDecode(data.value)
    p.settokenValue(user)
    p.setphoneOrEmail('')
    p.setpassword('')
    p.setcaptcha('')
    this.deleteTimerThreeMinut()
    if (p.route.params?.payment) p.navigation.replace('BeforePayment')
    else p.navigation.replace('PanelAdmin')
  }
  // ! login


  //! changePassword
  this.getCodeForgetPass = async () => {
    await getCodeForgetPass(p.route.params?.newCode, { phoneOrEmail: p.phoneOrEmail })
    this.deleteTimerThreeMinut()
    timerThreeMinut(p.settwoMinut,() => { })
    p.setphoneOrEmail('')
    p.navigation.navigate('GetCode', { forgetPass: 'true', newCode: 'true' })
  }


  this.verifycodeForgetPass = async () => {
    await verifycodeForgetPass({ code: p.code })
    this.deleteTimerThreeMinut()
    p.setcode('')
    p.navigation.replace('ResetPass')
  }


  this.resetPassword = async () => {
    await resetPassword({ password: p.password, confirmPassword: p.confirmPassword })
    p.setpassword('')
    p.setconfirmPassword('')
    p.navigation.navigate('Login')
  }
  //! changePassword


  this.verifycode = async () => {
    if (p.route.params.register) {
      this.verifycodeRegister()
    }
    else if (p.route.params.login) {
      this.verifyCodeLoginForAdmin()
    }
    else if (p.route.params.forgetPass) {
      this.verifycodeForgetPass()
    }
    else if (p.route.params.resetSpecification) {
      this.verifycodeResetSpecification()
    }
  }



  //! changeSpecification
  this.getUserSpecification = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getUserSpecification()
        p.setfullname(data.fullname)
        p.setphoneOrEmail(data.phoneOrEmail)
      })()
      return()=>{
        p.setfullname('')
        p.setphoneOrEmail('')
      }
    }, [])
  }


  this.resetSpecification = async () => {
    await resetSpecification({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, oldPassword: p.oldPassword, password: p.password })
    this.deleteTimerThreeMinut()
    timerThreeMinut(p.settwoMinut,() => { })
    p.setfullname('')
    p.setphoneOrEmail('')
    p.setpassword('')
    p.setoldPassword('')
    p.navigation.navigate('GetCode', { resetSpecification: 'true', newCode: 'true' })
  }



  this.verifycodeResetSpecification = async () => {
    const { data } = await verifycodeResetSpecification({ code: p.code })
    await AsyncStorage.setItem("token", data.value)
    axios.defaults.headers.common["Authorization"] = data.value;
    const user = jwtDecode(data.value);
    p.settokenValue(user);
    this.deleteTimerThreeMinut()
    p.setcode('')
    p.navigation.replace('Profile', {active:'yess'})
  }
  //! changeSpecification


  //! imageProfile
  this.sendImageProfile = async () => {
    imagePicker().then(async (res) => {
      const { data } = await sendImageProfile({ imageUrl: res })
      setTimeout(() => {p.$.id('card2Image')?.$({ src: `${localhost}/upload/profile/${data.imageUrl}` })}, 3000);
    })
  }


  this.getImageProfile = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getImageProfile()
        p.setimageProfile(data.imageUrl)
      })()
    }, [])
  }
  //! imageProfile


  //! sendProposal
  this.sendProposal = async () => {
    await sendProposal({ message: p.message })
    p.setmessage('')
  }
  //! sendProposal

  //! getLastPayment
  this.getLastPayment = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getLastPayment()
        p.setlastPayment(data.value);
      })()
    }, [])
  }
  //! getLastPayment


  //! Ticket
  this.getAnswersTicket = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAnswersTicket(p.route.params.id)
        p.setanswersTicket(data.value)
      })()
      return()=>p.setanswersTicket([])
    }, [])
  }


  this.sendNewTicket = async () => {
    const { data } = await sendNewTicket({ title: p.title, message: p.message, imageUrl: p.imageUrl })
    p.setuserTicketBox(ticketBox => {
      const ticket = [...ticketBox]
      ticket.unshift(data.value)
      return ticket
    })
    p.settitle('')
    p.setmessage('')
    p.setimageUrl('')
    p.navigation.navigate('Profile')
  }


  this.sendTicketAnswer = async (call) => {
    const { data } = await sendTicketAnswer({ message: p.message, imageUrl: p.imageUrl }, p.route.params.id)
    p.setanswersTicket(singleTicket => {
      const answer = [...singleTicket]
      answer.unshift(data.value)
      return answer
    })
    call()
    p.setimageUrl({})
    p.setmessage('')
  }



  this.deleteAnswerTicket = async (ticketId) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await deleteAnswerTicket(p.route.params.id, ticketId)
            p.setanswersTicket(singleTicket => {
              const filter = singleTicket.filter(a => a._id !== ticketId)
              return filter
            })
          }
        }
      ]
    )
  }



  this.editAnswerTicket = async (ticketId, call) => {
    const { data } = await editAnswerTicket({ message: p.message, imageUrl: p.imageUrl }, p.route.params.id, ticketId)
    p.setanswersTicket(singleTicket => {
      let ticket = [...singleTicket]
      const findIndex = ticket.findIndex(a => a._id === ticketId)
      ticket[findIndex].message = data.value.message
      ticket[findIndex].imageUrl = data.value.imageUrl
      return ticket
    })
    call()
    p.setimageUrl({})
    p.setmessage('')
  }


  this.getSingleAnswerTicket = async (itemId) => {
    const { data } = await getSingleAnswerTicket(p.route.params.id, itemId)
    p.setmessage(data.value.message)
  }


  this.ticketSeen = async () => {
    _useEffect(() => {
      ticketSeen(p.route.params.id).then(() => { })
      return () => ticketSeen(p.route.params.id).then(() => { })
    }, [])
  }


  this.deleteTicket = async (ticketId) => {
    _Alert.alert(
      "a", "",
      [
        { text: 'Cancel', onPress: () => { } },
        {
          text: 'OK', onPress: async () => {
            await deleteTicket(ticketId)
            p.setuserTicketBox(ticketBox => {
              const filter = ticketBox.filter(t => t._id !== ticketId)
              return filter
            })
          }
        }
      ]
    )
  }


  this.ticketBox = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await ticketBox()
        p.setuserTicketBox(data.value)
      })()
    }, [])
  }


   this.sendTicketNotifeeAndSeen = () => {
    const navigation = useNavigation()
    _useEffect(() => {
      setTimeout(async () => {
        const { data } = await getTicketSeen()
        p.setticketSeen(data.seen)
        let newNotification = await AsyncStorage.getItem('ticketNotification')
        if (data?.ticket)
          if (data.ticket.message && !p.tokenValue.isAdmin && newNotification !== data.ticket.message) {
            create('جواب تیکت جدید', truncate(data.ticket.message, 30, false), require('../other/assets/images/logo.png'),
              () => {
                window.focus();
                navigation.navigate(`TicketBox`)
              }
            )
            await AsyncStorage.setItem('ticketNotification', data.ticket.message)
          }
      }, 1000)
    }, [])
  }
  //! Ticket


  //! savedItem
  this.savedItem = async () => {
    const { data } = await savedItem(p.route.params.id)
    p.setbookmark(data.value)
  }


  this.removeSavedItem = async (itemId) => {
    _Alert.alert(
      "برای تایید کلیک کنید",
      "",
      [
        { text: "cancel", onPress: () => { } },
        {
          text: "OK", onPress: async () => {
            await removeSavedItem(itemId)
            p.setbookmark(false)
          }
        }
      ]
    )
  }


  this.getSavedItem = async () => {
    _useEffect(() => {
      getSavedItems().then(({ data }) => {
        p.setsavedItems(data.value)
      })
    }, [])
  }
  //! savedItem


  //! getAllProductForSeller
  this.getAllProductForSeller = () => {
    _useEffect(() => {
      getAllProductForSeller().then(({ data }) => {
        p.setsellerItems(data.value)
        p.setnewSearchSellerArray(data.value)
        console.log(data.value);
      })
    }, [])
  }
  //! getAllProductForSeller



  this.logout = async () => {
    _useEffect(() => {
      Alert.alert(
        "خارج میشوید؟",
        "",
        [{ text: 'no', onPress: () => { p.navigation.goBack() } },
        {
          text: 'yes', onPress: async () => {
            await AsyncStorage.removeItem("token");
            p.settokenValue({})
            axios.defaults.headers.common["Authorization"] = ''
            p.navigation.replace("Home")
          }
        }])
    }, []);
  }

}

