import { axios, localhost } from '../other/utils/axios/axios'


export const getSlider = async () => axios.get(`${localhost}/getSlider`)
export const getCategory = async () => axios.get(`${localhost}/getCategory`)
export const getChildItems = async (id) => axios.get(`${localhost}/getChildItems/${id}`)
export const getSingleItem = async (id) => axios.get(`${localhost}/getSingleItem/${id}`)
export const getOffers = async () => axios.get(`${localhost}/getOffers`)
export const getSimilars = async (id) => axios.get(`${localhost}/getSimilars/${id}`)
export const getPopulars = async () => axios.get(`${localhost}/getPopulars`)
export const createComment = async (id, body) => axios.post(`${localhost}/createComment/${id}`, body)
export const createCommentAnswer = async (id, body) => axios.post(`${localhost}/createCommentAnswer/${id}`, body)
export const editCommentAnswer = async (id, commentId, body) => axios.put(`${localhost}/editCommentAnswer/${id}?commentId=${commentId}`, body)
export const getChildItemComments = async (id) => axios.get(`${localhost}/getChildItemComments/${id}`)
export const editComment = async (id, body) => axios.put(`${localhost}/editComment/${id}`, body)
export const deleteComment = async (id) => axios.delete(`${localhost}/deleteComment/${id}`)
export const deleteCommentAnswer = async (id, commentId) => axios.delete(`${localhost}/deleteCommentAnswer/${id}?commentId=${commentId}`)
export const getSingleComment = async (id) => axios.get(`${localhost}/getSingleComment/${id}`)
export const getNotification = async () => axios.get(`${localhost}/getNotification`)
export const reverse = async (body) => axios.post(`${localhost}/reverse`, body)
export const geocode = async (body) => axios.post(`${localhost}/geocode`, body)
export const confirmPayment = async (body) => axios.post(`${localhost}/confirmPayment`, body)
export const commentLike = async (id) => axios.post(`${localhost}/commentLike/${id}`)
export const commentDisLike = async (id) => axios.post(`${localhost}/commentDisLike/${id}`)
export const likeAnswer = async (id, commentId) => axios.post(`${localhost}/likeAnswer/${id}?commentId=${commentId}`)
export const disLikeAnswer = async (id, commentId) => axios.post(`${localhost}/disLikeAnswer/${id}?commentId=${commentId}`)
export const addBuyBasket = async (id, body) => axios.post(`${localhost}/addBuyBasket/${id}`, body)
export const getAddress = async () => axios.get(`${localhost}/getAddress`)

