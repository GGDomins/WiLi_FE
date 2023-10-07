// hooks
import { useNavigate } from 'react-router-dom';
import useAsync from '../../hooks/useAsync';

// API
import { kakaoLoginReq } from '../../utils/authAPIs/authAPIs';

const KakaoRedirection = () => {
  const navigate = useNavigate();

  const url = new URL(window.location.href);

  const KAKAO_CODE = url.searchParams.get('code');

  const [state, refetch] = useAsync(() => {
    return kakaoLoginReq(KAKAO_CODE);
  }, [KAKAO_CODE]);

  const { loading, response, error } = state;

  if (loading) return <p>로그인 중입니다. 잠시만 기다려주세요.</p>;
  if (error) {
    const data = error.response.data.data;
    navigate('/signup', { state: { data: data } });
  }
  if (response) {
    const accessToken = response.headers['accesstoken'];
    console.log(accessToken);
    localStorage.setItem('accessToken', accessToken);

    navigate('/');
  }
};

export default KakaoRedirection;
