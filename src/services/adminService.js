import { axios, localhost } from '../other/utils/axios/axios'


export const createCategory = (id, data) => axios.postData(`${localhost}/createCategory/${id}`, data)
export const getCategory = (id) => axios.get(`${localhost}/getCategory/${id}`)
export const editCategory = (id, data) => axios.putData(`${localhost}/editCategory/${id}`, data)
export const getSinleCategory = (id) => axios.get(`${localhost}/getSinleCategory/${id}`)
export const deleteCategory = (id) => axios.delete(`${localhost}/deleteCategory/${id}`)
export const createChildItem = (id, data) => axios.postData(`${localhost}/createChildItem/${id}`, data)
export const editChildItem = (id, data) => axios.putData(`${localhost}/editChildItem/${id}`, data)
export const deleteChildItem = (id) => axios.delete(`${localhost}/deleteChildItem/${id}`)
export const setOffer = (id, data) => axios.post(`${localhost}/setOffer/${id}`, data)
export const listUnAvailable = () => axios.get(`${localhost}/listUnAvailable`)
export const changeAvailable = (id) => axios.post(`${localhost}/changeAvailable/${id}`)
export const createNotification = (data) => axios.post(`${localhost}/createNotification`, data)
export const deleteNotification = () => axios.delete(`${localhost}/deleteNotification`)
export const setAdmin = (data) => axios.post(`${localhost}/setAdmin`, data)
export const deleteAdmin = (phoneOrEmail) => axios.delete(`${localhost}/deleteAdmin?phoneOrEmail=${phoneOrEmail}`)
export const getAllAdmin = () => axios.get(`${localhost}/getAllAdmin`)
export const changeMainAdmin = (data) => axios.put(`${localhost}/changeMainAdmin`, data)
export const getProposal = () => axios.get(`${localhost}/getProposal`)
export const deleteMultiProposal = (data) => axios.post(`${localhost}/deleteMultiProposal`, data)
export const getAllAddress = () => axios.get(`${localhost}/getAllAddress`)
export const getAllAddressForChart = () => axios.get(`${localhost}/getAllAddressForChart`)
export const postedOrder = (id) => axios.post(`${localhost}/postedOrder/${id}`)
export const postQueue = (id) => axios.post(`${localhost}/postQueue/${id}`)
export const deleteAllAddress = () => axios.delete(`${localhost}/deleteAllAddress`)
export const getAllPaymentSuccessFalseAndTrue = () => axios.get(`${localhost}/getAllPaymentSuccessFalseAndTrue`)
export const sendDisablePost = (data) => axios.post(`${localhost}/sendDisablePost`, data)
export const sendPostPrice = (data) => axios.post(`${localhost}/sendPostPrice`, data)
export const getPostPrice = () => axios.get(`${localhost}/getPostPrice`)
export const getAllUser = () => axios.get(`${localhost}/getAllUser`)
export const adminTicketBox = () => axios.get(`${localhost}/adminTicketBox`)
export const getSocketIoSeen = () => axios.get(`${localhost}/getSocketIoSeen`)
export const createSeller = (data) => axios.post(`${localhost}/createSeller`, data)
export const getAllSellers = () => axios.get(`${localhost}/getAllSellers`)
export const setSellerAvailable = (id) => axios.put(`${localhost}/setSellerAvailable/${id}`)
export const deleteSeller = (id) => axios.delete(`${localhost}/deleteSeller/${id}`)
export const createSlider = (data) => axios.postData(`${localhost}/createSlider`, data)
