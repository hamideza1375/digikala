import {sendCodeRegister, verifycodeRegister, login, verifyCodeLoginForAdmin,  sendCodeForgetPass, verifycodeForgetPass, resetPassword, sendImageProfile, getImageProfile, sendProposal, getLastPayment} from '../services/userService'

export function userController(p) {


  this.sendCodeRegister = async () => {
    await sendCodeRegister({ phone: null })
  }


  this.verifycodeRegister = async () => {
    await verifycodeRegister({ code: null, fullname: '', phone: null, password: '' })

  }


  this.login = async () => {
    await login({ phone: null, password: '', remember: '' })

  }


  this.verifyCodeLoginForAdmin = async () => {
    await verifyCodeLoginForAdmin({ code: null, phone: null, password: '', remember: '' })
  }


  this.sendCodeForgetPass = async () => {
    await sendCodeForgetPass({ phone: null })
  }


  this.verifycodeForgetPass = async () => {
    await verifycodeForgetPass({ code: null })
  }


  this.resetPassword = async () => {
    await resetPassword({ password: '', confirmPassword: '' })
  }


  this.sendImageProfile = async () => {
    const { data } = await sendImageProfile({ imageUrl: '' })
    console.log(data);
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
    await sendProposal({ message: '' })
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

