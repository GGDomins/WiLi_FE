import Label from '../../components/UI/InputLabel/InputLabel';
import InputBox from '../../components/UI/InputBox/InputBox';
import Button from '../../components/UI/Button/Button';
import InputGroup from '../../components/UI/InputGroup/InputGroup';
import FavSelect from '../../components/UI/FavButton/FavButton';

import {
  ButtonContainer,
  Form,
  Title,
  SubTitle,
  Container,
  InnerContainer,
  FavContainer,
} from './style';

import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/right.svg';

import {
  DEFAULT,
  SUCCESS,
  FAIL,
  CLICKED,
  NOT_CLICKED,
} from '../../styles/colors/colors';

const Step2 = ({ setStep, setFav, fav }) => {
  const favorites = [
    '패션 / 의류',
    '생활용품',
    '주방용품',
    '전자제품',
    '식품 / 식재료',
    '인테리어',
    '도서 / 음반',
    '반려동물품',
    '스포츠 / 레저',
    '기타',
  ];

  const favChangeHandler = (event) => {
    const target = event.target;
    const newFavValue = !fav[target.innerText];

    setFav((prev) => {
      return {
        ...prev,
        [target.innerText]: newFavValue,
      };
    });

    target.style.backgroundColor = newFavValue ? CLICKED : NOT_CLICKED;
    target.style.color = newFavValue ? 'white' : 'black';
  };

  const prevStepHandler = () => {
    setStep(1);
  };

  return (
    <>
      <Title>내 관심사를 선택해보세요!</Title>
      <SubTitle>최대 5개까지 선택 가능합니다.</SubTitle>
      <FavContainer>
        {favorites.map((favorite) => {
          return (
            <FavSelect onClick={favChangeHandler} width='205px' height='51px'>
              {favorite}
            </FavSelect>
          );
        })}
      </FavContainer>
      <ButtonContainer>
        <Button
          type='submit'
          width='115px'
          height='50px'
          borderRadius='60px'
          backgroundColor={NOT_CLICKED}
          float='right'
        >
          다음 <RightIcon />
        </Button>
        <Button
          type='button'
          onClick={prevStepHandler}
          width='115px'
          height='50px'
          borderRadius='60px'
          backgroundColor='#fff'
          float='right'
        >
          <LeftIcon /> 이전
        </Button>
      </ButtonContainer>
    </>
  );
};

export default Step2;
