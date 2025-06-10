import axios from "axios";
import config from "../../postcss.config.mjs";
const intance = axios.create({
    baseURL: 'http://Localhost:6579'
})

intance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if(token){
        config.headers.Authorization =token
    }
    return config
})

export default intance