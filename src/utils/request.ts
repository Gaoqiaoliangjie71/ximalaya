import axios, { type AxiosRequestHeaders, type AxiosResponse } from 'axios';
import { ElMessage, } from 'element-plus';


/* 定义response对象的data接口 */
interface ResponseData<T> {
  code: number;
  data: T;
  message: string;
}

// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000,
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {

    //写token记得加
    (config.headers as AxiosRequestHeaders).token = ''
    return config;
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  /* 约束一下response */
  async (response: AxiosResponse<ResponseData<any>>) => {
    // 对响应数据做点什么
    const res = response.data;
    if (res.code !== 20000 && res.code !== 200) { /* 成功数据的code值为20000/200 */
      return Promise.reject(service.interceptors.response);
    } else {
      return res.data; /* 返回成功响应数据中的data属性数据 */
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.message.indexOf('timeout') != -1) {
      ElMessage.error('网络超时');
    } else if (error.message == 'Network Error') {
      ElMessage.error('网络连接错误');
    } else {
      if (error.response.data) ElMessage.error(error.response.statusText);
      else ElMessage.error('接口路径找不到');
    }
    return Promise.reject(error);
  }
);

export default service;
