import React, { useState, useEffect, useCallback } from 'react';

import useAsync from '../../hooks/useAsync';
import { randomProductReq } from '../../utils/productAPIs/productAPIs';

import WishBoard from '../../components/WishBoard/WishBoard';

const RandomWishBoard = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const [state, refetch] = useAsync(randomProductReq, []);
  const { loading, response, error } = state;

  const randomProductReqHandler = useCallback(() => {
    if (response) {
      if (response.data.message === 'item fetch failed') {
        setErrorMessage('나의 관심사와 매칭되는 제품이 없습니다.');
        return;
      }

      const data = response.data.data;

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

      setRandomProducts(productObjs);

      console.log(randomProducts);
    }
  }, [response]);

  useEffect(() => {
    randomProductReqHandler();
  }, [randomProductReqHandler]);

  let content;

  if (errorMessage) {
    content = <p>{errorMessage}</p>;
  }

  if (response && !errorMessage) {
    content = <WishBoard productsData={randomProducts} />;
  }

  return <>{content}</>;
};

export default RandomWishBoard;
