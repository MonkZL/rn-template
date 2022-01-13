import {formatUrlSearchParamsToString} from './netUtil';

interface requestOptionsType {
  host: string;
}

export let requestOptions: Partial<requestOptionsType> = {};

export const setUpRequest = (options: requestOptionsType) => {
  requestOptions = options;
};

const request = async (method: string, url: string, params = {}) => {
  const requestInit = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  };
  let response = await fetch(requestOptions.host + url, requestInit);
  // 注意这里的成功不是code为200的成功，这里的成功是成功和服务器握手
  if (response.ok) {
    // 处理请求成功的公共逻辑
  } else {
    // 这里就是本地的问题 导致请求出错
    // 处理请求失败的公共逻辑
  }
  return response.json();
};

export const Post = async (url: string, params = {}) => {
  return request('POST', url, params);
};

export const Get = async (url: string, params = {}) => {
  url += formatUrlSearchParamsToString(params);
  return request('GET', url);
};
