import Header from '../../components/Header/Header';
import SearchWishBoard from './SearchWishBoard';

import useAuth from '../../hooks/useAuth';

const SearchPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <SearchWishBoard />
        </>
      )}
    </>
  );
};

export default SearchPage;
