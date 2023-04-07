import { axios, localhost } from '../other/utils/axios/axios'


export const createCategory = (id, body) => axios.postData(`${localhost}/createCategory/${id}`, body)
export const getCategory = (id) => axios.get(`${localhost}/getCategory/${id}`)
export const editCategory = (id, body) => axios.putData(`${localhost}/editCategory/${id}`, body)
export const getSinleCategory = (id) => axios.get(`${localhost}/getSinleCategory/${id}`)
export const deleteCategory = (id) => axios.delete(`${localhost}/deleteCategory/${id}`)
export const getChildItemsTable = (id, sellerId) => axios.get(`${localhost}/getChildItemsTable/${id}?sellerId=${sellerId}`)
export const createChildItem = (id, sellerId, body) => axios.postData(`${localhost}/createChildItem/${id}?sellerId=${sellerId}`, body)
export const editChildItem = (id, body) => axios.putData(`${localhost}/editChildItem/${id}`, body)
export const deleteChildItem = (id) => axios.delete(`${localhost}/deleteChildItem/${id}`)
export const setOffer = (id, body) => axios.post(`${localhost}/setOffer/${id}`, body)
export const listUnAvailable = () => axios.get(`${localhost}/listUnAvailable`)
export const changeAvailable = (id) => axios.post(`${localhost}/changeAvailable/${id}`)
export const createNotification = (body) => axios.post(`${localhost}/createNotification`, body)
export const deleteNotification = () => axios.delete(`${localhost}/deleteNotification`)
export const setAdmin = (body) => axios.post(`${localhost}/setAdmin`, body)
export const deleteAdmin = (phoneOrEmail) => axios.delete(`${localhost}/deleteAdmin?phoneOrEmail=${phoneOrEmail}`)
export const getAllAdmin = () => axios.get(`${localhost}/getAllAdmin`)
export const changeMainAdmin = (body) => axios.put(`${localhost}/changeMainAdmin`, body)
export const getProposal = () => axios.get(`${localhost}/getProposal`)
export const deleteMultiProposal = (body) => axios.post(`${localhost}/deleteMultiProposal`, body)
export const getAllAddress = () => axios.get(`${localhost}/getAllAddress`)
export const getQuitsForSeller = () => axios.get(`${localhost}/getQuitsForSeller`)
export const getDataForChart = () => axios.get(`${localhost}/getDataForChart`)
export const postedOrder = (id) => axios.post(`${localhost}/postedOrder/${id}`)
export const postQueue = (id) => axios.post(`${localhost}/postQueue/${id}`)
export const deleteAllAddress = () => axios.delete(`${localhost}/deleteAllAddress`)
export const getAllPaymentSuccessFalseAndTrue = () => axios.get(`${localhost}/getAllPaymentSuccessFalseAndTrue`)
export const sendPostPrice = (body) => axios.post(`${localhost}/sendPostPrice`, body)
export const getPostPrice = () => axios.get(`${localhost}/getPostPrice`)
export const adminTicketBox = () => axios.get(`${localhost}/adminTicketBox`)
export const getSocketIoSeen = () => axios.get(`${localhost}/getSocketIoSeen`)
export const createSeller = (body) => axios.post(`${localhost}/createSeller`, body)
export const getAllSellers = () => axios.get(`${localhost}/getAllSellers`)
export const setSellerAvailable = (id) => axios.put(`${localhost}/setSellerAvailable/${id}`)
export const deleteSeller = (id) => axios.delete(`${localhost}/deleteSeller/${id}`)
export const createSlider = (body) => axios.postData(`${localhost}/createSlider`, body)
