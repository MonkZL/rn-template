/*
   String
 */
String.prototype.isEmail = function () {
  let strTemp = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
  return strTemp.test(this);
};

String.prototype.isBlank = function () {
  return this == null || this.trim() === '';
};

String.prototype.isNickName = function () {
  let strTemp = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
  return strTemp.test(this);
};
String.prototype.highLevel = function () {
  let reg = /(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,30}/;
  return reg.test(this);
};

/*
	   Array
	 */
Array.prototype.isBlank = function () {
  return this == null || this.length === 0;
};

/*
		Text
	 */
import {Text, Platform} from 'react-native';

if (Platform.OS === 'android') {
  const sourceRender = Text.render;
  Text.render = function render(props, ref) {
    return sourceRender.apply(this, [
      {
        ...props,
        style: [props.style, {fontFamily: ''}],
      },
      ref,
    ]);
  };
}
