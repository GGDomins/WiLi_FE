import React, { useState, useEffect, useCallback } from 'react';
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
  const { loading, response, error } = state;

  const searchProductReqHandler = useCallback(() => {
    if (response) {
      const data = response.data.data;
      if (data.message === '유저 없음') {
        setErrorMessage('존재하지 않는 유저입니다.');
        return;
      } else if (data.message === '제품 없음') {
        setErrorMessage('존재하지 않는 제품입니다.');
        return;
      }

      const images = data.images;
      const products = data.items;

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
  }, [response, query]);

  useEffect(() => {
    searchProductReqHandler();
  }, []);

  let content;

  if (errorMessage) {
    content = <p>{errorMessage}</p>;
  }

  if (response && !errorMessage) {
    content = <WishBoard productsData={searchProducts} />;
  }

  return <>{content}</>;
};

export default SearchWishBoard;
