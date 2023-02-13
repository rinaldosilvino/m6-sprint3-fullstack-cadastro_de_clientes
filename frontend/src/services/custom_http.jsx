import axios from "axios"
const custom_http = axios.create({
    baseURL: "http://localhost:3002",
    withCredentials:true
})

export default custom_http