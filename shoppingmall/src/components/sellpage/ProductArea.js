import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ModifyIcon from "../../assets/modify.svg";
import ModifyHIcon from "../../assets/modifyh.svg";
import { Navigate } from "react-router-dom";

const ProductArea = ({ ProductData }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [nav, setnav] = useState(true);

  const products = ProductData.map(item => ({
    image: item.files,
    title: item.title,
    price: item.price,
    description: item.description,
    productId: item.productId,
  }));

  // 제품 수정 함수
  const handleProductEdit = productId => {
    console.log("제품 수정", productId);
    localStorage.setItem("productId", productId);
    setnav(false);
  };

  if (!nav) {
    return <Navigate to="/modify" />;
  }

  return (
    <Wrapper>
      {products.map((product, index) => (
        <StyledProductItem key={index}>
          <ProductImage src={product.image} alt={product.title} />
          <ProductInfo>
            <ProductTitle onClick={() => handleProductEdit(index)}>
              {product.title}
            </ProductTitle>
            <ProductButton
              src={hoveredIndex === index ? ModifyHIcon : ModifyIcon}
              alt="수정"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleProductEdit(product.productId)}
            />
          </ProductInfo>
          <ProductPrice>{product.price}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </StyledProductItem>
      ))}
    </Wrapper>
  );
};

export default ProductArea;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const StyledProductItem = styled.div`
  width: 250px;
  margin: 0 20px 20px 0;
  box-sizing: border-box;
`;

const ProductImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
`;

const ProductTitle = styled.h2`
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
`;

const ProductButton = styled.img`
  width: 17px;
  height: 17px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const ProductPrice = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 16.94px;
  text-align: left;
  margin-top: -6px;
  margin-bottom: 5px;
`;

const ProductDescription = styled.p`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  text-align: left;
`;
