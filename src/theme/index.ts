import {SnapshotIn, types} from 'mobx-state-tree';
import LightTheme from './LightTheme';

const ThemeTypes = types
  .model({
    key: types.optional(types.number, 0),
    //text-color
    textDefaultColor: types.string,
    textReverseColor: types.string,
    textActiveColor: types.string,
    textInactiveColor: types.string,
    //text-size 12 16 20 24 28 32 36
    textSize12: types.optional(types.number, 12),
    textSize16: types.optional(types.number, 16),
    textSize20: types.optional(types.number, 20),
    textSize24: types.optional(types.number, 24),
    textSize28: types.optional(types.number, 28),
    textSize32: types.optional(types.number, 32),
    textSize36: types.optional(types.number, 36),
    //bg-color
    bgDefaultColor: types.string,
  })
  .actions((self) => {
    return {
      plusKey() {
        self.key = self.key + 1;
      },
      test() {
        self.textDefaultColor = 'red';
        this.plusKey();
      },
    };
  });

export interface IThemeTypes extends SnapshotIn<typeof ThemeTypes> {}

const Theme = ThemeTypes.create(LightTheme);

export default Theme;
