import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResultData } from "./interface";
import { Navigate, useNavigate } from "react-router-dom";


const BASE_URL = "https://api.example.com";

const createAxiosInstance = (): AxiosInstance => {
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 10000,
    });

    //请求拦截器
    instance.interceptors.request.use((config: AxiosRequestConfig) => {
        // 在请求发送之前做一些处理
        const token = localStorage.getItem("token")
        if (token) {
            console.log("检测到有token:" + token + "马上向服务器发请求")
        }
        return config;
    }, (error) => {
        // 处理请求错误
        return Promise.reject(error);
    });

    //响应拦截器
    instance.interceptors.response.use((response: AxiosResponse) => {
        // 在响应返回之前做一些处理
        console.log("马上得到数据了")
        return response;
    }, (error) => {
        // 处理响应错误
        return Promise.reject(error);
    });

    return instance;
};

const api = createAxiosInstance();

const get = <T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return api.get(url, { params, ..._object });
}
const post = <T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return api.post(url, params, _object);
}
const put = <T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> => {
    return api.put(url, params, _object);
}
const del = <T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> => {
    return api.delete(url, { params, ..._object });
}


export { get, post, put, del };