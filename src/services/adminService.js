import {axios, localhost} from '../other/utils/axios/axios'

// food
export const delete1 = (id) => axios.delete(`${localhost}/deletefood/${id}`)
export const put = (id, queryId, data) => axios.put(`${localhost}/editchildfood/${id}?id=${queryId}`, data)
