import { getProducts } from '../../../common/services/products';
import actionTypes from './types';

export async function loadProducts() {
  let data;
  await getProducts().then((result) => {
    data = result;
  });

}
