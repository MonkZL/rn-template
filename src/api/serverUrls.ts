import {getIsProduct} from '../../core/packageOption';

export default {
  host: getIsProduct() ? '' : '',
};
