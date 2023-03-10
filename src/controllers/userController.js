import AsyncStorage from '@react-native-async-storage/async-storage';
import Alert from '../other/utils/alert';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment, singleTicket, ticketAnswer, sendNewTicket, ticketBox } from '../services/userService'
import _useEffect from './_initial';
import jwt_decode from 'jwt-decode';


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
      if (mins == 0 && second2 <= 1 ) clearInterval(interval)
      if (mins == 0 && second2 <= 1 ) p.settwoMinut(0)
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


  this.singleTicket = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await singleTicket(p.route.params.id)
        p.setsingleTicket(data.singleTicket)
      })()
    }, [])
  }


  this.ticketAnswer = async () => {
    const { data } = await ticketAnswer({ message: p.message, imageUrl: p.imageUrl }, p.route.params.id)
  }


  this.sendNewTicket = async () => {
    const { data } = await sendNewTicket({ title: p.title, message: p.message, imageUrl: p.imageUrl })
    p.navigation.navigate('Profile')
  }

  this.ticketBox = () => {
    _useEffect(() => {
      (async () => {
        const { data } = await ticketBox()
        p.setuserTicketBox(data.tickets)
      })()
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

