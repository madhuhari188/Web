import axios from "axios";

export const  axiosInstance = axios.create({
    baseURL : "https://auth-data.herokuapp.com/"
})