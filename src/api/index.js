import axios from 'axios';
import setting from '@/setting';
import { message } from 'antd';
import { jsonp } from '@/utils/util';

const api = axios.create({
  baseURL: setting.baseURL,
  timeout: setting.timeout,
  headers: {
    'x-requested-with': 'XMLHttpRequest',
  },
});

// api.interceptors.request.use(conf => {
//   if (conf.method === 'post') {
//     // 没有显式设置'Content-Type'
//     if (!conf.headers['Content-Type']) {
//       conf.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//       conf.data = qs.stringify(conf.data, { arrayFormat: 'repeat' });
//     }
//   }
//   return conf;
// }, err => {
//   message.error(err.toString());
//   return Promise.reject(err);
// });

function sendResponse(response, method) {
  let { code, msg, data } = response;
  let thisLocation = window.encodeURIComponent(window.location.href);

  switch (code) {
    case '010401':
      //未登录
      window.location.href = '//crov.vemic.com?nextPage=' + thisLocation;
      break;
    case '500':
      // message.error(res.data.message || '500 , We\'re sorry, but something went wrong.')
      if (window.location.pathname !== '/#/500') {
        window.location.href = '/#/500';
      }
      break;
    case '404':
      window.location.href = '/#/404';
      break;
    case '10002':
      message.error(msg);
      break;
  }
  return response;
}

api.interceptors.response.use(res => {
  // console.log('res', res);
  if (!res.data) return null;

  if(res.request && res.request.responseURL && res.request.responseURL.indexOf('client_id') !== -1) { //client_id判断页面是否302跳转
    window.location.href = res.request.responseURL
  }

  //返回文件流格式
  var method = res.config.method;
  if (res.data.status === '160000') { // OSS工作人员无权限
    message.error(res.data.message);
    return Promise.reject(res.data.message);
  }
  else {
    return sendResponse(res.data, method);
  }


}, err => {
  if (axios.isCancel(err)) {
    console.log('request cancel', err);
    return Promise.reject(err);
  }
  message.error(err.toString());
  return Promise.reject(err);
});

// jsonp跨域请求
const _jsonp = (url, params) => {
  return new Promise((resolve, reject) => {
    jsonp(url, params).then((response) => {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      resolve(response);
    });
  });

};

// 普通跨域请求
const crosService = axios.create({
  baseURL: setting.baseURL,
  withCredentials: true,
  timeout: setting.timeout
})

crosService.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
  return config
})
crosService.interceptors.response.use(res => {
  // console.log('res', res);
  if (!res.data) return null;

  if(res.request && res.request.responseURL && res.request.responseURL.indexOf('client_id') !== -1) { //client_id判断页面是否302跳转
    window.location.href = res.request.responseURL
  }

  //返回文件流格式
  var method = res.config.method;
  if (res.data.status === '160000') { // OSS工作人员无权限
    message.error(res.data.message);
    return Promise.reject(res.data.message);
  }
  else {
    return sendResponse(res.data, method);
  }


}, err => {
  if (axios.isCancel(err)) {
    console.log('request cancel', err);
    return Promise.reject(err);
  }
  message.error(err.toString());
  return Promise.reject(err);
});

export { api as default,crosService, sendResponse, _jsonp };
