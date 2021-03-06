import axios from 'axios'

// 使用自定义配置 创建一个 axios 实例
const instance = axios.create({
  baseURL: ' https://cnodejs.org/api/v1',
  responseType: 'json',
  timeout: 1000 * 20,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest',
    'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT', // 避免 IE10 返回 304
    'shouldIntercept': true
  }
})

// 添加响应拦截器
// instance.interceptors.response.use(response => {
//   console.log('88888888', response)
//   return response
// }, error => {
//   if (error.message === 'Network Error') {
    
//   }
//   if (error.message === 'timeout of 20000ms exceeded') {
    
//   }
//   return Promise.reject(error)
// })

export default instance