import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../other/utils/alert';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment, singleTicket, ticketAnswer, sendNewTicket, ticketBox, deleteTicket, editTicket, sendTicketAnswer, getAnswersTicket, getSingleAnswerTicket, editAnswerTicket, deleteAnswerTicket, ticketSeen, getTicketSeen, getSavedItem, savedItem, getSavedItems, removeSavedItem } from '../services/userService'
import _useEffect from './_initial';
import jwt_decode from 'jwt-decode';
import _Alert from '../other/utils/alert';
import seconder from '../other/utils/seconder';
import { Axios } from 'axios';


export function userController(p) {


  this.timerThreeMinut = async (call) => {
    const localDate = await AsyncStorage.getItem('localDate')
    const oldDate = localDate ? JSON.parse(localDate) : new Date().getTime() + (1000 * 60 * 3)
    seconder(new Date(oldDate), async ({ days, hours, minutes, seconds, interval }) => {
      call(interval)
      p.settwoMinut(minutes + ':' + seconds)
      if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) p.settwoMinut(0)
      if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) await AsyncStorage.removeItem('localDate')
    })
    await AsyncStorage.setItem('localDate', JSON.parse(oldDate))
    p.settimerToMinutTrueFalse(true)
  }


  this.deleteTimerThreeMinut = async () => {
    p.setshowActivity(true)
    await AsyncStorage.removeItem('localDate')
  }



  this.getNewCode = async () => {
    p.setshowActivity(true)
    await getNewCode()
    this.timerThreeMinut(() => { })
  }


  this.loadPageTimer = () => {
    _useEffect(() => {
      let timerInterwal
      // if (!p.timerToMinutTrueFalse) 
      this.timerThreeMinut((interval) => timerInterwal = interval)
      return () => { timerInterwal && clearInterval(timerInterwal) }
    }, [])
  }

  this.getCodeForRegister = async () => {
    p.setshowActivity(true)
    await getCodeForRegister({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, password: p.password })
    this.timerThreeMinut(() => { })
    p.navigation.navigate('GetCode', { register: true })
  }


  this.verifycodeRegister = async () => {
    p.setshowActivity(true)
    await verifycodeRegister({ code: p.code })
    this.deleteTimerThreeMinut()
    p.navigation.navigate('Login')
  }



  this.login = async () => {
    p.setshowActivity(true)
    const { data } = await login({ phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember, captcha: p.captcha })
    await AsyncStorage.removeItem("several")
    await AsyncStorage.removeItem('getMinutes')
    if (!data?.token) {
      this.timerThreeMinut(() => { })
      p.navigation.navigate('GetCode', { login: true })
    }
    else {
      await AsyncStorage.setItem('token', data.token)
      const user = jwt_decode(data.token)
      console.log('user', user);
      p.settokenValue(user)
      p.navigation.navigate('Profile')
    }
  }


  this.verifyCodeLoginForAdmin = async () => {
    p.setshowActivity(true)
    const { data } = await verifyCodeLoginForAdmin({ code: p.code, phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember })
    await AsyncStorage.setItem('token', data.token)
    const user = jwt_decode(data.token)
    this.deleteTimerThreeMinut()
    p.settokenValue(user)
    p.navigation.navigate('PanelAdmin')
  }


  this.getCodeForgetPass = async () => {
    p.setshowActivity(true)
    await getCodeForgetPass({ phoneOrEmail: p.phoneOrEmail })
    this.timerThreeMinut(() => { })
    p.navigation.navigate('GetCode', { forgetPass: true })
  }


  this.verifycodeForgetPass = async () => {
    p.setshowActivity(true)
    await verifycodeForgetPass({ code: p.code })
    p.navigation.navigate('ResetPass')
  }


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
  }


  this.resetPassword = async () => {
    p.setshowActivity(true)
    await resetPassword({ password: p.password, confirmPassword: p.confirmPassword })
    p.navigation.navigate('Login')
  }


  this.sendImageProfile = async () => {
    p.setshowActivity(true)
    const { data } = await sendImageProfile({ imageUrl: p.imageUrl })
  }


  this.getImageProfile = async () => {
    _useEffect(() => {
      (async () => {
        p.setshowActivity(true)
        const { data } = await getImageProfile()
      })()
    }, [])
  }


  this.sendProposal = async () => {
    p.setshowActivity(true)
    await sendProposal({ message: p.message })
  }


  this.getLastPayment = () => {
    _useEffect(() => {
      (async () => {
        p.setshowActivity(true)
        const { data } = await getLastPayment()
      })()
    }, [])
  }


  this.getAnswersTicket = () => {
    _useEffect(() => {
      (async () => {
        p.setshowActivity(true)
        const { data } = await getAnswersTicket(p.route.params.id)
        p.setanswersTicket(data)
      })()
    }, [])
  }


  this.sendNewTicket = async () => {
    p.setshowActivity(true)
    const { data } = await sendNewTicket({ title: p.title, message: p.message, imageUrl: p.imageUrl })
    p.setuserTicketBox(ticketBox => {
      const ticket = [...ticketBox]
      ticket.unshift(data)
      return ticket
    })
    p.navigation.navigate('Profile')
  }


  this.sendTicketAnswer = async (call) => {
    p.setshowActivity(true)
    const { data } = await sendTicketAnswer({ message: p.message, imageUrl: p.imageUrl }, p.route.params.id)
    p.setanswersTicket(singleTicket => {
      const answer = [...singleTicket]
      answer.unshift(data)
      return answer
    })
    call()
    p.setimageUrl({})
    p.setmessage('')
  }



  this.deleteAnswerTicket = async (ticketId) => {
    p.setshowActivity(true)
    await deleteAnswerTicket(p.route.params.id, ticketId)
    p.setanswersTicket(singleTicket => {
      const filter = singleTicket.filter(a => a._id !== ticketId)
      return filter
    })
  }



  this.editAnswerTicket = async (ticketId, call) => {
    p.setshowActivity(true)
    const { data } = await editAnswerTicket({ message: p.message, imageUrl: p.imageUrl }, p.route.params.id, ticketId)
    p.setanswersTicket(singleTicket => {
      let ticket = [...singleTicket]
      const findIndex = ticket.findIndex(a => a._id === ticketId)
      ticket[findIndex].message = data.message
      ticket[findIndex].imageUrl = data.imageUrl
      return ticket
    })
    call()
    p.setimageUrl({})
    p.setmessage('')
  }


  this.getSingleAnswerTicket = async (itemId) => {
    p.setshowActivity(true)
    const { data } = await getSingleAnswerTicket(p.route.params.id, itemId)
    p.setmessage(data.message)
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
            p.setshowActivity(true)
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
        p.setshowActivity(true)
        const { data } = await ticketBox()
        p.setuserTicketBox(data)
      })()
    }, [])
  }


  this.getTicketSeen = () => {
    _useEffect(() => {
      (async () => {
        p.setshowActivity(true)
        const { data } = await getTicketSeen()
        p.setticketSeen(data)
      })()
    }, [])
  }


  this.savedItem = async () => {
    p.setshowActivity(true)
    await savedItem(p.route.params.id)
  }


  this.removeSavedItem = async (itemId) => {
    p.setshowActivity(true)
    await removeSavedItem(itemId)
  }


  this.getSavedItem = async () => {
    _useEffect(() => {
      getSavedItems().then(({ data }) => {
        p.setsavedItems(data)
      })
    }, [])

  }



  this.logout = async () => {
    _useEffect(() => {
      Alert.alert(
        "خارج میشوید؟",
        "",
        [{ text: 'no', onPress: () => { p.navigation.goBack() } },
        {
          text: 'yes', onPress: async () => {
            p.settokenValue({})
            p.settoken(false)
            await AsyncStorage.removeItem("token");
            await AsyncStorage.removeItem("exp");
            p.navigation.replace("Home")
          }
        }])
    }, []);
  }

}

