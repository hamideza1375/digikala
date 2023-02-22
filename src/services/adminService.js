import { axios, localhost } from '../other/utils/axios/axios'


export const createCategory = (data) => axios.post(`${localhost}/deletefood`, data)
export const editCategory = (id, data) => axios.put(`${localhost}/editCategory/${id}`, data)
export const deleteCategory = (id) => axios.delete(`${localhost}/deleteCategory/${id}`)
export const createChildItem = (id, data) => axios.post(`${localhost}/createChildItem/${id}`, data)
export const editChildItem = (id, data) => axios.put(`${localhost}/editChildItem/${id}`, data)
export const deleteChildItem = (id) => axios.delete(`${localhost}/deleteChildItem/${id}`)
export const listUnAvailable = () => axios.get(`${localhost}/listUnAvailable`)
export const changeAvailable = (data) => axios.post(`${localhost}/changeAvailable/${id}`, data)
export const createNotification = (data) => axios.post(`${localhost}/createNotification`, data)
export const deleteNotification = () => axios.delete(`${localhost}/deleteNotification`)
export const setAdmin = (data) => axios.post(`${localhost}/setAdmin`, data)
export const deleteAdmin = (data, phone) => axios.delete(`${localhost}/deleteAdmin?phone=${phone}`, data)
export const getAllAdmin = () => axios.get(`${localhost}/getAllAdmin`)
export const changeMainAdmin = (data) => axios.put(`${localhost}/changeMainAdmin`, data)
export const getProposal = () => axios.get(`${localhost}/getProposal`)
export const deleteMultiProposal = () => axios.delete(`${localhost}/deleteMultiProposal`)
export const getAllAddress = () => axios.get(`${localhost}/getAllAddress`)
export const deleteAddressForOneAdmin = () => axios.delete(`${localhost}/deleteAddressForOneAdmin`)
export const deleteAllAddress = () => axios.delete(`${localhost}/deleteAllAddress`)
export const sendDisablePost = (data) => axios.post(`${localhost}/sendDisablePost`, data)