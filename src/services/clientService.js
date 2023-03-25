import { axios, localhost } from '../other/utils/axios/axios'


export const getSlider = async () => axios.get(`${localhost}/getSlider`)
export const getCategory = async () => axios.get(`${localhost}/getCategory`)
export const getChildItems = async (id) => axios.get(`${localhost}/getChildItems/${id}`)
export const getSingleItem = async (id) => axios.get(`${localhost}/getSingleItem/${id}`)
export const getOffers = async () => axios.get(`${localhost}/getOffers`)
export const getSimilars = async (id) => axios.get(`${localhost}/getSimilars/${id}`)
export const getPopulars = async () => axios.get(`${localhost}/getPopulars`)
export const createComment = async (id, body) => axios.post(`${localhost}/createComment/${id}`, body)
export const getChildItemComments = async (id) => axios.get(`${localhost}/getChildItemComments/${id}`)
export const editComment = async (id, commentid, body) => axios.put(`${localhost}/editComment/${id}?commentid=${commentid}`, body)
export const deleteComment = async (id) => axios.delete(`${localhost}/deleteComment/${id}`)
export const getSingleComment = async (id) => axios.get(`${localhost}/getSingleComment/${id}`)
export const getNotification = async () => axios.get(`${localhost}/getNotification`)
export const reverse = async (body) => axios.post(`${localhost}/reverse`, body)
export const geocode = async (body) => axios.post(`${localhost}/geocode`, body)
export const confirmPayment = async (body) => axios.post(`${localhost}/confirmPayment`, body)
export const commentLike = async (id) => axios.post(`${localhost}/commentLike/${id}`)
export const commentDisLike = async (id) => axios.post(`${localhost}/commentDisLike/${id}`)
export const addBuyBasket = async (id, body) => axios.post(`${localhost}/addBuyBasket/${id}`, body)
export const getAddress = async () => axios.get(`${localhost}/getAddress`)

