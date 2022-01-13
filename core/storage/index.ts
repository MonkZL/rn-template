import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 保存string
 * @param key
 * @param value
 */
export const setValue = async (key: string, value: string) => {
  if (!value) {
    return value;
  }
  return await AsyncStorage.setItem(key, value);
};

/**
 * 保存obj
 * @param key
 * @param value
 */
export const setObjValue = async (key: string, value: object) => {
  if (!value) {
    return value;
  }
  const valueStr = JSON.stringify(value);
  return await setValue(key, valueStr);
};

/**
 * 获取string
 * @param key
 * @param defaultValue
 */
export const getValue = async (key: string, defaultValue: string) => {
  let value = await AsyncStorage.getItem(key);
  if (!value) {
    value = defaultValue;
  }
  return value;
};

/**
 * 获取obj
 * @param key
 * @param defaultValue
 */
export const getObjValue = async <T>(
  key: string,
  defaultValue = {}
): Promise<T> => {
  if (!defaultValue) {
    defaultValue = {};
  }
  let value = await getValue(key, JSON.stringify(defaultValue));
  return JSON.parse(value);
};

/**
 * 移除string
 * @param key
 */
export const removeValue = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};
