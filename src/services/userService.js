import {axios, localhost} from '../other/utils/axios/axios'

export const getCodeForRegister = (data) => axios.post(`${localhost}/getCodeForRegister`, data)
export const getNewCode = () => axios.post(`${localhost}/getNewCode`)
export const verifycodeRegister = (data) => axios.post(`${localhost}/verifycodeRegister`, data)
export const login = (data) => axios.post(`${localhost}/login`, data)
export const verifyCodeLoginForAdmin = (data) => axios.post(`${localhost}/verifyCodeLoginForAdmin`, data)
export const getCodeForgetPass = (data) => axios.post(`${localhost}/getCodeForgetPass`, data)
export const verifycodeForgetPass = (data) => axios.post(`${localhost}/verifycodeForgetPass`, data)
export const resetPassword = (data) => axios.post(`${localhost}/resetPassword`, data)
export const sendImageProfile = (data) => axios.postData(`${localhost}/sendImageProfile`, data)
export const getImageProfile = (data) => axios.post(`${localhost}/getImageProfile`, data)
export const sendProposal = () => axios.get(`${localhost}/sendProposal` )
export const getLastPayment = () => axios.get(`${localhost}/getLastPayment` )
