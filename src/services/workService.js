import { axios, localhost} from '../utils/axios/axios'

// comment
export const post = (id, queryId, data) => axios.post(`${localhost}/createcommentchildfood/${id}?id=${queryId}`, data)
export const get = async (id, queryId,singleId) => axios.get(`${localhost}/getcommentsinglefood/${id}?id=${queryId}&&single_id=${singleId}`)
