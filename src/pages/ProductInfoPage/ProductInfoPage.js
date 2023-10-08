import Header from '../../components/Header/Header';
import ProductInfo from './ProductInfo';

import useAuth from '../../hooks/useAuth';

const ProductInfoPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <ProductInfo />
        </>
      )}
    </>
  );
};

export default ProductInfoPage;
