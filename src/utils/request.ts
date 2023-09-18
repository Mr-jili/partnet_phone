import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: 'https://back.800010000.cn/api/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

service.defaults.headers.common['Authorization'] = 'Bearer f0205523-6590-4f97-b1a5-4b7f8859de2c';

service.interceptors.request.use((config) => {
    return config;
}, (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
});

service.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (error: AxiosError) => {
    console.log(error);
    return Promise.reject();
});

export default service;
