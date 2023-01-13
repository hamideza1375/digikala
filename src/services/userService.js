import { axios, localhost} from '../utils/axios/axios'

export const registerUser = (data) => axios.post(`${localhost}/register`, data)
export const delete1 = (allId) => axios.delete(`${localhost}/deleteMultiProposal?allId=${allId}`)