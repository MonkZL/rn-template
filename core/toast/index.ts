import Toast from 'react-native-root-toast';

const toastRef = {current: null};

const toast = (message: string) => {
  if (toastRef.current) {
    Toast.hide(toastRef.current);
  }
  toastRef.current = Toast.show(message, {duration: 1000, position: 0});
};

export default toast;
