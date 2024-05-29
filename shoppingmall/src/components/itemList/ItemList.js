import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Pagination from "../sellpage/PaginationArea";
import ItemFilter from "./ItemFilter";

// svg
import unlike from "../../assets/unlike.svg";

const ItemList = () => {
  const navigate = useNavigate();
  const productsPerRow = 5;
  const pages = [1, 2, 3, 4, 5];
  const [currentPage, setCurrentPage] = useState(0);
  const [sort, setSort] = useState("asc");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/product?page=${currentPage}&sort=${sort}`)
      .then((response) => response.json())
      .then((json) => {
        setProductList([...json]);
        console.log("JSON: ", json);
      })
  }, []);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const clickProduct = (productId) => {
    navigate(`/product/${productId}`, {state: {productId: productId}});
  };

  return (
    <Wrapper>
      <Container>
          <ItemFilter />
          <ListContainer>
                  <CardList>
                      {productList.map((product) => (
                          <Item
                          key={product.productId}
                          productsPerRow={productsPerRow}
                          onClick={() => {
                              clickProduct(product.productId)}}
                          >
                              <ImageWrapper>
                                  {/* <Image  src={product.imageUrl} alt={product.productName}/> */}
                                  <Image  src="https://via.placeholder.com/250/#D9D9D9" alt={product.productName}/> 
                              </ImageWrapper>
                              <InfoWrapper>
                                  <Info>
                                      <ProductName>{product.productName}</ProductName>
                                      <ProductPrice>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + " 원"}</ProductPrice>
                                      <ProductDescription>{product.description}</ProductDescription>
                                  </Info>
                                  <IconWrapper>
                                      <Icon src={unlike}/>
                                  </IconWrapper>
                              </InfoWrapper>
                          </Item> 
                      ))}   
                  </CardList>
          </ListContainer>        
      </Container> 
    <Pagination
             pages={pages}
             currentPage={currentPage}
             onPageChange={onPageChange}
         />
 </Wrapper>
  );
};

export default ItemList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-top: 32px;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`;

const ListContainer = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    margin-top: 28px;
    margin-left: 60px;
    justify-content: start; 
`;

const CardList = styled.div`
    display: flex;
    width: 100%;
    height:640px;
    justify-content: start; 
    flex-wrap: wrap;
`;

const Item = styled.div`
    width: 294px;
    height:250px;
    margin-right: 20px;
    margin-bottom: 90px;
    &:nth-child(4) {
        margin-right:0px;
    }
    &:nth-child(8) {
        margin-right:0px;
    }
    cursor: pointer;
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 150px;
    border: 1px solid white;
    border-radius: 3%;
`;

const Image = styled.img`
    width: 100%;
    height: 250px;
    border-radius: 3%;
    object-fit: cover;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: start;
    width: 100%;
    height: 26%;
    margin-top: 100px;
`;

const Info = styled.div`
    width: 200px;
    height: 100%;
    margin-top: 8px;
`;

const ProductName = styled.div`
    width: 150px;
    height: 19px;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: bold;
`;

const ProductPrice = styled.div`
    width: 86px;
    height: 17px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
`;

const ProductDescription = styled.div`
    width: 170px;
    height: 17px;
    font-size: 14px;
    font-weight: bold;
`;

const IconWrapper = styled.div`
    margin-left: 100px;
    margin-top: 10px;
`;

const Icon = styled.img`
    background-color: none;
`;