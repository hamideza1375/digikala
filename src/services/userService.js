import {axios, localhost} from '../other/utils/axios/axios'

export const sendCodeRegister = (data) => axios.post(`${localhost}/sendCodeRegister`, data)
export const verifycodeRegister = (data) => axios.post(`${localhost}/verifycodeRegister`, data)
export const login = (data) => axios.post(`${localhost}/login`, data)
export const verifyCodeLoginForAdmin = (data) => axios.post(`${localhost}/verifyCodeLoginForAdmin`, data)
export const sendCodeForgetPass = (data) => axios.post(`${localhost}/sendCodeForgetPass`, data)
export const verifycodeForgetPass = (data) => axios.post(`${localhost}/verifycodeForgetPass`, data)
export const resetPassword = (data) => axios.post(`${localhost}/resetPassword`, data)
export const sendImageProfile = (data) => axios.post(`${localhost}/sendImageProfile`, data)
export const getImageProfile = (data) => axios.post(`${localhost}/getImageProfile`, data)
export const sendProposal = () => axios.get(`${localhost}/sendProposal` )
export const getLastPayment = () => axios.get(`${localhost}/getLastPayment` )
