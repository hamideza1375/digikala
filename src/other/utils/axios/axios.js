import localStorage from "@react-native-async-storage/async-storage"
import Axios from 'axios'
export const localhost = "http://localhost:4000"
// Axios.defaults.headers.post["Content-Type"] = "multipart/form-data"
Axios.defaults.headers.post["Content-Type"] = "application/json"
const setToken = (async () => { const token = await localStorage.getItem("token"); if (token) Axios.defaults.headers.common["Authorization"] = token; })()
function _axios() {
   (async () => {
      this.get = async (url) => { let response = await Axios.get(url); return { data: response.data, status: response.status }; }
      this.post = async (url, data) => { let response = await Axios.post(url, data); return { data: response.data, status: response.status } }
      this.put = async (url, data) => { let response = await Axios.put(url, data); return { data: response.data, status: response.status } }
      this.delete = async (url) => { let response = await Axios.delete(url); return { data: response.data, status: response.status } }

      this.postData = async (url, data) => { const dt = new FormData(); for (let i in data) { dt.append(String(i), data[i]) }; let response = await Axios.post(url, dt, { headers: { "Content-Type": "multipart/form-data" } }); return { data: response.data, status: response.status } }
      this.putData = async (url, data) => { const dt = new FormData(); for (let i in data) { dt.append(String(i), data[i]) }; let response = await Axios.put(url, dt, { headers: { "Content-Type": "multipart/form-data" } }); return { data: response.data, status: response.status } }

   })()
}
export const axios = new _axios()