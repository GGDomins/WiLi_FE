import Header from '../../components/Header/Header';
import AddProduct from './AddProduct';

import useAuth from '../../hooks/useAuth';

const AddProductPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <AddProduct />
        </>
      )}
    </>
  );
};

export default AddProductPage;
