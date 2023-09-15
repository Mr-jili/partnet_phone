import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

const service: AxiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});

service.defaults.headers.common['Authorization'] = '';

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
