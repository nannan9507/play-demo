import Vue from 'vue'
import * as axios from 'axios'
Vue.prototype.http = axios

// 在页面上调用axios 即可，或者Vue.prototype.http 直接引用
// 貌似在nuxt.js中，plugins会“更改”到axios原生的配置
export default ({ redirect }) => {
  axios.defaults.baseURL = '/api/'

  axios.interceptors.request.use(config => {
    const token = window.localStorage.getItem('jwt_token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(resp => {
    if (!resp.data.status) {
      return Promise.reject(resp.data)
    }

    if (resp.data.errorCode === 'COMMON-000001') {
      return redirect('/login')
    }

    return resp.data.data
  }, error => {
    return Promise.reject(error)
  })
}
