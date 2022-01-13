import responseCode from './responseCode';
import DeviceInfo from 'react-native-device-info';

interface paramsType {
  [key: string]: any;
}

/**
 * 组装请求参数成 value1=1&value2=2 这种形式
 * @param params
 * @returns {string}
 */
export const formatUrlSearchParamsToString = (params: paramsType): string => {
  let urlSearchParams = new URLSearchParams();
  for (let key in params) {
    if (params[key] !== undefined || params[key] !== null) {
      urlSearchParams.append(key, params[key]);
    }
  }
  return urlSearchParams.toString();
};

interface responseType {
  code: number;
  msg: string;
}

/**
 * 判断请求是否成功
 * @param response
 * @returns {boolean}
 */
export const requestSuccess = (response: responseType) => {
  return response?.code === responseCode.success && response?.msg === 'SUCCESS';
};

/**
 * 获取设备唯一Id
 * @returns {string}
 */
export const getUniqueId = () => {
  return `${DeviceInfo.getBrand() || 'unknown'}-${
    DeviceInfo.getDeviceId() || 'unknown'
  }-${DeviceInfo.getMacAddressSync() || 'unknown'}-${
    DeviceInfo.getUniqueId() || 'unknown'
  }`;
};
