import Header from '../../components/Header/Header';
import EditProduct from './EditProduct';

import useAuth from '../../hooks/useAuth';

const EditProductPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <EditProduct />
        </>
      )}
    </>
  );
};

export default EditProductPage;
