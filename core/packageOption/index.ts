//是否是打包上线版本
const isProduct = false;

//获取是否是打包上线版本
export const getIsProduct = () => {
  //如果是debug版本返回false
  if (__DEV__) {
    return false;
  }
  //返回是否是打包上线版本
  return isProduct;
};

//项目配置初始化
export const initPackageOption = () => {
  if (getIsProduct()) {
    console.log = () => {};
  }
};
