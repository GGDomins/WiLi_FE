import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// global style
import GlobalStyle from './styles/GlobalStyle';

// pages
import MyWishList from './pages/MyWishList/MyWishList';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import RandomFeed from './pages/RandomFeed/RandomFeed';
import SearchQuery from './pages/Search/SearchQuery';
import EditProduct from './pages/EditProduct/EditProduct';
import AddProduct from './pages/AddProduct/AddProduct';
import KakaoRedirection from './pages/Redirection/KakaoRedirection';
import NaverRedirection from './pages/Redirection/NaverRedirection';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path='/' element={<MyWishList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/add' element={<AddProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />
          <Route path='/random-feed' element={<RandomFeed />} />
          <Route path='/search' element={<SearchQuery />} />
          <Route exact path='/kakao/callback' element={<KakaoRedirection />} />
          <Route exact path='/naver/callback' element={<NaverRedirection />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
