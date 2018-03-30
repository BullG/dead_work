import axios from 'axios'
import url from './url'
import qs from 'qs'

//const ajaxUrl = url + '/api'

let ajax = axios.create({
  baseURL: url,//ajaxUrl
  timeout: 30000
})

ajax.defaults.withCredentials = true
ajax.interceptors.request.use(config => {
  if (config.url === '/qiniu' || config.url === '/headImg') { } else {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
  }

  return config
}, error => {
  loadinginstace.close()
  return Promise.reject(error)
})
export default ajax