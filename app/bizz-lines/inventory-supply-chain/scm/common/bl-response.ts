import { BlResponseCreator } from '../../../../../../bunny-common';

export const controllerResponseCreator = new BlResponseCreator(
  {
    getAllProducts: {
      GET_ALL_PRODUCTS_SUCCESS: {
        en: 'Get all products success',
        zh: '获取所有产品成功',
      },
      GET_ALL_PRODUCTS_FAILED: {
        en: 'Get all products failed',
        zh: '获取所有产品失败',
      },
    },
  },
  'bunny-web',
  'controller',
);
