import React from 'react';

import useAuth from '../../hooks/useAuth';
import useAsync from '../../hooks/useAsync';
import { productReq } from '../../utils/productAPIs/productAPIs';

// components
import Header from '../../components/Header/Header';
import MyWishBoard from '../../components/WishBoard/MyWishBoard';

const MyWishList = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <h1>안녕하세요</h1>
          <Header />
          <MyWishBoard />
        </>
      )}
    </>
  );
};

export default MyWishList;
