import Profile from './Profile';
import Header from '../../components/Header/Header';

import useAuth from '../../hooks/useAuth';

const ProfilePage = () => {
  const [isAuthed, setIsAuthed] = useAuth();

  return (
    <>
      {isAuthed && (
        <>
          <Header />
          <Profile />
        </>
      )}
    </>
  );
};

export default ProfilePage;
