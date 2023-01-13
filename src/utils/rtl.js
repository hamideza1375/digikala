import { I18nManager } from 'react-native';

const rtl =()=>{
I18nManager.forceRTL(true)
I18nManager.allowRTL(true)
I18nManager.swapLeftAndRightInRTL(false)
}

export default rtl