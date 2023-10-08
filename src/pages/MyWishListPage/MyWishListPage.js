import React from 'react';

import useAuth from '../../hooks/useAuth';
import useAsync from '../../hooks/useAsync';
import { productReq } from '../../utils/productAPIs/productAPIs';

// components
import Header from '../../components/Header/Header';
import MyWishBoard from './MyWishBoard';

const MyWishListPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <MyWishBoard />
        </>
      )}
    </>
  );
};

export default MyWishListPage;
