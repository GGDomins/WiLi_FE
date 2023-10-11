import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// global style
import GlobalStyle from './styles/GlobalStyle';

// pages
import MyWishListPage from './pages/MyWishListPage/MyWishListPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RandomFeedPage from './pages/RandomFeedPage/RandomFeedPage';
import SearchPage from './pages/SearchPage/SearchPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import KakaoRedirection from './pages/RedirectionPage/KakaoRedirection';
import NaverRedirection from './pages/RedirectionPage/NaverRedirection';

const App = () => {
  return (
    <>
      <Helmet>
        <title>WiLi</title>
      </Helmet>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MyWishListPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/add' element={<AddProductPage />} />
          <Route path='/edit/:id' element={<EditProductPage />} />
          <Route path='/random-feed' element={<RandomFeedPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route exact path='/kakao/callback' element={<KakaoRedirection />} />
          <Route exact path='/naver/callback' element={<NaverRedirection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
