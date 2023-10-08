import Header from '../../components/Header/Header';
import RandomWishBoard from './RandomWishBoard';

const RandomFeedPage = () => {
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
