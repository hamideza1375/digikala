import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCodeForRegister, getNewCode, verifycodeRegister, login, verifyCodeLoginForAdmin, getCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment } from '../services/userService'


var interval
export function userController(p) {


  this.timerTwoMinut = async () => {
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    let countDown = new Date(new Date().getTime() + (1000 * 60 * 2))
    if(interval) clearInterval(interval)
    interval = setInterval(() => {
      let nowDate = new Date().getTime(),
        distance = countDown - nowDate;
      p.settwoMinut((twoMinut) => {
        let second2 = Math.floor((distance % (minute)) / second);
        let mins = Math.floor((distance % (hour)) / (minute));
        if (twoMinut?.split(':')[0] == 0 && twoMinut?.split(':')[1] == 1) clearInterval(interval)
        return mins + ':' + second2
      })
    }, 1000);
    p.settimerToMinutTrueFalse(true)
  }



  this.getNewCode = async () => {
    await getNewCode()
    this.timerTwoMinut()
  }


  this.loadPageTimer = () => {
    p.useEffect(() => {
      if (!p.timerToMinutTrueFalse)
      this.timerTwoMinut()
    }, [])

  }

  this.getCodeForRegister = async () => {
    await getCodeForRegister({ fullname: p.fullname, phone: p.phone, password: p.password })
    this.timerTwoMinut()
    p.navigation.navigate('GetCode', { register: true })
  }


  this.verifycodeRegister = async () => {
    await verifycodeRegister({ code: p.code })
    p.navigation.navigate('Login')
  }



  this.login = async () => {
    const { data } = await login({ phone: p.phone, password: p.password, remember: p.remember, captcha: p.captcha })
    await AsyncStorage.removeItem("several")
    await AsyncStorage.removeItem('getMinutes')
    if (!data?.token) {
      this.timerTwoMinut()
      p.navigation.navigate('GetCode', { login: true })
    }
    else {
      await AsyncStorage.setItem('token', data.token)
      p.navigation.navigate('Profile')
    }
  }


  this.verifyCodeLoginForAdmin = async () => {
    const { data } = await verifyCodeLoginForAdmin({ code: p.code, phone: p.phone, password: p.password, remember: p.remember })
    await AsyncStorage.setItem('token', data.token)
    p.navigation.navigate('Profile')
    p.navigation.navigate('Profile')
  }


  this.getCodeForgetPass = async () => {
    await getCodeForgetPass({ phone: p.phone })
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
    console.log('sendImageProfile', data);
  }


  this.getImageProfile = async () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await getImageProfile()
        console.log('getLastPayment', data);
      })()
    }, [])
  }


  this.sendProposal = async () => {
    await sendProposal({ message: p.message })
  }


  this.getLastPayment = () => {
    p.useEffect(() => {
      (async () => {
        const { data } = await getLastPayment()
        console.log('getLastPayment', data);
      })()
    }, [])
  }

}

