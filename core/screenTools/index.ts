import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

const DESIGN_DRAW = {
  width: 375,
  height: 667,
};

export const Size = (pt: number) => {
  return (pt * SCREEN_WIDTH) / DESIGN_DRAW.width;
};

export const SizeInt = (pt: number) => {
  return Math.floor(Size(pt));
};
