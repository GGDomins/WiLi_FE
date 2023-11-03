import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// global style
import GlobalStyle from './styles/GlobalStyle';

// pages
import MyWishListPage from './pages/MyWishListPage/MyWishListPage';
import LandingPage from './pages/LandingPage/LandingPage';
import NormalSignUpPage from './pages/NormalSignUpPage/NormalSignUpPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RandomFeedPage from './pages/RandomFeedPage/RandomFeedPage';
import SearchPage from './pages/SearchPage/SearchPage';
import EditProductPage from './pages/EditProductPage/EditProductPage';
import AddProductPage from './pages/AddProductPage/AddProductPage';
import KakaoRedirection from './pages/RedirectionPage/KakaoRedirection';
import NaverRedirection from './pages/RedirectionPage/NaverRedirection';
import SignUpPage from './pages/SignUpPage/SignUpPage';

import enTranslation from './locales/en.json';
import krTranslation from './locales/kr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    kr: { translation: krTranslation },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MyWishListPage />} />
          <Route path='/welcome' element={<LandingPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/normal-signup' element={<NormalSignUpPage />} />
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
