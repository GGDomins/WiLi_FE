import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useAsync from '../../hooks/useAsync';

import { searchProductReq } from '../../utils/productAPIs/productAPIs';

import WishBoard from './WishBoard';

const SearchWishBoard = () => {
  const url = new URL(window.location.href);
  const query = url.searchParams.get('query');

  const [searchProducts, setSearchProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [state, refetch] = useAsync(() => searchProductReq(query), []);
  const { loading, data, error } = state;

  useEffect(() => {
    if (data) {
      if (data.data.message === '유저 없음') {
        setErrorMessage('존재하지 않는 유저입니다.');
        return;
      } else if (data.data.message === '제품 없음') {
        setErrorMessage('존재하지 않는 제품입니다.');
        return;
      }

      const images = data.data.images;
      const products = data.data.posts;

      console.log(images);
      console.log(products);

      let imageUrls = images.map((base64String) => {
        return 'data:image/png;base64,' + base64String;
      });

      const productObjs = products.map((product, i) => {
        const parsed = JSON.parse(product);

        return {
          id: parsed.id,
          brandName: parsed.brandName,
          productName: parsed.productName,
          img: imageUrls[i],
        };
      });

      setSearchProducts(productObjs);

      console.log(searchProducts);
    }
  }, [data, query]);

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {data && !errorMessage && <WishBoard productsData={searchProducts} />}
    </>
  );
};

export default SearchWishBoard;
