import Axios from 'axios'
const axiosinstance  = Axios.create()
axiosinstance.defaults.headers.common['Authorization'] = "Bearer sldf.lkds.lfs"

export default axiosinstance
