import { useNavigate } from 'react-router-dom';

import { StyledCard, Brand, ProductName } from './style';

const ImageCard = ({ children, productInfo, size, onClick }) => {
  const navigate = useNavigate();

  console.log(size);

  return (
    <>
      <StyledCard productInfo={productInfo} size={size} onClick={onClick}>
        {children}
        <Brand>{productInfo.brandName}</Brand>
        <ProductName>{productInfo.productName}</ProductName>
      </StyledCard>
    </>
  );
};

export default ImageCard;
