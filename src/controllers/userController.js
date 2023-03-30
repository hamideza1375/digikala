import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../other/utils/alert';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment, singleTicket, ticketAnswer, sendNewTicket, ticketBox, deleteTicket, editTicket, sendTicketAnswer, getAnswersTicket, getSingleAnswerTicket, editAnswerTicket, deleteAnswerTicket, ticketSeen, getTicketSeen, getSavedItem, savedItem, getSavedItems, removeSavedItem, resetSpecification, getUserSpecification, verifycodeResetSpecification } from '../services/userService'
import _useEffect from './_initial';
import _Alert from '../other/utils/alert';
import seconder from '../other/utils/seconder';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


export function userController(p) {


  this.timerThreeMinut = async (call) => {
    const localDate = await AsyncStorage.getItem('localDate')
    const oldDate = localDate && localDate > new Date().getTime() ? JSON.parse(localDate) : new Date().getTime() + (1000 * 60 * 3)
    seconder(new Date(oldDate), async ({ days, hours, minutes, seconds, interval }) => {
      call(interval)
      p.settwoMinut(minutes + ':' + seconds)
      if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) setTimeout(() => { p.settwoMinut(0) }, 2000);
      if ((!minutes && !seconds) || (minutes <= 0 && seconds <= 0)) await AsyncStorage.removeItem('localDate')
    })
    await AsyncStorage.setItem('localDate', JSON.parse(oldDate))
    p.settimerToMinutTrueFalse(true)
  }


  this.deleteTimerThreeMinut = async () => {
    await AsyncStorage.removeItem('localDate')
  }



  this.getNewCode = async () => {
    p.setshowActivity(true)
    await getNewCode(p.route.params.newCode)
    this.deleteTimerThreeMinut()
    this.timerThreeMinut(() => { })
  }


  this.loadPageTimer = () => {
    _useEffect(() => {
      let timerInterwal
      (async () => {
        const localDate = await AsyncStorage.getItem('localDate')
        if (localDate > new Date().getTime()) {
          this.timerThreeMinut((interval) => timerInterwal = interval)
        } else p.settwoMinut(0)
      })()
      return () => { timerInterwal && clearInterval(timerInterwal) }
    }, [])
  }

  this.getCodeForRegister = async () => {
    await getCodeForRegister({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, password: p.password })
    this.deleteTimerThreeMinut()
    this.timerThreeMinut(() => { })
    p.navigation.navigate('GetCode', { register: true })
  }


  this.verifycodeRegister = async () => {
    await verifycodeRegister({ code: p.code })
    this.deleteTimerThreeMinut()
    p.navigation.navigate('Login')
  }



  this.login = async () => {
    const { data } = await login({ phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember, captcha: p.captcha })
    await AsyncStorage.removeItem("several")
    await AsyncStorage.removeItem('getMinutes')
    if (!data?.token) {
      this.deleteTimerThreeMinut()
      this.timerThreeMinut(() => { })
      p.navigation.navigate('GetCode', { login: true })
    }
    else {
      await AsyncStorage.setItem('token', data.token)
      axios.defaults.headers.common["Authorization"] = data.token
      const user = jwtDecode(data.token)
      p.settokenValue(user)
      p.navigation.replace('Profile')
    }
  }


  this.verifyCodeLoginForAdmin = async () => {
    const { data } = await verifyCodeLoginForAdmin({ code: p.code, phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember })
    await AsyncStorage.setItem('token', data.token)
    axios.defaults.headers.common["Authorization"] = data.token
    const user = jwtDecode(data.token)
    p.settokenValue(user)
    this.deleteTimerThreeMinut()
    p.navigation.replace('PanelAdmin')
  }


  this.getCodeForgetPass = async () => {
    await getCodeForgetPass({ phoneOrEmail: p.phoneOrEmail })
    this.deleteTimerThreeMinut()
    this.timerThreeMinut(() => { })
    p.navigation.navigate('GetCode', { forgetPass: true, newCode: true })
  }


  this.verifycodeForgetPass = async () => {
    await verifycodeForgetPass({ code: p.code })
    this.deleteTimerThreeMinut()
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
    else if (p.route.params.resetSpecification) {
      this.verifycodeResetSpecification()
    }
  }


  this.resetPassword = async () => {
    await resetPassword({ password: p.password, confirmPassword: p.confirmPassword })
    p.navigation.navigate('Login')
  }


  this.getUserSpecification = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getUserSpecification()
        p.setfullname(data.fullname)
        p.setphoneOrEmail(data.phoneOrEmail)
      })()
    }, [])
  }


  this.resetSpecification = async () => {
    await resetSpecification({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, oldPassword: p.oldPassword, password: p.password })
    this.deleteTimerThreeMinut()
    this.timerThreeMinut(() => { })
    p.navigation.navigate('GetCode', { resetSpecification: true, newCode: true })
  }



  this.verifycodeResetSpecification = async () => {
    const { data } = await verifycodeResetSpecification({ code: p.code })
    await AsyncStorage.setItem("token", data.token)
    axios.defaults.headers.common["Authorization"] = data.token;
    const user = jwtDecode(data.token);
    p.settokenValue(user);
    this.deleteTimerThreeMinut()
    p.navigation.navigate('Profile')
  }



  this.sendImageProfile = async () => {
    const { data } = await sendImageProfile({ imageUrl: p.imageUrl })
  }


  this.getImageProfile = async () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getImageProfile()
      })()
    }, [])
  }


  this.sendProposal = async () => {
    await sendProposal({ message: p.message })
  }


  this.getLastPayment = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getLastPayment()
      })()
    }, [])
  }


  this.getAnswersTicket = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getAnswersTicket(p.route.params.id)
        p.setanswersTicket(data)
      })()
    }, [])
  }


  this.sendNewTicket = async () => {
    const { data } = await sendNewTicket({ title: p.title, message: p.message, imageUrl: p.imageUrl })
    p.setuserTicketBox(ticketBox => {
      const ticket = [...ticketBox]
      ticket.unshift(data)
      return ticket
    })
    p.navigation.navigate('Profile')
  }


  this.sendTicketAnswer = async (call) => {
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
    await deleteAnswerTicket(p.route.params.id, ticketId)
    p.setanswersTicket(singleTicket => {
      const filter = singleTicket.filter(a => a._id !== ticketId)
      return filter
    })
  }



  this.editAnswerTicket = async (ticketId, call) => {
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
        p.setuserTicketBox(data)
      })()
    }, [])
  }


  this.getTicketSeen = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await getTicketSeen()
        p.setticketSeen(data)
      })()
    }, [])
  }


  this.savedItem = async () => {
    const { data } = await savedItem(p.route.params.id)
    p.setbookmark(data)
  }


  this.removeSavedItem = async (itemId) => {
    await removeSavedItem(itemId)
    p.setbookmark(false)
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
            p.settoken(false)
            await AsyncStorage.removeItem("token");
            p.settokenValue({})
            axios.defaults.headers.common["Authorization"] = ''
            p.navigation.replace("Home")
          }
        }])
    }, []);
  }

}

