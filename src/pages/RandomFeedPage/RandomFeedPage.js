import Header from '../../components/Header/Header';
import RandomWishBoard from './RandomWishBoard';

import useAuth from '../../hooks/useAuth';

const RandomFeedPage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <RandomWishBoard />
        </>
      )}
    </>
  );
};

export default RandomFeedPage;
