import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from "../../style/theme";
import styled from 'styled-components';
import Pagination from '../commom/Pagination';
import ProductFilter from './ProductFilter';
// svg
import unlike from "../../assets/unlike.svg";
const ProductList = () => {
    const navigate = useNavigate();
    const productsPerRow = 3;
    const pages = [1, 2, 3, 4, 5];
    const [isChecked, setIsLike] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [productList, setProductList] = useState([
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
          {
            id: 2,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
          {
            id: 3,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
          {
            id: 4,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
          {
            id: 5,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
          {
            id: 6,
            image: "https://via.placeholder.com/150",
            productName: "아디다스",
            productPrice: "56,000",
            description:
              "상품 설명",
          },
       ]);

    const onPageChange = (page) => {
        setCurrentPage(page);
        console.log(`Page changed to ${page}`);
    };

    const clickProduct = (id) => {
        navigate(`/product/${id}`);
    };

    const handleHeart = (index) => {
        setIsLike(() => {
            const newLike = [...isChecked];
            newLike[index] = !newLike[index];
            return newLike;  
        });
    };
    
    return (
        <ProductListPageWrapper >
            <ProductFilter/>
            <ProductListContainer>
                {productList.map((product, index) => (
                        <ProductItem key={index} productsPerRow = { productsPerRow} onClick={() => {clickProduct(product.id)}} >
                            <ProductImage src={product.image} alt={product.productName}/>
                            <ProductInfoWrapper>
                                <ProductInfo>
                                    <ProductName>{product.productName}</ProductName>
                                    <ProductPrice>{product.productPrice + " 원"}</ProductPrice>
                                    <ProductDescription>{product.description}</ProductDescription>
                                </ProductInfo>
                                <IconWrapper onClick={() => {handleHeart(index)}}>
                                        <Icon src={unlike} fill="grayBgColor"/>
                                </IconWrapper>
                            </ProductInfoWrapper>
                        </ProductItem>
                ))}     
            </ProductListContainer>
            <Pagination
                pages={pages}
                currentPage={currentPage}
                onPageChange={onPageChange}
            />
        </ProductListPageWrapper>
    );
};

export default ProductList;

const ProductListPageWrapper = styled.div`
    display: flex;
    width: 1920px;
    hegith: 1080px;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 99px;
    flex-direction: column;
    justify-content:space-around;
    align-items:space-around;
`;

const ProductListContainer = styled.div`
    display: flex;    
    width: 90%;
    margin-left: 6%;
    margin-bottom: 64px;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProductItem = styled.div`
    display: flex;
    box-sizing: border-box;
    padding: 0 0;
    margin-right: 30px;
    margin-bottom: 35px;
    flex-direction: column;
    cursor:pointer;
`;

const ProductImage = styled.img`
    width: 250px;
    height: 250px;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: red;
`;

const ProductInfoWrapper = styled.div`
    width: 250px;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const ProductInfo = styled.div``;

const ProductName = styled.div`
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: 500;
    line-heigh: 19.36px;
`;

const ProductPrice = styled.div`
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: 600;
    line-heigh: 16.94px;
`;

const ProductDescription = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-heigh: 16.94px;
`;

const IconWrapper = styled.div`
    padding: 0 0;
    margin-right: 10px;
    background-color: ${theme.white};
`;

const Icon = styled.img`
    background-color: ${(props) => (props.isChecked ? "#EB4646" : "#f4f4f4")};
`;