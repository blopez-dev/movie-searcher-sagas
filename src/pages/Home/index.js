import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../application/store/actions/products';
import { selectProducts } from '../../application/store/reducers/products';

import WrapperHome from './style';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  console.log(products);
  return (
    <div>
      <WrapperHome>
        <h2>Products</h2>
        {
          products
            ? products.map((item) => (console.log(item)))
            : null
        }
      </WrapperHome>
    </div>

  );
};

export default Home;
