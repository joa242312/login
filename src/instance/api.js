import axios from "axios";
const intance = axios.create({
    baseURL: 'http://Localhost:6579'
})

export default intance