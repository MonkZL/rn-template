import {
  CommonActions,
  StackActions,
  TabActions,
  useNavigationContainerRef,
} from '@react-navigation/native';

interface navigationRefTypes {
  target?: ReturnType<typeof useNavigationContainerRef>;
}

const navigationRef: navigationRefTypes = {};

export const initNavigation = () => {
  navigationRef.target = useNavigationContainerRef();
  return navigationRef.target;
};

const getNavigationRef = () => {
  return navigationRef.target!;
};

export const navigate = (screenName: string, params = {}) => {
  const navigateAction = CommonActions.navigate(screenName, params);
  getNavigationRef().dispatch(navigateAction);
};

export const reset = (index: number, routes = []) => {
  const resetAction = CommonActions.reset({index: index, routes: routes});
  getNavigationRef().dispatch(resetAction);
};

/**
 * TODO 可以指定回退到路由里面重复页面的某一个
 */
export const goBack = () => {
  getNavigationRef().dispatch(CommonActions.goBack());
};

/**
 * TODO 可以指定设置参数到路由里面重复页面的某一个
 */
export const setParams = (params: {}) => {
  const setParamsAction = CommonActions.setParams(params);
  getNavigationRef().dispatch(setParamsAction);
};

/**
 * TODO 可以指定替换路由里面重复页面的某一个
 */
export const replace = (screenName: string, params = {}) => {
  const replaceAction = StackActions.replace(screenName, params);
  getNavigationRef().dispatch(replaceAction);
};

export const push = (screenName: string, params = {}) => {
  const pushAction = StackActions.push(screenName, params);
  getNavigationRef().dispatch(pushAction);
};

export const pop = () => {
  const popAction = StackActions.pop(1);
  getNavigationRef().dispatch(popAction);
};

export const popToTop = () => {
  const popToTopAction = StackActions.popToTop();
  getNavigationRef().dispatch(popToTopAction);
};

export const jumpTo = (screenName: string, params = {}) => {
  const jumpToAction = TabActions.jumpTo(screenName, params);
  getNavigationRef().dispatch(jumpToAction);
};

export const getCurrentRoute = () => {
  return getNavigationRef().getCurrentRoute();
};
