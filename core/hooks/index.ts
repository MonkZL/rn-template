import {useEffect, useRef, useState} from 'react';

export const useScreenStore = (store: any) => {
  return useRef(store).current;
};

export const useStyles = <T>(targetStyles: () => T, deps: any[]): T => {
  const [styles, setStyles] = useState(targetStyles());
  useEffect(() => {
    setStyles(targetStyles());
  }, deps);
  return styles;
};
