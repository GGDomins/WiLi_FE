import React, { useEffect, useState } from 'react';

// components
import ImageCard from '../UI/ImageCard/ImageCard';
import ImageContainer from '../UI/ImageContainer/ImageContainer';
import Modal from '../Modal/Modal';

import ProductInfo from '../../pages/ProductInfo/ProductInfo';

const WishBoard = ({ productsData = [] }) => {
  const [cardSizes, setCardSizes] = useState([]);
  const [modalState, setModalState] = useState({
    isOpened: false,
    selectedProductId: null,
  });

  useEffect(() => {
    const getCardSizes = async () => {
      const sizes = {};
      for (const product of productsData) {
        sizes[product.id] = await cardSizePromise(product.img);
      }
      setCardSizes(sizes);
    };

    getCardSizes();
  }, [productsData]);

  // image card size calculated by image ratio
  const cardSizePromise = (imageUrl) => {
    return new Promise((resolve, reject) => {
      const imgObj = new Image();

      imgObj.onload = function () {
        const ratio = this.naturalWidth / this.naturalHeight;

        console.log(ratio);

        if (ratio < 0.8) {
          resolve('large');
        } else if (ratio > 0.8 && ratio < 1.4) {
          resolve('medium');
        } else {
          resolve('small');
        }
      };

      imgObj.onerror = function () {
        reject(new Error('Image load error'));
      };

      imgObj.src = imageUrl;
    });
  };

  const openModal = (productId) => {
    setModalState({
      isOpened: true,
      selectedProductId: productId,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpened: false,
      selectedProductId: null,
    });
  };

  return (
    <>
      <ImageContainer>
        {productsData.map((product) => {
          return (
            <ImageCard
              key={product.id}
              productInfo={product}
              size={cardSizes[product.id]}
              onClick={() => openModal(product.id)}
            />
          );
        })}
      </ImageContainer>
      <Modal isOpened={modalState.isOpened}>
        <ProductInfo id={modalState.selectedProductId} onClose={closeModal} />
      </Modal>
    </>
  );
};

export default WishBoard;
