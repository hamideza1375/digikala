import { axios, localhost } from '../other/utils/axios/axios'


export const getCategory = async () => axios.get(`${localhost}/getCategory`)
export const getChildItems = async (id) => axios.get(`${localhost}/getChildItems/${id}`)
export const getSingleItem = async (id) => axios.get(`${localhost}/getSingleItem/${id}`)
export const createComment = async (id, data) => axios.post(`${localhost}/createComment/${id}`, data)
export const getChildItemComments = async (id) => axios.get(`${localhost}/getChildItemComments/${id}`)
export const editComment = async (id, commentid, data) => axios.put(`${localhost}/editComment/${id}?commentid=${commentid}`, data)
export const deleteComment = async (id, commentid) => axios.delete(`${localhost}/deleteComment/${id}?commentid=${commentid}`)
export const getSingleComment = async (id, commentid) => axios.get(`${localhost}/getSingleComment/${id}?commentid=${commentid}`)
export const getNotification = async () => axios.get(`${localhost}/getNotification`)
export const reverse = async (data) => axios.post(`${localhost}/reverse`, data)
export const geocode = async (data) => axios.post(`${localhost}/geocode`, data)
export const confirmPayment = async (data) => axios.post(`${localhost}/confirmPayment`, data)
