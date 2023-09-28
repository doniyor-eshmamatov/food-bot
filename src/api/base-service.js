import axios from "axios";
import { appConfig } from "../config/app.config";




const baseService = axios.create({
    baseURL: appConfig.apiPrefix,
    timeout: 10000
})


baseService.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)

baseService.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
)

export default baseService