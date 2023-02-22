import { useNavigation } from '@react-navigation/native'
import Axios from 'axios'

export const initialController = (p) => {
  const navigation = useNavigation()
  p.useEffect(() => {
    var toastOK = () => { p.toast.success('موفق آمیز', '✅', 4000) }
    var toast500 = () => { p.toast.error('خطا', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = (error) => { p.toast.error('خطا', error); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }

    Axios.interceptors.response.use(function (response) {
      if (response.config.method !== 'get' &&
        navigation.getCurrentRoute()?.name !== 'Payment' && navigation.getCurrentRoute()?.name !== 'Home' && navigation.getCurrentRoute()?.name !== 'FinallFoodPayment' && navigation.getCurrentRoute()?.name !== 'ChildFood' && navigation.getCurrentRoute()?.name !== 'Location'  && (response.status === 200 || response.status === 201)) toastOK()
        p.setshowActivity(false)
        return response
    }, function (error) {
      if (error?.response?.status) {
        if (error.response.status > 400 && error.response.status <= 500) { toast500() };
        if (error.response.status === 400) { toast400(error.response.data) };
        p.setshowActivity(false)
      } return Promise.reject(error);
    });

    //! localStorage token
    (async () => {
      p.localStorage.getItem("token").then((token) => {
        if (token) {
          const user = p.jwt_decode(token)
          p.settokenValue(user)
        }
      })
    })()
  }, [])

  p.Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    p.setwidth(width); p.setheight(height)
  })


    // p.useMemo(() => {
  //   setTimeout(() => {
  //     p.setSplash(false)
  //   }, 1000)
  // }, [])



}
