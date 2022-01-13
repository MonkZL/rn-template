import {useEffect, useRef, useState} from 'react';

export const useScreenStore = (store: any) => {
  return useRef(store).current;
};

export const useStyles = (targetStyles: any, deps: any[]) => {
  const [styles, setStyles] = useState(targetStyles);
  useEffect(() => {
    setStyles(targetStyles);
  }, deps);
  return styles;
};
