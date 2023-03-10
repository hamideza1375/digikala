import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../other/utils/alert';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment, singleTicket, ticketAnswer, sendNewTicket, ticketBox, deleteTicket, editTicket, sendTicketAnswer, getAnswersTicket, getSingleAnswerTicket, editAnswerTicket, deleteAnswerTicket, ticketSeen } from '../services/userService'
import _useEffect from './_initial';
import jwt_decode from 'jwt-decode';
import _Alert from '../other/utils/alert';


export function userController(p) {


  this.timerTwoMinut = async () => {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    let countDown = new Date(new Date().getTime() + (1000 * 60 * 3))
    const interval = setInterval(minutsInterval, 1000);

    function minutsInterval() {
      let nowDate = new Date().getTime(),
        distance = countDown - nowDate;
      let second2 = Math.floor((distance % (minute)) / second);
      let mins = Math.floor((distance % (hour)) / (minute));
      p.settwoMinut(mins + ':' + second2)
      if (mins == 0 && second2 <= 1) clearInterval(interval)
      if (mins == 0 && second2 <= 1) p.settwoMinut(0)
    }
    p.settimerToMinutTrueFalse(true)
  }



  this.getNewCode = async () => {
    await getNewCode()
    this.timerTwoMinut()
  }


  this.loadPageTimer = () => {
    _useEffect(() => {
      if (!p.timerToMinutTrueFalse)
        this.timerTwoMinut()
    }, [])
  }

  this.getCodeForRegister = async () => {
    await getCodeForRegister({ fullname: p.fullname, phoneOrEmail: p.phoneOrEmail, password: p.password })
    this.timerTwoMinut()
    p.navigation.navigate('GetCode', { register: true })
  }


  this.verifycodeRegister = async () => {
    await verifycodeRegister({ code: p.code })
    p.navigation.navigate('Login')
  }



  this.login = async () => {
    const { data } = await login({ phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember, captcha: p.captcha })
    await AsyncStorage.removeItem("several")
    await AsyncStorage.removeItem('getMinutes')
    if (!data?.token) {
      this.timerTwoMinut()
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
    const { data } = await verifyCodeLoginForAdmin({ code: p.code, phoneOrEmail: p.phoneOrEmail, password: p.password, remember: p.remember })
    await AsyncStorage.setItem('token', data.token)
    const user = jwt_decode(data.token)
    p.settokenValue(user)
    p.navigation.navigate('Profile')
  }


  this.getCodeForgetPass = async () => {
    await getCodeForgetPass({ phoneOrEmail: p.phoneOrEmail })
    this.timerTwoMinut()
    p.navigation.navigate('GetCode', { forgetPass: true })
  }


  this.verifycodeForgetPass = async () => {
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
    await resetPassword({ password: p.password, confirmPassword: p.confirmPassword })
    p.navigation.navigate('Login')
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
      answer.push(data)
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


  this.logout = async () => {
    _useEffect(() => {
      Alert.alert(
        "???????? ??????????????",
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

