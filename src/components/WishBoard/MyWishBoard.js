import React, { useState, useEffect, useCallback } from 'react';

import useAsync from '../../hooks/useAsync';

// apis
import { productReq } from '../../utils/productAPIs/productAPIs';

import WishBoard from './WishBoard';
import Sort from '../Sort/Sort';
import ToolBar from '../UI/ToolBar/ToolBar';

//import Loading from '../Loading/Loading';

const MyWishBoard = () => {
  const [myProducts, setMyProducts] = useState([]);

  const [selectedMonth, setSelectedMonth] = useState([]);
  const [selectedFav, setSelectedFav] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];

  const categories = [
    '패션 / 의류',
    '생활용품',
    '주방용품',
    '전자제품',
    '식품 / 식재료',
    '인테리어',
    '도서 / 음반',
    '반려동물품',
    '스포츠 / 레저',
    '기타',
  ];

  const monthClickHandler = (month) => {
    if (selectedMonth.includes(month)) {
      setSelectedMonth(selectedMonth.filter((m) => m !== month));
    } else {
      setSelectedMonth([...selectedMonth, month]);
    }
  };

  const favClickHandler = (fav) => {
    if (selectedFav.includes(fav)) {
      setSelectedFav(selectedFav.filter((f) => f !== fav));
    } else {
      setSelectedFav([...selectedFav, fav]);
    }
  };

  const [sortType, setSortType] = useState('');

  const sortHandler = (sortType) => {
    setSortType(sortType);
  };

  const sortProducts = (products) => {
    let sortedProducts = [...products];

    if (sortType === 'category' && selectedFav.length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        selectedFav.includes(product.category)
      );
    }

    if (sortType === 'month' && selectedMonth.length > 0) {
      sortedProducts = sortedProducts.filter((product) =>
        selectedMonth.includes(product.date.slice(5, 7))
      );
    }

    return sortedProducts;
  };

  const [state, refetch] = useAsync(productReq, []);
  const { loading, response, error } = state;

  const productReqHandler = useCallback(() => {
    if (response) {
      const message = response.data.message;

      if (message === 'no product found') {
        setErrorMessage('제품 없음');
        return;
      }

      const images = response.data.data.images;
      const products = response.data.data.posts;

      let imageUrls = images.map((base64String) => {
        return 'data:image/png;base64,' + base64String;
      });

      let productObjs = products.map((product, i) => {
        const parsed = JSON.parse(product);

        return {
          id: parsed.id,
          brandName: parsed.brandName,
          productName: parsed.productName,
          date: parsed.date,
          category: parsed.category,
          img: imageUrls[i],
        };
      });

      const sortedProducts = sortProducts(productObjs);
      setMyProducts(sortedProducts);
    }
  }, [response, sortType, selectedFav, selectedMonth]);

  useEffect(() => {
    productReqHandler();
  }, [productReqHandler]);

  let content;

  if (errorMessage) {
    content = <p>현재 추가된 제품이 없습니다.</p>;
  }

  if (response && !errorMessage) {
    content = <WishBoard productsData={myProducts} />;
  }

  return (
    <>
      <ToolBar onChooseSort={sortHandler} />
      {sortType === 'month' && (
        <Sort
          items={months}
          selectedItems={selectedMonth}
          onItemClick={monthClickHandler}
        />
      )}
      {sortType === 'category' && (
        <Sort
          items={categories}
          selectedItems={selectedFav}
          onItemClick={favClickHandler}
          width='120px'
        />
      )}
      {content}
    </>
  );
};

export default MyWishBoard;
